function loopyLighthouse(range, multiples, words) {
  var start = range[0]; // 0 - 5
  var end = range[1]; // 5

  const replaceOne = multiples[0]; // 2
  const replaceTwo = multiples[1]; //5

  const wordOne = words[0]; // Batty
  const wordTwo = words[1]; // Beacon

  for (start; start <= end; start++) {
    if (start % replaceOne === 0 && start % replaceTwo === 0 && start > 0) {
      console.log("BattyBeacon");
    } else if (start % replaceOne === 0) {
      console.log("Batty");
    } else if (start % replaceTwo === 0) {
      console.log("Beacon");
    } else {
      console.log(start);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
