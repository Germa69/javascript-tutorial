// TODO: 1. Array

var array = ['JavaScript', 'PHP', 'Ruby'];

var [a, b, ...rest] = array;

console.log(a); //! JavaScript
console.log(rest); //! ['Ruby']
console.log('....................................'); 

// TODO: 2. Object

var course = {
    name: 'JavaScript',
    price: 1000,
    image: 'Image',
    // description: 'Description',
    children: {
        name: 'ReactJS'
    }
};

//! TH1
var {name, ...rest} = course;
console.log(name); //! JavaScript
console.log(rest); //! {price: 1000, image: 'Image', children: {name: 'ReactJS'}}
console.log('....................................');

//! TH2: Đổi tên 1 element dùng dấu ':'
var {name: parentName, children : {name: childrenName} } = course; 
console.log(parentName); //! JavaScript
console.log(childrenName); //! ReactJS
console.log('....................................');

//! TH3: Lấy ra 1 value nhưng nó không được định nghĩa 
var {description = 'Default description'} = course;
console.log(description); //! Default description
console.log('....................................');

// TODO: 3. Rest parameters

function logger(a, ...params) {
    console.log(a); //! 1
    console.log(params); //! [2, 3]
}
logger(1, 2, 3); 
console.log('....................................');

// TODO: 4. Luyện tập
// Array
function testArr ([a, b, ...rest]) {
    console.log(a, b); //! 1, 2
    console.log(rest); //! [3, 4, 5]
}

testArr([1, 2, 3, 4, 5]);
console.log('....................................');

// Object
function testObj ({ name, ...rest }) {
    console.log(name); //! JavaScript
    console.log(rest); //! {price: 1000, description: 'Description Content'}
}

testObj({
    name: 'JavaScript',
    price: 1000,
    description: 'Description Content'
});


