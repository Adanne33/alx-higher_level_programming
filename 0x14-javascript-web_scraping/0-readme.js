#!/usr/bin/node
const argv = process.argv;
const filePath = argv[2];
const fd = require('fs');
fd.readFile(filePath, 'utf-8', (err, data) => {
  if (err) { console.log(err); } else { process.stdout.write(data); }
});
