// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN

// Anything that is not Falsy -> Truthy

//  false || false -> true
//  false || 'ss' -> 'ss'
//  false || 1 -> 1
//  false || 1 || 2 -> 1 (As soon find a truthy return truthy)

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);

// This is how we provide a default value
