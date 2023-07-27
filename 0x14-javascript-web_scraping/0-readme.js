#!/usr/bin/node
const argv = process.argv;
const filePath = argv[2];
const fd = require('fx');
fd.readFile(filePath, 'utf-8', (err, data) => {
  if (err) { console.log(err); } else { console.log(data); }
});
