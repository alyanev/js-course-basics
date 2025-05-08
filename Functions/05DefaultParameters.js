// Default values in JavaScript allow parameters to have a preset value if no argument is provided.
// Calculates the interest based on the principal, rate, and years.

function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}

console.log(interest(10000));