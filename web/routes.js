var express = require('express');

function getHome(req, res){
  res.render('./web/index');
};

function setup(app) {
  app.get('/', getHome);
};

module.exports = setup;