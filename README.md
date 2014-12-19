servo-car
=========

Basic control API for a two-servo car-like robot.

This library is an abstraction for driving a car which has two servos as its controls (e.g. a Sumobot).

Be sure to calibrate your servos according to the [calibration instructions](https://github.com/tessel/servo-pca9685/blob/master/examples/calibrate.js).

## Install

```sh
npm install servo-car
```

## Example

Plug in the servo module to port B and servos to positions 1 and 2.
Power the servo module.

Save and run this file:

```js
var tessel = require('tessel');
var car = require('servo-car').use(tessel.port['B'], function () {
  car.forward();
  setTimeout(function () {
    car.left();
    setTimeout(function () {
      car.stop();
    }, 3000);
  }, 3000);
});
```

## API

Specify hardware the way you usually do for Tessel: `var car = require('../').use(tessel.port['B'])`.

Note that the library assumes you have your servos plugged in to positions 1 and 2 on the servo module.

API calls are:

* `car.forward()`
* `car.back()`
* `car.left()`
* `car.right()`
* `car.stop()`

## Contributing

This library is extremely basic, and could very easily be improved to include servo position specification, speed controls, timing, and any number of other goodies.

I didn't write all of that simply because I didn't need it for the project I was working on. But if you'd like to contribute and help build it out, your PRs are absolutely welcome.
