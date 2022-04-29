/**
 *  1. IIFE trông như thế nào ?
 *  2. Dùng dấu ; trước IIFE
 *  3. IIFE là hàm "private"
 *       - Là private khi định nghĩa ra thì không gọi được cái name của nó ở phạm vị bên ngoài hoặc ngang cấp
 *       - Sử dụng đệ quy để truy cập đến chính phạm vi của nó
 *  4. Sử dụng IIFE khi nào ?
 *       - Viết private
 *       - Nằm trong phạm vi của hàm
 *       - Muốn đoạn mã được chạy ngay tuy nhiên muốn các đoạn mã trong đó biến và hàm không tạo ra phạm vi Global ảnh hưởng đến dự án 
 *  5. Các cách tạo ra một IIFE
 *  6. Ví dụ sử dụng IIFE
*/

// TODO: 1. IIFE trông như thế nào ?
//? Function Expression ~ Arrow Function
// const callNow = function () {
//     console.log('Function Expression: NOW');
// }
// callNow(); 

//? IIFE: Expression Function
// (function (){
//     console.log('IIFE: NOW NOW'); 
// })()

//? IIFE: Arrow Function
// ((message) => {
//     console.log('Message:', message);
// })('Chào bạn!')

// TODO: 2. Dùng dấu ';' trước IIFE
// //? Trường phái ';'
// var fullName = 'Nguyễn Đức Anh';
// (function (){
//     console.log('Trường phái có ";"');
// })()

// //? Trường phái không ';'
// var fullName = 'Nguyễn Đức Anh'
// ;(function (){
//     console.log('Trường phái không có ";"');
// })()

// TODO: 3. IIFE là hàm "private"
//? TH1: Ngoài phạm vi
// ;(function myFunc(){
//     console.log('NOW');
// })()
// myFunc();

//? TH2: Bên trong phạm vi của nó -> đệ quy

// let i = 0

// ;(function myFunc(){
//     i++
//     console.log(i);

//     if (i < 10)
//         myFunc()
// })()

// TODO: 4.Ví dụ sử dụng IIFE
//! TH1: Chưa có tính đóng gói dữ liệu
// const app = {
//     cars: [],
//     add(car) {
//         this.cars.push(car);
//     },
//     edit(index, car) {
//         this.cars[index] = car;
//     },
//     delete(index) {
//         this.cars.splice(index, 1);
//     }
// }

//! TH2: Tính đóng gói dữ liệu

// const app = (function () {

//     const cars = [];

//     return {
//         getData(index) {
//             return cars[index];
//         },
//         add(car) {
//             cars.push(car);
//         },
//         edit(index, car) {
//             cars[index] = car;
//         },
//         delete(index) {
//             cars.splice(index, 1);
//         }
//     }

// })()
