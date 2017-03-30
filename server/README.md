# README
- These are the libraries are installed:
```sh
npm i --save express mongoose morgan body-parser
```

- After Lecture 63, this is what we have:
```js
// index.js
// Main starting point of our application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();


// App Setup


// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
```
  - **NOTE:** I have also created my package.json file and .gitignore
- I don't understand everything really but here are the highlights:
  - We don't have access to ES6 syntax here, hence the 'require' statements (not 'import')
  - The first 4 const's (express, http, bodyParser and morgan) are from the libraries we've installed
  - `app` is just an instance of express
  - For our server, we established our port as 3090 and then created our server using the http library
  and passing in our instance of express, `app`
  - Now, when we run this file in our terminal `node index.js`, it says 'Server listening on: 3090'

## Lecture 64: Express Middleware
- both morgan and bodyParser are middleware
- morgan logs our requests
- bodyParser

```sh
npm install --save nodemon
```
- We also added a script in our package.json file so that we can just do `npm run dev` to start up our server.
Any subsequent changes made to our server file will automatically reset the server.
- To get started:
```sh
npm run dev
```
  - check out `localhost:3090` to see it

## Lecture 66: Mongoose Models
- We are going to be working on a library that sits on top of MongoDB called Mongoose, an ORM
- we already have Mongoose installed
- We are going to create a user model
- This is what we have thus far:
  - everything is in the `server` directory right now
  - we created our router and passed in some dummy output to check that it works and it does
  - after creating our router, we added `router(app)` to our `index.js` page to handle the request
  - we also created a `models` directory and `models/user.js` file for our User model.  I have some good
  notes in there about what each part is doing

## Lecture 67: MongoDB Setup
- install MongoDB: [https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
- to run mongodb
```sh
mongod
```
- We add the DB part to our index.js file to make our connection to mongodb
- We downloaded and installed [Robomongo](https://robomongo.org/download)
- We made the connection to the MongoDB local instance after installing Robomongo

- finish L68
- to get up and running:
```sh
npm run dev 
mongod 				# separate tab
```
  - launch Robomongo

## Lecture 69: Authentication Controller









