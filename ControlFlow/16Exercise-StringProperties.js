const obj = {
    title: 'a',
    body: 1,
    rating: '15'
};

function showProperties(obj) {
    for (let key in obj) {
        if (typeof (obj[key]) == 'string') {
            console.log(key, obj[key]);
        }
    }
}

showProperties(obj);