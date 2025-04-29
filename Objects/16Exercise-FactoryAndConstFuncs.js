const address = {
    street: 'str',
    city: 'vtc',
    zipCode: '1234'
};

function showAddress(address) {
    for (let key in address)
        console.log(`${key}: ${address[key]}`);
}

//Using factory function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
}

let factoryAddress = createAddress('a', 'b', 'c');
showAddress(factoryAddress);

// Using Constructor function
function Address(street, city, zipCode) {
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
}

let constructorAddress = new Address('al', 'vtcc', '3442');
showAddress(constructorAddress);