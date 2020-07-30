const request = require('request');
const fs = require('fs');
const readline = require('readline');

const url = process.argv[2];
const path = process.argv[3];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log(url);

request(url, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body);
  fs.writeFile(path, body, (err) => {
    if (err) {
      console.log('Failed to write to localPath:', path);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
    }
  });
});