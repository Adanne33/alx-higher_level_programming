#!/usr/bin/node
const argv = process.argv;
const movieId = argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/'.concat(movieId);
const request = require('request');
request(url, (err, res, body) => {
  if (err) {
    console.log(err);
  } else {
    const resBody = JSON.parse(body);
    console.log(resBody.title);
  }
});
