let x = 10;
let y = x;
x = 20;
console.log(y);


let o = {
    value: 10
};

let a = o; 
o.value = 20;
console.log(a);

// Value type

let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number);

// Reference type

let obj = {value : 10};

function incObj(obj) {
    obj.value++;
}

incObj(obj);
console.log(obj);