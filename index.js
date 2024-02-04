require('dotenv').config()          /* if using ES6  **** import 'dotenv/config' ******/
const express = require('express')  /* production grade application */

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("csasagardotcom")
})
app.get("/login", (req, res) => {
    res.send('<h1>Please login at chai aur code</h1>')
})
app.get("/youtube", (req, res) => {
    res.send('<h2>Giggle Galaxy</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${port}`)
})