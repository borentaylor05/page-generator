#! /usr/bin/env node
var fs = require('fs');
var Mustache = require('mustache');

String.prototype.toDash = function(){
	var string = this.replace(/([A-Z])/g, function($1){return "-"+$1.toLowerCase();});
  if (string.charAt(0) === '-') {
    string = string.replace(/^\-/, "");
  }

  return string;
};

String.prototype.lowerFirst = function() {
  return this.charAt(0).toLowerCase() + this.slice(1);
}
var name = process.argv[2];
var args = {
  name: name,
  fileName: process.argv[2].toDash(),
  varName: process.argv[2].lowerFirst()
};

if (!fs.existsSync('pages/' + name)){
    fs.mkdirSync('pages/' + name);
} else {
  throw new Error('Directory with name ' + name + ' already exists.');
}

fs.readFile(__dirname + '/templates/model.mustache.js', 'utf8', function (err, template) {
  var html = Mustache.to_html(template, args);
  fs.writeFile('./pages/' + name + '/' + process.argv[2].toDash() + '.model.js', html);
});

fs.readFile(__dirname + '/templates/view.mustache.js', 'utf8', function (err, template) {
  var html = Mustache.to_html(template, args);
  fs.writeFile('./pages/' + name + '/' + process.argv[2].toDash() + '.view.js', html);
});

fs.readFile(__dirname + '/templates/jsx.mustache.js', 'utf8', function (err, template) {
  var html = Mustache.to_html(template, args);
  fs.writeFile('./pages/' + name + '/' + process.argv[2].toDash() + '.jsx', html);
});

fs.readFile(__dirname + '/templates/controller.mustache.js', 'utf8', function (err, template) {
  var html = Mustache.to_html(template, args);
  fs.writeFile('./pages/' + name + '/' + process.argv[2].toDash() + '.controller.js', html);
});
