const checkAir = function (samples, threshold) {
  // Code here!
  let dirtySamples = 0;
  let totalSamples = 0;
  for (const sample of samples) {
    totalSamples++;
    if (sample === "dirty") {
      dirtySamples++;
    }
  }

  let quality = dirtySamples / totalSamples;
  const report = quality < threshold ? "clean" : "polluted";

  return report;
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);
