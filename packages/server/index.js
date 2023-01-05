const express = require('express')
const app = express()

const port = process.env.port || 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, (err) => {
  if (err) {
    console.log(`Error: ${err.message}`)
  } else {
    console.log(`App running on http://localhost:${port}`)
  }
})
