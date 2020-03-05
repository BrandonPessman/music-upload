import React from 'react'
import Background from '../../../images/background23.jpg'
import Background1 from '../../../images/background6.jpg'
import Background2 from '../../../images/background16.jpg'
import Background3 from '../../../images/background5.jpg'
import Background4 from '../../../images/background20.jpg'
import Background5 from '../../../images/background21.jpg'
import './Playlists.css'

export default class Landing extends React.Component {
  render () {
    return (
      <div className='flex-container' style={{ marginTop: '100px' }}>
        <div
          className='playlist-container'
          style={{
            backgroundImage: `url(${Background})`
          }}
        >
          <h4 className='playlist-container-text'>Electronic</h4>
        </div>
        <div
          className='playlist-container'
          style={{
            backgroundImage: `url(${Background1})`
          }}
        >
          <h4 className='playlist-container-text'>Rock</h4>
        </div>
        <div
          className='playlist-container'
          style={{
            backgroundImage: `url(${Background2})`
          }}
        >
          <h4 className='playlist-container-text'>Pop</h4>
        </div>
        <div
          className='playlist-container'
          style={{
            backgroundImage: `url(${Background3})`
          }}
        >
          <h4 className='playlist-container-text'>Beats</h4>
        </div>
        <div
          className='playlist-container'
          style={{
            backgroundImage: `url(${Background4})`
          }}
        >
          <h4 className='playlist-container-text'>Top 100 Hits</h4>
        </div>
        <div
          className='playlist-container'
          style={{
            backgroundImage: `url(${Background5})`
          }}
        >
          <h4 className='playlist-container-text'>Fergie</h4>
        </div>
      </div>
    )
  }
}
