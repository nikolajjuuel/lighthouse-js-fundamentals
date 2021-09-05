const numberOfVowels = function (data) {
  // Put your solution here
  let answer = 0;
  for (const letter of data) {
    console.log(letter);
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      answer += 1;
    }
  }
  return answer;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
