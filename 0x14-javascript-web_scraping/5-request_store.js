#!/usr/bin/node
const argv = process.argv;
const url = argv[2];
const filePath = argv[3];
const fd = require('fs');
const request = require('request');
request(url, (err, res, body) => {
  if (err === null) {
    fd.writeFile(filePath, body, 'utf-8', err => {
      if (err) {
        console.log(err);
      }
    });
  } else {
    console.log(err);
  }
});
