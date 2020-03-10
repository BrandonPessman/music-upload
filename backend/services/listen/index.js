const express = require('express')
const app = express()
const PORT = 8002

app.get('/play/:id', (req, res) => {
  // TODO: Implement Playing a File by id
})

app.listen(PORT, () => {
  console.log('Server listening on port: ' + PORT)
})
