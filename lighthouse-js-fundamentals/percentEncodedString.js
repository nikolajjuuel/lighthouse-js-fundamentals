const urlEncode = function (text) {
  // Put your solution here
  const link = text.trim();
  let arr = [];
  for (const alpha in link) {
    let letter = link[alpha];
    if (letter === " ") {
      letter = "20%";
      arr.push(letter);
    } else {
      arr.push(letter);
    }
  }
  return arr.join("");
};

console.log(urlEncode("Labs L"));
console.log(urlEncode(" Lighthouse Labs   "));
console.log(urlEncode("blue is greener than purple for sure  "));
