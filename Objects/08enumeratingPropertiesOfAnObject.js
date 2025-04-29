const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// The simplest way to enumerate the properties of an object
for (let key in circle)
    console.log(key, circle[key]);

for (let key of Object.keys(circle))
    console.log(key);

// Access the properties in an arrays
for (let entry of Object.entries(circle))
    console.log(entry);

// If a given property exists in a given object
if ('radius' in circle) console.log('yes'); 