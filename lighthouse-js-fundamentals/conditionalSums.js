const conditionalSum = function (values, condition) {
  // Your code here
  let answer = 0;
  if (condition === "even") {
    for (const value of values) {
      if (value % 2 === 0) {
        answer += value;
      }
    }
  } else if (condition === "odd") {
    for (const value of values) {
      if (value % 2 !== 0) {
        answer += value;
      }
    }
  } else {
    console.log("invalid option");
  }
  return answer;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
