function lastIndexOf(arry, lastIndexOf) {
  lastIndexof = -1;
  for (let i = 0; i < arry.length; i++) {
    if (arry[i] === lastIndexOf) {
      lastIndexof = i;
    }
  }

  console.log(lastIndexof);
  return lastIndexof;
}
