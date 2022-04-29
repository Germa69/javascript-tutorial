"use strict"

// TODO: Bind

// this.firstName = "Sin"
// this.lastName = "Đăng"

// const teacher = {
//     firstName: 'Hòa',
//     lastName: 'Phát',
//     getFullName(data1, data2) {
//         console.log(data1, data2);
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// const student = {
//     firstName: 'Mai',
//     lastName: 'Thúy',
// }

// //! Case 1:
// console.log(teacher.getFullName()); //! Hòa Phát

// //! Case 2:

// const getTeacherName = teacher.getFullName.bind(student) //! Tham chiếu đến vùng nhớ

// console.log(getTeacherName === teacher.getFullName); //! Tạo ra 1 vùng nhớ mới

// console.log(getTeacherName('Test1', 'Test2')); //! Sin Đăng

// TODO: Ứng dụng Bind vào DOM

// const course = {
//     name: 'JavaScript',
//     price: 1000,
//     getCourse() {
//         console.log(`${this.name} ${this.price}`)
//         // return `${this.name} ${this.price}`
//     }
// }

// const button = document.querySelector('button')

// button.onclick = course.getCourse.bind(course)

// TODO: Ứng dụng quản lý ô tô (Bind)

//! Khi chưa có bind
// const $ = document.querySelector
// const $$ = document.querySelectorAll

//! Khi đã có bind
// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)

// const app = (() => {
//     const cars = []

//     const root = $('#root')
//     const input = $('#input')
//     const submit = $('#submit')

//     return {
//         add(car) {
//             cars.push(car)
//         },
//         delete(index) {
//             cars.splice(index, 1)
//         }, 
//         render() {
//             const html = cars.map((car, index) => `
//                 <li>
//                     ${car}
//                     <span class="delete" data-index="${index}">&times</span>
//                 </li>
//             `)
//             .join('')

//             root.innerHTML = html
//         },
//         handleDelete(e) {
//             const deleteBtn = e.target.closest('.delete')
//             if (deleteBtn) {
//                 const index = deleteBtn.dataset.index
//                 this.delete(index)
//                 this.render()
//             }
//         },
//         init() {
//             //! Handle DOM events
//             submit.onclick = () => {  //! Dùng arrow func bởi vì nó không có context nên nó lấy this bên ngoài
//                 const car = input.value
//                 this.add(car)
//                 this.render()

//                 input.value = null
//                 input.focus()
//             }

//             root.onclick = this.handleDelete.bind(this)

//             this.render()
//         }
//     }
// })()

// app.init()

//! Delegate pattern: Bắt được những element sau khi thêm vào DOM khi chương trình chạy


// TODO: Call
//! VD1:
// function random () {
//     console.log(Math.random());
// }

// random() ~ Trong engine nó đã tự gọi đến phương thức call

//! VD2:
// const teacher = {
//     firstName: 'Lan',
//     lastName: 'Anh',
   
// }

// const me = {
//     firstName: 'Sin',
//     lastName: 'Đăng',
//     showFullName() {
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }

// me.showFullName.call(teacher)

//! VD3:
// this.firstName = "Hoàng"
// this.lastName = "Anh"

// function showFullName () {
//     console.log(`${this.firstName} ${this.lastName}`);
// }

// showFullName.call(this)

//! VD4:
// function Animal (name, weight) {
//     this.name = name;
//     this.weight = weight;
// }

// function Dragon (name, weight, legs) {
//     Animal.call(this, name, weight)
//     this.legs = legs;
// }   

// const sinDang = new Dragon('Sin Đăng', 72, 2)

// console.log(sinDang);

//! VD5:

var logger = (...params) => {
    console.log(...params);
}

logger(1, 2, 4, 5, 6, 7, 8, 9, 10)