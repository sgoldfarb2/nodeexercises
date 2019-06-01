//javascript is single threaded
//for node, there is one copy of one application on one server
//if you have one thing blocking the event loop, it will block everyone using your application!
//the event loop allows you to queue up events, and we do this using callbacks
//anything asynchronous and in a callback will be put on an event loop
//we saw this with API calls and promises
//asynchronous behaviors are API calls or set time outs, things that you know aren't going to happen right away, where things don't necessarily run in order
//promises are things that we saw with API calls, like $.fetch, and .then

//let's make some synchronous and asynchronous stuff so we can see the difference:
//synchronous code
// const greeting = (fname, lname) => {
//   console.log(`${fname} ${lname}`);
// }

// console.log('before the function call')
// greeting('sabrina', 'goldfarb')
// console.log('after the function call')
//this is synchronous code because each line runs one after another as we would expect it to

//asynchronous
// setTimeout(() => {
//   console.log('inside the set timeout')
// }, 2000)

// const greeting = (fname, lname) => {
//   console.log(`${fname} ${lname}`);
// }

// console.log('before the function call')
// greeting('sabrina', 'goldfarb')
// console.log('after the function call')
//these are asynchronous, the setTimeout is the first thing that we ran, but the other lines are going to run first and then the setTimeout will run after the timer runs out (so in this case it'll run last)


//callback review
// const add = (a, b, callback) => {
//   let result = a + b
//   callback(result)
// }
// add(4, 5, function (r) {
//   console.log(r)
// })

//let's get back to node...
// const add = (pathURL, callback) => {
//   let request = {
//     url: pathURL,
//     objType: "request"
//   }
//   let response = {
//     objType: "response"
//   }
//   callback(request, response)
// }

// add('/something', (req, res) => {
//   console.log(req.url)
//   console.log(req.objType)
//   console.log(res.objType)
// })

