/**
 *  1. Local Storage là gì ?
 *  2. Hạn chế của Local Storage
 *  3. Kiểm tra Local Storage
 *  4. Sử dụng Local Storage với JavaScript
 */


var courses = ['JavaScript', 'PHP'];
localStorage.setItem('list_course', JSON.stringify(courses))
localStorage.setItem('list_course1', JSON.stringify(courses))
localStorage.setItem('list_course2', JSON.stringify(courses))

var courses = localStorage.getItem('list_course');
// localStorage.removeItem('list_course');

courses = JSON.parse(courses)
console.log(courses);

window.localStorage.clear();