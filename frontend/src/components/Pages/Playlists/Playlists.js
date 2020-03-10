import React from 'react'
import Background from '../../../images/background23.jpg'

import './Playlists.css'

const playlists = [
  'Electronic',
  'Pop',
  'Country',
  'Jazz',
  'Rock',
  'Classics',
  'Electronic',
  'Pop',
  'Country',
  'Jazz',
  'Rock',
  'Classics'
]

export default class Landing extends React.Component {
  render () {
    const playTheLists = playlists.map(playlist => (
      <div
        className='playlist-container'
        style={{
          backgroundImage: `url(${Background})`
        }}
      >
        <h4 className='playlist-container-text'>{playlist}</h4>
      </div>
    ))

    return (
      <React.Fragment>
        <h1>Featured Playlists</h1>
        <div className='flex-container'>{playTheLists}</div>
      </React.Fragment>
    )
  }
}
