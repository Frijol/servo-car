var tessel = require('tessel');
var car = require('../').use(tessel.port['B'], function () {
  car.forward();
  setTimeout(function () {
    car.left();
    setTimeout(function () {
      car.stop();
    }, 3000);
  }, 3000);
});
