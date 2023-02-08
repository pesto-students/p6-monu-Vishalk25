const http = require('http');
const express = require("express");
const app = express();
const axios = require('axios')

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  
    // Make request
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      
      // Show response data
      .then(res1 =>     res.send(res1.data)
      )
      .catch(err => console.log(err))
    // res.send("hello world");

})

app.listen(3200, function(){ console.log("server started")});
