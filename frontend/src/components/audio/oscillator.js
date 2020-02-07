import React from 'react'

export default class Oscillator extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      audioContext: null,
      oscillator: null,
      freq: 400
    }

    this.createOscillator = this.createOscillator.bind(this)
    this.removeOscillator = this.removeOscillator.bind(this)
    this.changeFrequency = this.changeFrequency.bind(this)
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
      </div>
    )
  }
}
