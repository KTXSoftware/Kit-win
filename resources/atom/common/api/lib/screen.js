// Generated by CoffeeScript 1.7.1
(function() {
  var binding, checkAppIsReady, _ref;

  binding = process.atomBinding('screen');

  checkAppIsReady = function() {
    if (!(process.type === 'renderer' || require('app').isReady())) {
      throw new Error('Can not use screen module before the "ready" event of app module gets emitted');
    }
  };

  module.exports = ((_ref = process.platform) === 'linux' || _ref === 'win32') && process.type === 'renderer' ? require('remote').require('screen') : {
    getCursorScreenPoint: function() {
      checkAppIsReady();
      return binding.getCursorScreenPoint();
    },
    getPrimaryDisplay: function() {
      checkAppIsReady();
      return binding.getPrimaryDisplay();
    }
  };

}).call(this);
