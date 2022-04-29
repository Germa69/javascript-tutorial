// TODO: Array
var course = [
    'Javascript',
    'PHP',
    'React'
];

var course2 = [
    'HTML',
    'CSS'
]

// var result = course.concat(course2); //! C1

var result = [...course2, ...course];

console.log(result);
console.log('....................................'); //! ['HTML', 'CSS', 'Javascript', 'PHP', 'React']

// TODO: Object

var obj = {
    name: 'Nguyễn Đức Anh'
};

var obj2 = {
    age: 21
};

var obj3 = {
    ...obj,
    ...obj2
}

console.log(obj3);
console.log('....................................'); //! {name: 'Nguyễn Đức Anh', age: 21}

// TODO: Apply

var defaultConfig = {
    api: 'https://domain-page-course',
    apiVersion: 'v1',
    other: 'other'
};

var exerciseConfig = {
    ...defaultConfig,
    api: 'https://domain-page-exercise',
}

console.log(exerciseConfig);
console.log('....................................'); //! {api: 'https://domain-page-exercise', apiVersion: 'v1', other: 'other'}


var test = {
    name: 'test',
    name: 'test2'
}

console.log(test.name); //! test2
console.log('....................................');

// TODO: Function

var array = [
    'Javascript',
    'PHP',
    'React'
];

function logger (...rest) {
    for (var i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
}

logger(...array);

// TODO: Apply

const array1 = ['😉','😊','😇'];
const copyWithEquals = array1 // Thay đổi mảng array đồng nghĩa cũng sẽ thay đổi mảng copyWithEquals
const copyWithSpread = [...array1] // Thay đổi mảng array sẽ không ảnh hưởng đến mảng copyWithSpread


array1[0] = '😡' //thay đổi phần tử đầu tiên của mảng array

console.log(...array1) // 😡 😊 😇
console.log(...copyWithEquals) // 😡 😊 😇
console.log(...copyWithSpread) // 😉 😊 😇
// Nguồn tham khảo thêm: https://viblo.asia/p/su-dung-spread-operator-trong-javascript-gDVK24welLj

const numbers = [37, -17, 7, 0]

console.log(...numbers);


// tagged_template_literals