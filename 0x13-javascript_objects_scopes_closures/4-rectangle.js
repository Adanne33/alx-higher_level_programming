#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if (w > 0 && h >= 1) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    const len = this.height;
    let i = 0;
    while (i < len) {
      console.log('X'.repeat(this.width));
      i++;
    }
  }

  rotate () {
    [this.width, this.height] = [this.height, this.width];
  }

  double () {
    this.width *= 2;
    this.height *= 2;
  }
}

module.exports = Rectangle;
