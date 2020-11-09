var mainConfile = require('../../karma.conf')

module.exports = function(config) {
  mainConfile(config);
  config.set( {
   files: [
    'https://unpkg.com/react@17/umd/react.production.min.js',
    'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js',
    './external-component.js',
    './*.karma.js'
  ]});
}