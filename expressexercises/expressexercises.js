let express = require('express')
let app = express()
let port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')

})


app.get('/cats', (req, res) => {
  res.send('Meow')
})


app.get('/dogs', (req, res) => {
  res.send('Woof')
})


app.get('/dogs_and_cats', (req, res) => {
  res.send('Living together')
})

app.get('/greet/:name', (req, res) => {
  res.send(`Hello ${req.params.name}!`)
})

app.get('/year', (req, res) => {
  let age = req.query.age
  let yearBorn = 2019 - parseInt(age)
  res.send(`You were born in ${yearBorn}`)
})

app.listen(port, () => {
  console.log('listening on port', port)
})

