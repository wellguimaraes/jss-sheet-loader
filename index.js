var babelCore   = require('babel-core');
var loaderUtils = require('loader-utils');
var camelCase   = require('lodash/camelCase');

module.exports = function(source) {
  var transformedCode = babelCore.transform(source, {
    plugins: [ "transform-es2015-modules-commonjs" ]
  });

  var options   = loaderUtils.getOptions(this);
  var plugins   = options.plugins || [];
  var finalCode = 'var jss = require("jss").default;\n';

  plugins.forEach(function(it) {
    finalCode += 'var ' + camelCase('jss_plugin_' + it) + ' = require("' + it + '").default;\n';
  });

  plugins.forEach(function(it) {
    finalCode += 'jss.use(' + camelCase('jss_plugin_' + it) + '());\n';
  });

  finalCode += transformedCode.code.replace(/(^|\n)exports\.default/, '\nvar __exportedObject__ ');
  finalCode += '\n\nexports.default = jss.createStyleSheet(__exportedObject__).attach().classes;';

  return finalCode;
};