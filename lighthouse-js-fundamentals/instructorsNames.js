const instructorWithLongestName = function (instructors) {
  // Put your solution here
  let instructor = 0;
  let answer = 0;
  for (const name of instructors) {
    const length = name.name.length;
    //     console.log(length)
    if (length > instructor) {
      instructor = length;
      answer = name;
      //   console.log(answer);
    }
  }
  return answer;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Jeremias", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
