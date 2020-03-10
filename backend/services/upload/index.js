const express = require('express')
var cors = require('cors')
let fs = require('fs')
var bodyParser = require('body-parser')
const app = express()
const encode = require('hashcode').hashCode

var multer = require('multer')
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

const PORT = 8001

app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.post('/upload', upload.single('audiofile'), (req, res) => {
  let buff = req.file.buffer
  let hash = encode().value(buff)
  let path = '../../data/' + hash + '.mp3'
  try {
    if (fs.existsSync(path)) {
      console.log('File already Exists!')
    } else {
      fs.writeFileSync(path, buff)
      console.log('New Audio file uploaded!')
    }
  } catch (err) {
    console.error(err)
  }

  res.send('Success')
})

app.listen(PORT, () => {
  console.log('Server listening on port: ' + PORT)
})
