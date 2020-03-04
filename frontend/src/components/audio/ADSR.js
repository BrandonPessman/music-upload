import React, { useState, useEffect } from 'react'
import './ADSR.css'

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
    adsr.gain.linearRampToValueAtTime(0, time + release)

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
    ctx.imageSmoothingEnabled = false

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
    ctx.fillStyle = '#1a52a5'
    ctx.fill()
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(attack * 100, 0, 5, 0, 2 * Math.PI)
    ctx.fillStyle = '#1a52a5'
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
    ctx.fillStyle = '#1a52a5'
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
    ctx.fillStyle = '#1a52a5'
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
    ctx.fillStyle = '#1a52a5'
    ctx.fill()
    ctx.stroke()

    canvas.onmousemove = function (e) {
      console.log(e)
    }
  }

  function changeFrequency (event) {
    if (osc != null) {
      osc.frequency.setValueAtTime(event.target.value, audioContext.currentTime)
    }
    setFreq(event.target.value)
  }

  function changeAttack (event) {
    setAttack(event.target.value / 10)
  }

  function changeDecay (event) {
    setDecay(event.target.value / 10)
  }

  function changeSustain (event) {
    setSustain(event.target.value / 10)
  }

  function changeRelease (event) {
    setRelease(event.target.value / 10)
  }

  return (
    <div style={{ paddingTop: '10px' }}>
      <center>
        <h1>ADSR Envelope</h1>
        <canvas
          id='mycanvas'
          height='450'
          width='800'
          style={{
            border: '5px solid #d3d3d3'
          }}
        ></canvas>
        <div style={{ width: '300px' }} className='adsrContainer'>
          <br />
          <div style={{ height: '15px' }}>
            <span style={{ float: 'left' }}>Freq: {freq}Hz</span>
            <input
              style={{ float: 'right' }}
              className='slider'
              type='range'
              min='1'
              max='1000'
              value={freq}
              id='myRange'
              onChange={changeFrequency}
            />
          </div>
          <br />
          <div style={{ height: '15px' }}>
            <span style={{ float: 'left' }}>Attack: {attack.toFixed(2)}</span>
            <input
              style={{ float: 'right' }}
              className='slider'
              type='range'
              min='0'
              max='50'
              value={attack * 10}
              id='myRange'
              onChange={changeAttack}
            />
          </div>
          <br />
          <div style={{ height: '15px' }}>
            <span style={{ float: 'left' }}>Decay: {decay.toFixed(2)}</span>
            <input
              style={{ float: 'right' }}
              className='slider'
              type='range'
              min='0'
              max='50'
              value={decay * 10}
              id='myRange'
              onChange={changeDecay}
            />
          </div>
          <br />
          <div style={{ height: '15px' }}>
            <span style={{ float: 'left' }}>Sustain: {sustain.toFixed(2)}</span>
            <input
              style={{ float: 'right' }}
              className='slider'
              type='range'
              min='0'
              max='10'
              value={sustain * 10}
              id='myRange'
              onChange={changeSustain}
            />
          </div>
          <br />
          <div style={{ height: '15px' }}>
            <span style={{ float: 'left' }}>Release: {release.toFixed(2)}</span>
            <input
              style={{ float: 'right' }}
              className='slider'
              type='range'
              min='0'
              max='50'
              value={release * 10}
              id='myRange'
              onChange={changeRelease}
            />
          </div>
          <br />
          <div>
            <button onClick={playAudio}>Play</button>
            <button onClick={stopAudio}>Stop</button>
          </div>
        </div>
      </center>
    </div>
  )
}
