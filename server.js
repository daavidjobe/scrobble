const express = require('express')
const { resolve } = require('path')

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.static('dist/'))

app.all('*', (req, res) => {
  res.sendFile(resolve(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, err => {
  if (err) {
    console.log('server error')
  } else {
    console.log(`server listening on port: ${PORT}`)
  }
})
