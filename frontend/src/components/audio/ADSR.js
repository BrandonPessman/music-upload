import React, { useState, useEffect } from 'react'

export default function ADSR () {
  const [audioContext, setAudioContext] = useState(null)
  const [osc, setOsc] = useState(null)
  const [adsr, setAdsr] = useState(null)
  const [freq, setFreq] = useState(440)
  const [attack, setAttack] = useState(0.5)
  const [decay, setDecay] = useState(0.5)
  const [sustain, setSustain] = useState(0.5)
  const [release, setRelease] = useState(0.5)

  useEffect(() => {
    if (audioContext == null) {
      let audioContext

      try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)()
      } catch (error) {
        window.alert(
          `Sorry, but your browser doesn't support the Web Audio API!`
        )
      }

      setAudioContext(audioContext)
    }

    displayLineChart()
  })

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
    const t2 = decay
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
    let canvas = document.getElementById('mycanvas')
    let width = 600
    let height = 300

    canvas.width = width
    canvas.height = height

    var ctx = canvas.getContext('2d')

    ctx.fillStyle = '#FFFFFF'

    ctx.strokeStyle = 'lightgray'
    ctx.fillRect(0, 0, width, height)

    let x = 0
    let t = 0
    while (x < width) {
      ctx.beginPath()

      ctx.strokeStyle = 'lightgray'
      ctx.moveTo(x, height)
      ctx.lineTo(x, 0)
      ctx.stroke()

      ctx.font = '14px Arial'
      ctx.fillStyle = 'lightgray'
      ctx.fillText(t + 's', x + 5, 15)
      ctx.closePath()

      x += 100
      t++
    }

    ctx.strokeStyle = 'black'

    ctx.beginPath()
    // (0,0)
    ctx.moveTo(0, height)

    // Attack
    ctx.lineTo(attack * 100, 0)
    ctx.stroke()

    // Decay (How long it takes to get to decay level)
    ctx.lineTo(attack * 100 + decay * 100, height * Math.abs(sustain - 1))
    ctx.stroke()

    // Sustain
    ctx.lineTo(attack * 100 + decay * 100 + 100, height * Math.abs(sustain - 1))
    ctx.stroke()

    // Release
    ctx.lineTo(attack * 100 + decay * 100 + 100 + release * 100, height)
    ctx.stroke()
    ctx.closePath()
    // CIRCLES
    ctx.beginPath()
    ctx.arc(0, height, 5, 0, 2 * Math.PI)
    ctx.fillStyle = 'red'
    ctx.fill()
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(attack * 100, 0, 5, 0, 2 * Math.PI)
    ctx.fillStyle = 'red'
    ctx.fill()
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(
      attack * 100 + decay * 100,
      height * Math.abs(sustain - 1),
      5,
      0,
      2 * Math.PI
    )
    ctx.fillStyle = 'red'
    ctx.fill()
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(
      attack * 100 + decay * 100 + 100,
      height * Math.abs(sustain - 1),
      5,
      0,
      2 * Math.PI
    )
    ctx.fillStyle = 'red'
    ctx.fill()
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(
      attack * 100 + decay * 100 + 100 + release * 100,
      height,
      5,
      0,
      2 * Math.PI
    )
    ctx.fillStyle = 'red'
    ctx.fill()
    ctx.stroke()

    canvas.onmousemove = function (e) {
      console.log(e)
    }
  }

  function changeFrequency (event) {
    osc.frequency.setValueAtTime(event.target.value, audioContext.currentTime)
    setFreq(event.target.value)
  }

  function addAttack () {
    setAttack(attack + 0.1)
  }

  function subAttack () {
    setAttack(attack - 0.1)
  }

  function addDecay () {
    setDecay(decay + 0.1)
  }

  function subDecay () {
    setDecay(decay - 0.1)
  }

  function addSustain () {
    setSustain(sustain + 0.1)
  }

  function subSustain () {
    setSustain(sustain - 0.1)
  }

  function addRelease () {
    setRelease(release + 0.1)
  }

  function subRelease () {
    setRelease(release - 0.1)
  }

  // function playNote (event) {
  //   // Creating Oscillator and ADSR Envelope
  //   const osc = audioContext.createOscillator()
  //   const adsr = audioContext.createGain()

  //   osc.type = 'sawtooth'

  //   // Connecting Instances
  //   osc.connect(adsr)
  //   adsr.connect(audioContext.destination)

  //   // Setting Frequency
  //   osc.frequency.setValueAtTime(
  //     parseFloat(event.target.id),
  //     audioContext.currentTime
  //   )

  //   // Starting Gain Value
  //   const t0 = audioContext.currentTime
  //   osc.start(t0)

  //   // Volume Zero (Starting Point)
  //   adsr.gain.setValueAtTime(0, t0)

  //   // Attack
  //   const t1 = t0 + attack
  //   adsr.gain.linearRampToValueAtTime(1, t1)

  //   // Decay
  //   const t2 = decay / 100.0
  //   adsr.gain.setTargetAtTime(sustain, t1, t2)

  //   setOsc(osc)
  //   setAdsr(adsr)

  //   const time = audioContext.currentTime
  //   adsr.gain.cancelScheduledValues(time)
  //   adsr.gain.setValueAtTime(adsr.gain.value, time)
  //   adsr.gain.setTargetAtTime(0, time, release)

  //   const stop = setInterval(() => {
  //     if (adsr.gain.value < 0.01) {
  //       osc.stop()
  //       clearInterval(stop)
  //     }
  //   }, 10)
  // }

  return (
    <div style={{ paddingTop: '10px' }}>
      <center>
        <h1>ADSR Envelope</h1>
        <canvas
          id='mycanvas'
          height='450'
          width='800'
          style={{
            border: '1px solid black',
            borderRadius: '10px',
            boxShadow: '3px 3px 8px rgba(0,0,0,.5)'
          }}
        ></canvas>
        <br />
        <button onClick={playAudio}>Play</button>
        <button onClick={stopAudio}>Stop</button>
        <br />
        <h3>Frequency: {freq}Hz</h3>
        <input
          type='range'
          min='1'
          max='1000'
          value={freq}
          id='myRange'
          onChange={changeFrequency}
        />
        <h4>Attack: {attack.toFixed(2)}</h4>
        <button onClick={subAttack}>-</button>
        <button onClick={addAttack}>+</button>
        <h4>Decay: {decay.toFixed(2)}</h4>
        <button onClick={subDecay}>-</button>
        <button onClick={addDecay}>+</button>
        <h4>Sustain: {sustain.toFixed(2)}</h4>
        <button onClick={subSustain}>-</button>
        <button onClick={addSustain}>+</button>
        <h4>Release: {release.toFixed(2)}</h4>
        <button onClick={subRelease}>-</button>
        <button onClick={addRelease}>+</button>
      </center>
    </div>
  )
}
