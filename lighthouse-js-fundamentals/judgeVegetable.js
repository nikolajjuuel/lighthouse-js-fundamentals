const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let best = 0;
  let JudgOfBest = 0;
  for (const submitter of vegetables) {
    if (best < submitter[metric]) {
      console.log(submitter);

      best = submitter[metric];
      JudgOfBest = submitter.submitter;
    }
  }
  return JudgOfBest;
};
