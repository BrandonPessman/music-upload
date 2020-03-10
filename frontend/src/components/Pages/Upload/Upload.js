import React from 'react'
import axios from 'axios'
import './Upload.css'

export default class Upload extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      file: null
    }

    this.upload = this.upload.bind(this)
  }

  upload (event) {
    var formData = new FormData()
    formData.append('audiofile', event.target.files[0])

    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }

    axios
      .post('http://localhost:8001/upload', formData, config)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    return (
      <div>
        <h1>Upload a .mp3 File</h1>
        <center>
          <form action='/profile' method='post' encType='multipart/form-data'>
            <label className='fileupload'>
              <input
                for='audiofile'
                className='inputfile'
                type='file'
                name='audiofile'
                onChange={this.upload}
              />
              Choose a file
            </label>
          </form>
        </center>
      </div>
    )
  }
}
