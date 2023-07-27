#!/usr/bin/node
const argv = process.argv;
const url = argv[2];
const request = require('request');
request(url, (err, res) => {
  if (err === null) {
    console.log(`code: ${res.statusCode}`);
  } else {
    console.log(err);
  }
});
