import React, { useState, useEffect } from 'react'
var Chart = require('chart.js')

export default function BasicOscillator () {
  const [audioContext, setAudioContext] = useState(null)
  const [osc, setOsc] = useState(null)
  const [adsr, setAdsr] = useState(null)
  const [freq, setFreq] = useState(440)
  const [attack, setAttack] = useState(0.5)
  const [decay, setDecay] = useState(50)
  const [sustain, setSustain] = useState(0.5)
  const [release, setRelease] = useState(0.5)
  const [chart, setChart] = useState(null)

  useEffect(() => {
    let audioContext

    try {
      audioContext = new (window.AudioContext || window.webkitAudioContext)()
    } catch (error) {
      window.alert(`Sorry, but your browser doesn't support the Web Audio API!`)
    }

    setAudioContext(audioContext)

    displayLineChart()
  }, [])

  function playAudio () {
    // Creating Oscillator and ADSR Envelope
    const osc = audioContext.createOscillator()
    const adsr = audioContext.createGain()

    // Connecting Instances
    osc.connect(adsr)
    adsr.connect(audioContext.destination)

    // Setting Frequency
    osc.frequency.setValueAtTime(freq, audioContext.currentTime)

    // Starting Gain Value
    const t0 = audioContext.currentTime
    osc.start(t0)

    // Volume Zero (Starting Point)
    adsr.gain.setValueAtTime(0, t0)

    // Attack
    const t1 = t0 + attack
    adsr.gain.linearRampToValueAtTime(1, t1)

    // Decay
    const t2 = decay / 100.0
    adsr.gain.setTargetAtTime(sustain, t1, t2)

    setOsc(osc)
    setAdsr(adsr)
  }

  function stopAudio () {
    const time = audioContext.currentTime
    adsr.gain.cancelScheduledValues(time)
    adsr.gain.setValueAtTime(adsr.gain.value, time)
    adsr.gain.setTargetAtTime(0, time, release)

    const stop = setInterval(() => {
      if (adsr.gain.value < 0.01) {
        osc.stop()
        clearInterval(stop)
      }
    }, 10)
  }

  function displayLineChart () {
    var ctx = document.getElementById('myChart')
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [0, attack, attack + decay / 100.0, 2, 2 + release],
        datasets: [
          {
            label: 'ADSR Envelope',
            data: [0, 1, sustain, sustain, 0],
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)']
          }
        ]
      },
      options: {
        elements: {
          line: {
            tension: 0
          }
        },
        scales: {
          xAxes: [
            {
              ticks: {
                autoSkip: false
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    })

    setChart(myChart)
  }

  function changeFrequency (event) {
    osc.frequency.setValueAtTime(event.target.value, audioContext.currentTime)
    setFreq(event.target.value)
  }

  function playNote (event) {
    // Creating Oscillator and ADSR Envelope
    const osc = audioContext.createOscillator()
    const adsr = audioContext.createGain()

    osc.type = 'sawtooth'

    // Connecting Instances
    osc.connect(adsr)
    adsr.connect(audioContext.destination)

    // Setting Frequency
    osc.frequency.setValueAtTime(
      parseFloat(event.target.id),
      audioContext.currentTime
    )

    // Starting Gain Value
    const t0 = audioContext.currentTime
    osc.start(t0)

    // Volume Zero (Starting Point)
    adsr.gain.setValueAtTime(0, t0)

    // Attack
    const t1 = t0 + attack
    adsr.gain.linearRampToValueAtTime(1, t1)

    // Decay
    const t2 = decay / 100.0
    adsr.gain.setTargetAtTime(sustain, t1, t2)

    setOsc(osc)
    setAdsr(adsr)

    const time = audioContext.currentTime
    adsr.gain.cancelScheduledValues(time)
    adsr.gain.setValueAtTime(adsr.gain.value, time)
    adsr.gain.setTargetAtTime(0, time, release)

    const stop = setInterval(() => {
      if (adsr.gain.value < 0.01) {
        osc.stop()
        clearInterval(stop)
      }
    }, 10)
  }

  return (
    <div>
      <canvas id='myChart' height='450' width='800'></canvas>
      <button onClick={playAudio}>Play</button>
      <button onClick={stopAudio}>Stop</button>
      <input
        type='range'
        min='1'
        max='1000'
        value={freq}
        id='myRange'
        onChange={changeFrequency}
      />
      <br />
      <h1>My Beautiful Piano</h1>
      <button id='261.626' onClick={playNote}>
        C
      </button>
      <button id='277.183' onClick={playNote}>
        C#
      </button>
      <button id='293.665' onClick={playNote}>
        D
      </button>
      <button id='311.127' onClick={playNote}>
        D#
      </button>
      <button id='329.628' onClick={playNote}>
        E
      </button>
      <button id='349.228' onClick={playNote}>
        F
      </button>
      <button id='369.994' onClick={playNote}>
        F#
      </button>
      <button id='391.995' onClick={playNote}>
        G
      </button>
      <button id='415.305' onClick={playNote}>
        G#
      </button>
      <button id='440.000' onClick={playNote}>
        A
      </button>
      <button id='466.164' onClick={playNote}>
        A#
      </button>
      <button id='493.883' onClick={playNote}>
        B
      </button>
    </div>
  )
}
