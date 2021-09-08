const repeatNumbers = function (data) {
  // Put your solution here
  const arr = [];

  for (let x = 0; x < data.length; x++) {
    const joinedString = [];

    const repeating = data[x][0]; // 10
    const number = data[x][1]; // 4

    for (let y = 0; y < number; y++) {
      joinedString.push(repeating);
    }
    arr.push(parseInt(joinedString.join("")));
  }
  return arr;
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
