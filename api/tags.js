var Quote = require('./Quotes')
var express = require('express');

Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {         
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};

function getAllTags(req, res){
  Quote.distinct('tags', function(err, data){
    return res.json(data.clean(''));
  });
};


function setup(app) {
  app.get('/api/tags', getAllTags);
};

module.exports = setup;
