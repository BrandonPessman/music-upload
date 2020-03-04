import React from 'react'
import Background from '../../../images/background23.jpg'
import Background1 from '../../../images/background6.jpg'
import Background2 from '../../../images/background16.jpg'
import Background3 from '../../../images/background5.jpg'
import Background4 from '../../../images/background20.jpg'
import Background5 from '../../../images/background21.jpg'
export default class Landing extends React.Component {
  render () {
    return (
      <div>
        <div
          className='flex-container'
          style={{ marginTop: '100px', position: 'fixed' }}
        >
          <div
            style={{
              backgroundImage: `url(${Background})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
          >
            <h4
              style={{
                backgroundColor: 'rgba(0,0,0,.3)',
                top: '0',
                margin: 0,
                borderRadius: '50px 50px 0 0',
                fontSize: '18px'
              }}
            >
              Electronic
            </h4>
          </div>
          <div
            style={{
              backgroundImage: `url(${Background1})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
          >
            <h4
              style={{
                backgroundColor: 'rgba(0,0,0,.3)',
                top: '0',
                margin: 0,
                borderRadius: '50px 50px 0 0',
                fontSize: '18px'
              }}
            >
              Rock
            </h4>
          </div>
          <div
            style={{
              backgroundImage: `url(${Background2})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
          >
            <h4
              style={{
                backgroundColor: 'rgba(0,0,0,.3)',
                top: '0',
                margin: 0,
                borderRadius: '50px 50px 0 0',
                fontSize: '18px'
              }}
            >
              Pop
            </h4>
          </div>
          <div
            style={{
              backgroundImage: `url(${Background3})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
          >
            <h4
              style={{
                backgroundColor: 'rgba(0,0,0,.3)',
                top: '0',
                margin: 0,
                borderRadius: '50px 50px 0 0',
                fontSize: '18px'
              }}
            >
              Beats
            </h4>
          </div>
          <div
            style={{
              backgroundImage: `url(${Background4})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
          >
            <h4
              style={{
                backgroundColor: 'rgba(0,0,0,.3)',
                top: '0',
                margin: 0,
                borderRadius: '50px 50px 0 0',
                fontSize: '18px'
              }}
            >
              Top 100 Hits
            </h4>
          </div>
          <div
            style={{
              backgroundImage: `url(${Background5})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
          >
            <h4
              style={{
                backgroundColor: 'rgba(0,0,0,.3)',
                top: '0',
                margin: 0,
                borderRadius: '50px 50px 0 0',
                fontSize: '18px'
              }}
            >
              Fergie
            </h4>
          </div>
        </div>
      </div>
    )
  }
}
