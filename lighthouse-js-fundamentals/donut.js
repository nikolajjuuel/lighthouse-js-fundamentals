var bills = [
  50.23, 19.12, 34.01, 100.11, 12.15, 9.9, 29.11, 12.99, 10.0, 99.22, 102.2,
  100.1, 6.77, 2.22,
];

let totals = bills.map(function(total){
    total = total * 1.15;
    return Number(total.toFixed(2));
})

//toFixed()changes number to string
//Therefore needs to be converted back to a number with Number()

for (const bill of bills) {
  bill = bill * 1.15;
  return bill.toFixed(2);
}

function bills15(bills) {
  const bills15 = [];
  for (let bill of bills) {
    bill = bill * 1.15;
    bills15.push(bill.toFixed(2));
  }
  return bills15;
}

console.log(bills15(bills));
