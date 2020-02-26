import React from 'react'
import './Playback.css'

function Sequencer () {
  function highlight (event) {
    if (
      document.getElementById(event.target.id).classList.contains('highlight')
    ) {
      if (document.getElementById(event.target.id).classList.contains('bass')) {
        document
          .getElementById(event.target.id)
          .classList.remove('highlight-bass')
      } else {
        document.getElementById(event.target.id).classList.remove('highlight')
      }
    } else {
      if (document.getElementById(event.target.id).classList.contains('bass')) {
        document.getElementById(event.target.id).classList.add('highlight-bass')
      } else {
        document.getElementById(event.target.id).classList.add('highlight')
      }
    }
  }

  return (
    <div className='App'>
      <center style={{ marginTop: '30px' }}>
        <div className='step' id='Synth 1A' onClick={highlight} />
        <div className='step' id='Synth 2A' onClick={highlight} />
        <div className='step' id='Synth 3A' onClick={highlight} />
        <div className='step' id='Synth 4A' onClick={highlight} />
        <div className='step' id='Synth 5A' onClick={highlight} />
        <div className='step' id='Synth 6A' onClick={highlight} />
        <div className='step' id='Synth 7A' onClick={highlight} />
        <div className='step' id='Synth 8A' onClick={highlight} />
      </center>
      <center>
        <div className='step' id='Synth 1B' onClick={highlight} />
        <div className='step' id='Synth 2B' onClick={highlight} />
        <div className='step' id='Synth 3B' onClick={highlight} />
        <div className='step' id='Synth 4B' onClick={highlight} />
        <div className='step' id='Synth 5B' onClick={highlight} />
        <div className='step' id='Synth 6B' onClick={highlight} />
        <div className='step' id='Synth 7B' onClick={highlight} />
        <div className='step' id='Synth 8B' onClick={highlight} />
      </center>
      <center>
        <div className='step' id='Synth 1C' onClick={highlight} />
        <div className='step' id='Synth 2C' onClick={highlight} />
        <div className='step' id='Synth 3C' onClick={highlight} />
        <div className='step' id='Synth 4C' onClick={highlight} />
        <div className='step' id='Synth 5C' onClick={highlight} />
        <div className='step' id='Synth 6C' onClick={highlight} />
        <div className='step' id='Synth 7C' onClick={highlight} />
        <div className='step' id='Synth 8C' onClick={highlight} />
      </center>
      <center>
        <div className='step' id='Synth 1D' onClick={highlight} />
        <div className='step' id='Synth 2D' onClick={highlight} />
        <div className='step' id='Synth 3D' onClick={highlight} />
        <div className='step' id='Synth 4D' onClick={highlight} />
        <div className='step' id='Synth 5D' onClick={highlight} />
        <div className='step' id='Synth 6D' onClick={highlight} />
        <div className='step' id='Synth 7D' onClick={highlight} />
        <div className='step' id='Synth 8D' onClick={highlight} />
      </center>
      <center>
        <div className='step' id='Synth 1E' onClick={highlight} />
        <div className='step' id='Synth 2E' onClick={highlight} />
        <div className='step' id='Synth 3E' onClick={highlight} />
        <div className='step' id='Synth 4E' onClick={highlight} />
        <div className='step' id='Synth 5E' onClick={highlight} />
        <div className='step' id='Synth 6E' onClick={highlight} />
        <div className='step' id='Synth 7E' onClick={highlight} />
        <div className='step' id='Synth 8E' onClick={highlight} />
      </center>
      <center>
        <div className='step' id='Synth 1F' onClick={highlight} />
        <div className='step' id='Synth 2F' onClick={highlight} />
        <div className='step' id='Synth 3F' onClick={highlight} />
        <div className='step' id='Synth 4F' onClick={highlight} />
        <div className='step' id='Synth 5F' onClick={highlight} />
        <div className='step' id='Synth 6F' onClick={highlight} />
        <div className='step' id='Synth 7F' onClick={highlight} />
        <div className='step' id='Synth 8F' onClick={highlight} />
      </center>
      <center>
        <div className='step' id='Synth 1G' onClick={highlight} />
        <div className='step' id='Synth 2G' onClick={highlight} />
        <div className='step' id='Synth 3G' onClick={highlight} />
        <div className='step' id='Synth 4G' onClick={highlight} />
        <div className='step' id='Synth 5G' onClick={highlight} />
        <div className='step' id='Synth 6G' onClick={highlight} />
        <div className='step' id='Synth 7G' onClick={highlight} />
        <div className='step' id='Synth 8G' onClick={highlight} />
      </center>
      <center>
        <div className='step' id='Synth 1H' onClick={highlight} />
        <div className='step' id='Synth 2H' onClick={highlight} />
        <div className='step' id='Synth 3H' onClick={highlight} />
        <div className='step' id='Synth 4H' onClick={highlight} />
        <div className='step' id='Synth 5H' onClick={highlight} />
        <div className='step' id='Synth 6H' onClick={highlight} />
        <div className='step' id='Synth 7H' onClick={highlight} />
        <div className='step' id='Synth 8H' onClick={highlight} />
        <h4>Synth</h4>
      </center>
      <center style={{ marginTop: '30px' }}>
        <div className='step bass' id='Bass 1A' onClick={highlight} />
        <div className='step bass' id='Bass 2A' onClick={highlight} />
        <div className='step bass' id='Bass 3A' onClick={highlight} />
        <div className='step bass' id='Bass 4A' onClick={highlight} />
        <div className='step bass' id='Bass 5A' onClick={highlight} />
        <div className='step bass' id='Bass 6A' onClick={highlight} />
        <div className='step bass' id='Bass 7A' onClick={highlight} />
        <div className='step bass' id='Bass 8A' onClick={highlight} />
      </center>
      <center>
        <div className='step bass' id='Bass 1B' onClick={highlight} />
        <div className='step bass' id='Bass 2B' onClick={highlight} />
        <div className='step bass' id='Bass 3B' onClick={highlight} />
        <div className='step bass' id='Bass 4B' onClick={highlight} />
        <div className='step bass' id='Bass 5B' onClick={highlight} />
        <div className='step bass' id='Bass 6B' onClick={highlight} />
        <div className='step bass' id='Bass 7B' onClick={highlight} />
        <div className='step bass' id='Bass 8B' onClick={highlight} />
      </center>
      <center>
        <div className='step bass' id='Bass 1C' onClick={highlight} />
        <div className='step bass' id='Bass 2C' onClick={highlight} />
        <div className='step bass' id='Bass 3C' onClick={highlight} />
        <div className='step bass' id='Bass 4C' onClick={highlight} />
        <div className='step bass' id='Bass 5C' onClick={highlight} />
        <div className='step bass' id='Bass 6C' onClick={highlight} />
        <div className='step bass' id='Bass 7C' onClick={highlight} />
        <div className='step bass' id='Bass 8C' onClick={highlight} />
      </center>
      <center>
        <div className='step bass' id='Bass 1D' onClick={highlight} />
        <div className='step bass' id='Bass 2D' onClick={highlight} />
        <div className='step bass' id='Bass 3D' onClick={highlight} />
        <div className='step bass' id='Bass 4D' onClick={highlight} />
        <div className='step bass' id='Bass 5D' onClick={highlight} />
        <div className='step bass' id='Bass 6D' onClick={highlight} />
        <div className='step bass' id='Bass 7D' onClick={highlight} />
        <div className='step bass' id='Bass 8D' onClick={highlight} />
      </center>
      <center>
        <div className='step bass' id='Bass 1E' onClick={highlight} />
        <div className='step bass' id='Bass 2E' onClick={highlight} />
        <div className='step bass' id='Bass 3E' onClick={highlight} />
        <div className='step bass' id='Bass 4E' onClick={highlight} />
        <div className='step bass' id='Bass 5E' onClick={highlight} />
        <div className='step bass' id='Bass 6E' onClick={highlight} />
        <div className='step bass' id='Bass 7E' onClick={highlight} />
        <div className='step bass' id='Bass 8E' onClick={highlight} />
      </center>
      <center>
        <div className='step bass' id='Bass 1F' onClick={highlight} />
        <div className='step bass' id='Bass 2F' onClick={highlight} />
        <div className='step bass' id='Bass 3F' onClick={highlight} />
        <div className='step bass' id='Bass 4F' onClick={highlight} />
        <div className='step bass' id='Bass 5F' onClick={highlight} />
        <div className='step bass' id='Bass 6F' onClick={highlight} />
        <div className='step bass' id='Bass 7F' onClick={highlight} />
        <div className='step bass' id='Bass 8F' onClick={highlight} />
      </center>
      <center>
        <div className='step bass' id='Bass 1G' onClick={highlight} />
        <div className='step bass' id='Bass 2G' onClick={highlight} />
        <div className='step bass' id='Bass 3G' onClick={highlight} />
        <div className='step bass' id='Bass 4G' onClick={highlight} />
        <div className='step bass' id='Bass 5G' onClick={highlight} />
        <div className='step bass' id='Bass 6G' onClick={highlight} />
        <div className='step bass' id='Bass 7G' onClick={highlight} />
        <div className='step bass' id='Bass 8G' onClick={highlight} />
      </center>
      <center>
        <div className='step bass' id='Bass 1H' onClick={highlight} />
        <div className='step bass' id='Bass 2H' onClick={highlight} />
        <div className='step bass' id='Bass 3H' onClick={highlight} />
        <div className='step bass' id='Bass 4H' onClick={highlight} />
        <div className='step bass' id='Bass 5H' onClick={highlight} />
        <div className='step bass' id='Bass 6H' onClick={highlight} />
        <div className='step bass' id='Bass 7H' onClick={highlight} />
        <div className='step bass' id='Bass 8H' onClick={highlight} />
        <h4>Bass</h4>
      </center>
      <center>
        <div>
          <button>Play</button>
          <button>Stop</button>
        </div>
      </center>
    </div>
  )
}

export default Sequencer
