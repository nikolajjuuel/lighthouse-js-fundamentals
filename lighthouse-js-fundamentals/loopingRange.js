function range(start, end, step) {
  const arry = [];
  if (end == null || step == null) {
    return arry;
  } else if (step <= 0) {
    return arry;
  } else {
    for (start; start <= end; start += step) {
      console.log(start);
      arry.push(start);
    }
    return arry;
  }
}
console.log(range(10, 30, -1));
