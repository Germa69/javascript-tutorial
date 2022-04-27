// Array
var languages = [
    'Javascript',
    'PHP',
    'Java'
];

for (var value in languages) {
    console.log(value);
}

// Object

var myInfo = {
    name: 'Sin Dang',
    age: 22
};

// for (var value of myInfo) {
//     console.log(value); // ERROR
// }

for (var value of Object.keys(myInfo)) {
    console.log(myInfo[value]);
}

for (var value of Object.values(myInfo)) {
    console.log(value);
}




