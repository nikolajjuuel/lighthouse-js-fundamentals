let data = [10, 4, 34, 6, 92, 2];

const sort = data.sort(function (a, b) {
  return a - b;
});

const largestLocation = sort.length;
const sum1 = sort[largestLocation - 1];
const sum2 = sort[largestLocation - 2];

console.log(sum1);
console.log(sum2);
console.log(sum1 + sum2);
const answer = sum1 + sum2;

const sumLargestNumbers = function (data) {
  // Put your solution here
  const sort = data.sort(function (a, b) {
    return a - b;
  });

  const largestLocation = sort.length;
  const sum1 = sort[largestLocation - 1];
  const sum2 = sort[largestLocation - 2];

  console.log(sum1);
  console.log(sum2);
  console.log(sum1 + sum2);
  const answer = sum1 + sum2;
};

let data = [10, 4, 34, 6, 92, 2];

const sumLargestNumbers = function (data) {
  // Put your solution here
  const sort = data.sort(function (a, b) {
    return a - b;
  });
  const largestLocation = sort.length;
  const sum1 = sort[largestLocation - 1];
  const sum2 = sort[largestLocation - 2];
  return sum1 + sum2;
};

console.log(sumLargestNumbers(data));
