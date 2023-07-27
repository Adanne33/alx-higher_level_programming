#!/usr/bin/node
const argv = process.argv;
const pathFile = argv[2];
const string = argv[3];
const fd = require('fs');
fd.writeFile(pathFile, string, 'utf-8', err => {
  if (err) {
    console.log(err);
  }
});
