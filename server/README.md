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




