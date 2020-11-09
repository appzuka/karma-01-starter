var mainConfile = require('../../karma.conf')

module.exports = function(config) {
  mainConfile(config);
  config.set( {
   files: [
    './*.karma.js'
  ]});
}