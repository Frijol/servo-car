var servoLib = require('servo-pca9685');

function car (hardware, callback) {
  this.hardware = hardware;
  this.servo = servoLib.use(hardware, function () {
    if (callback) {
      callback();
    }
  });
}

// Motion functions
car.prototype.forward = function () {
  console.log('Moving: forward');
  this.servo.move(1, 1);
  this.servo.move(2, 0);
};

car.prototype.back = function () {
  console.log('Moving: back');
  this.servo.move(1, 0);
  this.servo.move(2, 1);
};

car.prototype.right = function () {
  console.log('Moving: right');
  this.servo.move(1, 0);
  this.servo.move(2, 0);
};

car.prototype.left = function () {
  console.log('Moving: left');
  this.servo.move(1, 1);
  this.servo.move(2, 1);
};

car.prototype.stop = function () {
  console.log('Stopping.');
  this.servo.move(1, 0.5);
  this.servo.move(2, 0.5);
};

function use (hardware, callback) {
  return new car(hardware, callback);
}

exports.car = car;
exports.use = use;
