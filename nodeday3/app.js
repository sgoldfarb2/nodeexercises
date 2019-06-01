//today we are going to start modularizing our code
//without middleware, we have a new request made, and then we run our route handler
//with middleware, we have a new request made, something happens inbetween before the route get executed and the route handler is run
//you can run this middleware on all of the routes, so say someone needs to be logged in to see your pages, you can check to see if they are logged in or not and if they aren't you can stop them from getting to your pages



let express = require('express')
let app = express()

//this intercepts you before you get to the homepage, and stops the route from running
//this middleware function runs after we get a new request, but before we run our route, so people aren't going to be able to get to our page!
// app.use((req, res, next) => {
//   console.log('im inside of my middleware');
//   // res.status(503).send('this site is currently down :(, come back soon ya hear!')
//   //next is going to run the route that is associated with that url, but you can't use next after a res.send
//   //if you have a CORS issue, you can use middleware to apply a CORS header so people never have that issue when they load your website
//   next()
// })

//here we are making ourselves able to use our public folder
app.use(express.static('public'))

//we need to tell express what we are using now (ejs) and then we have to tell them where our ejs files are going to be kept
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use((req, res, next) => {
  //example for our CORS issue
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Header', "Origin, X-Requested-With, Content-Type, Accept")
  next()
});


//we have to require our index.js page module because we need to use it here!
// let index = require('./routes/index')
// app.use(index)
//AKA and more commonly written as:
app.use(require('./routes/index'))
app.use(require('./routes/aboutus'))








app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
