"use strict";

fullName = 'Nguyễn Đức Anh' // Tạo biến fullName ở phạm vi global

function testFunc () {
    age = 18 // Tạo ra biến age ở phạm vi global
}

testFunc()

console.log(fullName);
console.log(age);