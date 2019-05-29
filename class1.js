//Node is an open-source cross-platform runtime environment
//open source - on github, you can contribute to it
//cross-platform runtime environment -
//event-driven architecture
//non-blocking input/output API

//why use node?
//asynchronous event driven IO
//using multiple APIs, one might come before another, or data might not have arrived yet and you need that data before you can move on and do something with it
//concurrency is a lot of things happening at the same time
//node is javascript! if you want to be able to run things outside of your browser environment, you use node
//we have a node application on our hard drive that runs our javascript for us without a browser!!
//node applications don't know what a window object is
//this means you can't use event listeners on node because it isn't connected to a window
//node uses the V8 engine, used by google chrome

//who uses node?
//paypal
//linkedin
//mozilla

//when to use node
//great when you need high levels of concurrency but don't need a lot of CPU time
//nothing with heavy calculations
//great for:
//chat applications
//game servers
//collaborative environments
//ad servers
//streaming services

//how is node different than front-end javascript?
//js with a server attached
//server waits for a request, has some input/output logic, and then sends a response

//two main pieces inside of node
//modules and callbacks

//modules
//this comes in ES7
//very important in node!
//node ships with almost nothing in it
//the front end is an observer pattern to node which is a module pattern
//2 main pieces to a module pattern
//require() and exports
//in order to use node or NPM modules, you first need to import it using require() function
//

