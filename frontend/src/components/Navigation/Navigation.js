import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation () {
  return (
    <div className='Navigation'>
      <li className='logo'>
        <Link className='logo-text' to='/'>
          Wavely
        </Link>
      </li>
      <ul>
        <li className='navigation-button active'>
          <Link to=''>Home</Link>
        </li>
        <li className='navigation-button'>
          <Link to='/playlists'>Playlists</Link>
        </li>
        <li className='navigation-button'>
          <Link to=''>Radio</Link>
        </li>
        <li className='navigation-button'>
          <Link to='/upload'>Workshop</Link>
        </li>
      </ul>
      <input className='searchBar' type='text' placeholder='Search..' />
    </div>
  )
}

export default Navigation
