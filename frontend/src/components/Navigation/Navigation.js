import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation () {
  return (
    <div className='Navigation'>
      <li className='logo'>
        <Link to=''>Wavely</Link>
      </li>
      <ul>
        <li className='navigation-button active'>
          <Link to=''>Home</Link>
        </li>
        <li className='navigation-button'>
          <Link to='/playlists'>Playlists</Link>
        </li>
        <li className='navigation-button'>
          <Link to=''>Discover</Link>
        </li>
        <li className='navigation-button'>
          <Link to=''>Workshop</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
