import React from 'react'
import logo from './logo.svg'
import './App.css'
import ADSR from './components/audio/ADSR'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <ul>
          <li>
            <a class='active' href='#home'>
              SoundGen
            </a>
          </li>
          <li>
            <a href='/'>ADSR</a>
          </li>
          <li>
            <a href='/'>Player</a>
          </li>
          <li>
            <a href='/'>Visualizer</a>
          </li>
          <li>
            <a href='/'>Random Generator</a>
          </li>
          <li>
            <a href='/'>Sequencer</a>
          </li>
          <li>
            <a href='/'>Piano</a>
          </li>
        </ul>
        <ADSR />
      </header>
    </div>
  )
}

export default App
