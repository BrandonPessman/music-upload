import React from 'react'

export default class Oscillator extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      audioContext: null,
      oscillator: null,
      freq: 400,
      attack: 0,
      delay: 0,
      sustain: 0,
      release: 0,
      gain: 1
    }

    this.createOscillator = this.createOscillator.bind(this)
    this.removeOscillator = this.removeOscillator.bind(this)
    this.changeFrequency = this.changeFrequency.bind(this)
    this.changeAttack = this.changeAttack.bind(this)
    this.changeDelay = this.changeDelay.bind(this)
    this.changeSustain = this.changeSustain.bind(this)
    this.changeRelease = this.changeRelease.bind(this)
  }

  componentDidMount () {
    let audioContext

    try {
      audioContext = new (window.AudioContext || window.webkitAudioContext)()
    } catch (error) {
      window.alert(`Sorry, but your browser doesn't support the Web Audio API!`)
    }

    this.setState({ audioContext: audioContext })
  }

  createOscillator () {
    if (
      this.state.audioContext !== undefined &&
      this.state.oscillator == null
    ) {
      const oscillator = this.state.audioContext.createOscillator()
      oscillator.frequency.setValueAtTime(
        this.state.freq,
        this.state.audioContext.currentTime
      )
      oscillator.connect(this.state.audioContext.destination)
      oscillator.type = 'sine'

      const adsr = this.state.audioContext.createGain()
      oscillator.connect(adsr)
      gainNode.gain.value = 0.0

      oscillator.start()
      this.setState({ oscillator: oscillator })
    }
  }

  removeOscillator () {
    if (
      this.state.audioContext !== undefined &&
      this.state.oscillator != null
    ) {
      this.state.oscillator.stop()
      this.setState({ oscillator: null })
    }
  }

  changeFrequency (event) {
    if (this.state.oscillator != null) {
      this.state.oscillator.frequency.setValueAtTime(
        event.target.value,
        this.state.audioContext.currentTime
      )
    }

    this.setState({ freq: event.target.value })
  }

  changeAttack (event) {
    if (this.state.oscillator != null) {
      this.state.oscillator.frequency.setValueAtTime(
        event.target.value,
        this.state.audioContext.currentTime
      )
    }

    this.setState({ attack: event.target.value })
  }

  changeDelay (event) {
    if (this.state.oscillator != null) {
      this.state.oscillator.frequency.setValueAtTime(
        event.target.value,
        this.state.audioContext.currentTime
      )
    }

    this.setState({ delay: event.target.value })
  }

  changeSustain (event) {
    if (this.state.oscillator != null) {
      this.state.oscillator.frequency.setValueAtTime(
        event.target.value,
        this.state.audioContext.currentTime
      )
    }

    this.setState({ sustain: event.target.value })
  }

  changeRelease (event) {
    if (this.state.oscillator != null) {
      this.state.oscillator.frequency.setValueAtTime(
        event.target.value,
        this.state.audioContext.currentTime
      )
    }

    this.setState({ release: event.target.value })
  }

  render () {
    return (
      <div>
        <button onClick={this.createOscillator}>Play</button>
        <button onClick={this.removeOscillator}>Stop</button>
        <input
          type='range'
          min='1'
          max='1000'
          value={this.state.freq}
          id='myRange'
          onChange={this.changeFrequency}
        />
        <p>Freq: {this.state.freq}Hz</p>
        <input
          type='range'
          min='1'
          max='1000'
          value={this.state.attack}
          id='myRange'
          onChange={this.changeAttack}
        />
        <p>Attack: {this.state.attack}sec</p>
        <input
          type='range'
          min='1'
          max='1000'
          value={this.state.delay}
          id='myRange'
          onChange={this.changeDelay}
        />
        <p>Delay: {this.state.delay}sec</p>
        <input
          type='range'
          min='1'
          max='1000'
          value={this.state.sustain}
          id='myRange'
          onChange={this.changeSustain}
        />
        <p>Sustain: {this.state.sustain}gain</p>
        <input
          type='range'
          min='1'
          max='1000'
          value={this.state.release}
          id='myRange'
          onChange={this.changeRelease}
        />
        <p>Release: {this.state.release}sec</p>
      </div>
    )
  }
}
