// TODO: Hoisting với var, function declaration

// console.log(age); // undefined
// var age = 18;


// console.log(sum(1, 2)); // 3

// function sum(a, b) {
//     return a + b;
// }

// TODO: Hoisting với let, const

// {
//     console.log(fullName); // Temporal Dead Zone
//     let fullName = 'Nguyễn Đức Anh'
// }

// TODO: Bonus

function makeCouter () {
    let count = 0;

    return increment;

    function increment() {
        return ++count;
    }

}
    
const couter = makeCouter();

console.log(couter());