// Create an Address object and then create function showAddress(address) to dipslay all the properties and their values.

const address = {
    street: 'str',
    city: 'vtc',
    zipCode: '1234'
};

function showAddress(address) {
    for (let key in address)
        console.log(`${key}: ${address[key]}`);
}

showAddress(address);

