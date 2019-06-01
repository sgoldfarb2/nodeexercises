//there are three types of modules
//local modules
//core modules
//external modules

//what is express?
//express is just a module!!
//import express

//we are importing express and then running express in the next two lines!
let express = require('express')
let app = express()
let port = 3000

//we still need to be able to use our html and css!
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('hello world!')
})

// app.get('/about', (req, res) => {
//   res.send('about us')
// })

// //we can use regular expressions to point people to the right file even if they misspell the word or use different capitalization or something else!
// //ex: match /pictures and /picture
// app.get('/pictures?', (req, res) => {
//   res.send('pictures')
// })

// app.get('/menu', (req, res) => {
//   let bbq = req.param('bbq')
//   res.send(bbq)
// })

// app.get('/calculator/:a/:b', (req, res) => {
//   // let a = req.param('a')
//   // let b = req.param('b')
//   // let c = parseInt(a) + parseInt(b)
//   //or
//   let a = parseInt(req.params.a)
//   let b = parseInt(req.params.b)
//   let c = a + b
//   res.send(`the result of ${a} + ${b} is ${c}`)
// })



// app.get('/name/:fname', (req, res) => {
//   let fn = req.params.fname
//   // let fname = req.param('fname')
//   res.send(fn)
//   // res.send(fname)
// })


// app.get('/flights/:from-:to', (req, res) => {
//   res.send(`Departing: ${req.params.from} Arriving: ${req.params.to}`)
// })


// app.get('/something', (req, res) => {
//   let shoe = req.query.shoe || 'loafers'
//   res.send(`${shoe}`)
// })


//adding in images
app.get('/photos', (req, res) => {
  let images = req.query.images
  res.send(`<img src="${images}" >`)
})

app.listen(port, () => {
  console.log('listening on port: ', port)
})

