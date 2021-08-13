const isOdd  = function (num) {
    return num % 2 !== 0;
  }
  
  const tenIsOdd = isOdd(10);
  const elevenIsOdd = isOdd(11);
  
  console.log(tenIsOdd);
  console.log(elevenIsOdd);
 console.log("3 is odd: " + isOdd(3));
  console.log("8 is odd: " + isOdd(8));   