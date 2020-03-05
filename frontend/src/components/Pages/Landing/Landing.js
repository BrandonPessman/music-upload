import React from 'react'
import Background from '../../../images/background23.jpg'
import './Landing.css'

export default class Landing extends React.Component {
  render () {
    return (
      <div
        className='landing-picture'
        style={{
          backgroundImage: `url(${Background})`
        }}
      />
    )
  }
}
