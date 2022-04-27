// Object
var myInfo = {
    name: 'Sin Dang',
    age: 18,
    address: 'Ha Noi'
};

for (var key in myInfo) {
    console.log(myInfo[key]);
}

// Array
var languages = [
    'English',
    'Vietnamese',
    'Japanese',
];

for (var key in languages) {
    console.log(languages[key]);
}

// String
var myString = 'JavaScript';

for (var key in myString) {
    console.log(myString[key]);
}