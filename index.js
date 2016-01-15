var os = require('os');

function forEachInet (cb) {
  var ifaces = os.networkInterfaces();
  Object.keys(ifaces).reduce(function (temp, key) {
    return temp.concat(ifaces[key]);
  }, []).forEach(cb);
};

module.exports = forEachInet;

