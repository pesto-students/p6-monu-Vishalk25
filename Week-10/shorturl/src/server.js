const express = require('express');
const http = require('http');

const app = express();
  
  const getPosts = () => {
    let data = '';
    const options = {
        hostname: 'https://api.shrtco.de',
        path: '/v2', // we changed the path to only grab one post
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
    const request = http.request(options, (response) => {
      // Set the encoding, so we don't get log to the console a bunch of gibberish binary data
      response.setEncoding('utf8');
  
      // As data starts streaming in, add each chunk to "data"
      response.on('data', (chunk) => {
        data += chunk;
      });
      console.log("test--",response);
      // The whole response has been received. Print out the result.
      response.on('end', () => {
        console.log(data);
      });
    });
  
    // Log errors if any occur
    request.on('error', (error) => {
      console.error(error);
    });
  
    // End the request
    request.end();
};
app.get("/", (req, res) => {
//    res.send("https://api.shrtco.de/v2/") 
    getPosts();
})

app.listen(3200,() => console.log('server started'))