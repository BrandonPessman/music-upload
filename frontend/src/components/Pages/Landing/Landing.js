import React from 'react'
import Background from '../../../images/background23.jpg'
export default class Landing extends React.Component {
  render () {
    return (
      <div
        style={{
          backgroundImage: `url(${Background})`,
          height: '100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      ></div>
    )
  }
}
