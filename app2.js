// var greet = require('./app')
// console.log(greet)

// var obj = require('./app')
// console.log(obj.fname)

// var area = require('./app')
// console.log(area(2))

// let person = require('./app')

// let sabrina = new person('sabrina', 'goldfarb')
// sabrina.printName()


//let's require something from the node library!
//first import core module
// let http = require('http')

// let dt = new Date()

// //then create server
// let server = http.createServer(function (request, response) {
//   //create server takes a callback function that takes in two parameters, a request, and a response
//   //handle incoming requests here...
//   response.writeHead(200, { 'Content-Type': 'text/html' })
//   response.write('hello there! you did it!!!!! ' + dt.toDateString())
//   response.end()
// })

// //listen for incoming requests
// server.listen(5000)
// //we listen on a port - usually VSCode listens on 3000
// console.log('web server is now running on port 5000')

let fs = require('fs')
let filename = 'MyFile.txt'
// fs.writeFile(filename, 'im having a great day', function (error) {
//   if (error) {
//     console.log(error.message)
//     return
//   }
//   console.log('File save: ', filename)
// })

fs.readFile(filename, (error, buffer) => {
  if (error) {
    console.log(error.message)
    return
  }
  console.log('file data: ', buffer.toString())
})
