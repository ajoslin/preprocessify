'use strict';

var transformTools = require('browserify-transform-tools');
var path = require('path')
var pp = require('preprocess');

module.exports = function(file, options) {
    options = options || {includeExtensions: [".js"]};
    var ppContext = require(path.resolve(options.context || 'config.js'))
    return transformTools.makeStringTransform("preprocessify", options,
            function (src, transformOptions, done) {
                done(null, pp.preprocess(src, ppContext, 'js'));
            });
};
