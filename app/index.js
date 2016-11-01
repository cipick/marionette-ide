require('./index.scss');
require('./vendor/collapsible.js');
require('jquery-easing');

var App = require('./application');
var FilesCollection = require('./collections/files');

$(document).ready(function(){
  var filesCollection = new FilesCollection();
  filesCollection.fetch().done(function(){
  	App.start(filesCollection);
  })
});