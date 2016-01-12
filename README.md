# forEachInet
Invokes a callback for each network interface socket address object, since the
return value of `require('os').networkInterfaces()` is weird to iterate
through.

## Installation

## Example
```js
var forEachInet = require('forEachInet');

forEachInet(function (inet) {
  console.log(inet);
});
```


