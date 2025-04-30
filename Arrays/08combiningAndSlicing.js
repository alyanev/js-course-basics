const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined);

const sliced = combined.slice(0, 2);
const copyArr = combined.slice();
console.log(sliced);
console.log(copyArr);
