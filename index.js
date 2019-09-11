function createLib (execlib) {
  var lib = execlib.lib;
  return require('allex_arrayoperationslowlevellib')(lib.extend, lib.readPropertyFromDotDelimitedString, lib.isFunction, lib.Map, lib.AllexJSONizingError);
}

module.exports = createLib;
