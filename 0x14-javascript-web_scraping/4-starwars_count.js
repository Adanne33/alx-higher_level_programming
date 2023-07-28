#!/usr/bin/node
const argv = process.argv;
const url = argv[2];
const charId = 18;
const request = require('request');
request(url, function (err, res, body) {
  if (err === null) {
    const resBody = JSON.parse(body);
    let count = 0;
    for (const i of resBody.results) {
      for (const j of i.characters) {
        if (j.search(charId) > 0) {
          count += 1;
        }
      }
    }
    console.log(count);
  } else {
    console.log(err);
  }
});
