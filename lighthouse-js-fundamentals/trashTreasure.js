function smartGarbage(trash, bins) {
  console.log(bins);
  if (trash === "waste") {
    bins.waste++;
    return bins;
  } else if (trash === "recycling") {
    bins.recycling++;
    return bins;
  } else if (trash === "compost") {
    bins.compost++;
    return bins;
  } else {
    console.log("ivalid entry");
  }
}

console.log(smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 }));
