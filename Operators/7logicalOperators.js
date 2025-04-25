// Logical AND (&&)
// Returns TRUE if both operands are TRUE
// console.log(true && false);

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);

// Locical OR (||)
// Returns TRUE if one of the operands is TRUE

let highIncome1 = false;
let goodCreditScore1 = true;
let eligibleForLoan1 = highIncome1 || goodCreditScore1;
console.log(eligibleForLoan1);

let applicationRefused = !eligibleForLoan;
console.log(applicationRefused);