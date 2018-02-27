const express = require('express'),
  path = require('path');

new class extends express {
  constructor() {
    super();

    this.use(express.static(path.join(__dirname, "/pages")));
    this.listen(80);
  }
};