const ffi = require('ffi-napi');
const addon = require('bindings')('hello');
var libfactorial = ffi.Library(`${__dirname}/libfactorial`, {
  'factorial': [ 'uint64', [ 'int' ] ]
})
console.log(libfactorial.factorial(10))
console.log(addon.hello()); // 'world'