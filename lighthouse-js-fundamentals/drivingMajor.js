const cars = [];
function carPassing(cars, speed) {
  const time = Date.now();
  cars.push({ time: time, speed: speed });
  return cars;
}
