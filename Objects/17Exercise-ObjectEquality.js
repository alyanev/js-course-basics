let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
address2 = address1;
// let address1 = {
//     street: 1
// };

function Address(street, city, zipCode) {
    this.street = street,
        this.city = city,
        this.zipCode = zipCode
}

function areEqual(address1, address2) {
    for (let key in address1)
        if (address1[key] === address2[key])
            return true

    return false;
}

function areSame(address1, address2) {
    if (address1 === address2)
        return true;

    return false;
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));