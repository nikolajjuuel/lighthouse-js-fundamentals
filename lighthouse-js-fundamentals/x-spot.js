const moves = ["north", "north", "north", "north", "west", "east", "west"];

function finalPosition(moves) {
  const coordinates = [];
  const x = [];
  const y = [];
  let sumY = 0;
  let sumX = 0;

  for (const move of moves) {
    if (move === "north") {
      const north = 1;
      sumY += north;
      y.push(sumY);
    } else if (move === "south") {
      const south = -1;
      sumY += south;
      y.push(sumY);
      y.push(south);
    } else if (move === "west") {
      const west = +1;
      sumX += west;
      x.push(sumX);
    } else if (move === "east") {
      const east = -1;
      sumX += east;
      x.push(sumX);
    } else {
      return "invalid moves";
    }
  }
  coordinates.push(sumX);
  coordinates.push(sumY);
  return coordinates;
}

console.log(finalPosition(moves));
;