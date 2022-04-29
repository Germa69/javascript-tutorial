// TODO: 1. Định nghĩa key : value cho object

// var name = 'Javascript';
// var price = 1000;

// var course = {
//     name,
//     price
// }

// console.log(course);

// TODO: 2. Định nghĩa method cho object

// var name = 'Javascript';
// var price = 1000;

// var course = {
//     name,
//     price,
//     getName() {
//         return name;
//     }
// }

// console.log(course.getName());

// TODO: 3. Định nghĩa key cho object dưới dạng biến 
// VD1:
var fieldName = 'name';
var filePrice = 'price';

var course = {
    [fieldName] : 'Javascript',
    [filePrice] : '1000'
}

console.log(course);

// VD2

// ES5
// var person = {
//     name : 'John',
//     age : 22
// }

// var salary = 'Salary';

// person[salary + 'ofJohn'] = 20000;
// console.log(person);

// ES6

function person(name, age) {
    const salary = 'Salary';

    return {
        name : 'John',
        age : 22,
        [`${salary}ofJohn`] : 20000
    }
}
