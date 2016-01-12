# forEachInet
Invokes a callback for each network interface socket address object, since the
return value of `require('os').networkInterfaces()` is weird to iterate
through.

## Installation
`npm i foreachinet`

## Example
```js
var forEachInet = require('foreachinet');

forEachInet(function (inet) {
  console.log(inet);
});
```

prints:
```
{ address: '::1',
  netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
  family: 'IPv6',
  mac: '00:00:00:00:00:00',
  scopeid: 0,
  internal: true }
{ address: '127.0.0.1',
  netmask: '255.0.0.0',
  family: 'IPv4',
  mac: '00:00:00:00:00:00',
  internal: true }
{ address: 'fe80::1',
  netmask: 'ffff:ffff:ffff:ffff::',
  family: 'IPv6',
  mac: '00:00:00:00:00:00',
  scopeid: 1,
  internal: true }
{ address: 'fe80::2acf:e9ff:fe1f:3939',
  netmask: 'ffff:ffff:ffff:ffff::',
  family: 'IPv6',
  mac: '28:cf:e9:1f:39:39',
  scopeid: 4,
  internal: false }
{ address: '2620:101:80fc:232:2acf:e9ff:fe1f:3939',
  netmask: 'ffff:ffff:ffff:ffff::',
  family: 'IPv6',
  mac: '28:cf:e9:1f:39:39',
  scopeid: 0,
  internal: false }
{ address: '2620:101:80fc:232:b836:db97:3c4c:fa16',
  netmask: 'ffff:ffff:ffff:ffff::',
  family: 'IPv6',
  mac: '28:cf:e9:1f:39:39',
  scopeid: 0,
  internal: false }
{ address: '10.252.35.64',
  netmask: '255.255.248.0',
  family: 'IPv4',
  mac: '28:cf:e9:1f:39:39',
  internal: false }
{ addres 'fe80::e46a:6cff:fe68:a76a',
  netmask: 'ffff:ffff:ffff:ffff::',
  family: 'IPv6',
  mac: 'e6:6a:6c:68:a7:6a',
  scopeid: 8,
  internal: false }
```

as opposed to:
```js
console.log(require('os').networkInterfaces())
```

which prints:
```
{ lo0:
   [ { address: '::1',
       netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
       family: 'IPv6',
       mac: '00:00:00:00:00:00',
       scopeid: 0,
       internal: true },
     { address: '127.0.0.1',
       netmask: '255.0.0.0',
       family: 'IPv4',
       mac: '00:00:00:00:00:00',
       internal: true },
     { address: 'fe80::1',
       netmask: 'ffff:ffff:ffff:ffff::',
       family: 'IPv6',
       mac: '00:00:00:00:00:00',
       scopeid: 1,
       internal: true } ],
  en0:
   [ { address: 'fe80::2acf:e9ff:fe1f:3939',
       netmask: 'ffff:ffff:ffff:ffff::',
       family: 'IPv6',
       mac: '28:cf:e9:1f:39:39',
       scopeid: 4,
       internal: false },
     { address: '2620:101:80fc:232:2acf:e9ff:fe1f:3939',
       netmask: 'ffff:ffff:ffff:ffff::',
       family: 'IPv6',
       mac: '28:cf:e9:1f:39:39',
       scopeid: 0,
       internal: false },
     { address: '2620:101:80fc:232:b836:db97:3c4c:fa16',
       netmask: 'ffff:ffff:ffff:ffff::',
       family: 'IPv6',
       mac'28:cf:e9:1f:39:39',
       scopeid: 0,
       internal: false },
     { address: '10.252.35.64',
       netmask: '255.255.248.0',
       family: 'IPv4',
       mac: '28:cf:e9:1f:39:39',
       internal: false } ],
  awdl0:
   [ { address: 'fe80::e46a:6cff:fe68:a76a',
       netmask: 'ffff:ffff:ffff:ffff::',
       family: 'IPv6',
       mac: 'e6:6a:6c:68:a7:6a',
       scopeid: 8,
       internal: false } ] }
```
