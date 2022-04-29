// TODO: Code Block: if..else, loop, etc, ...
//? if..else

// - Var

// {
//     var test = true;
// }

// console.log(test); //! true

// - Let, Const

// {
//     let test = true;
//     console.log(test); //! true
// }

// console.log(test); //!  test is not defined

//? Loop

// - Var

// for (var i = 0; i < 10; i++) {
//     console.log(i); // ! 0 -> 9
// }

// console.log(i); //! 10

// - Let, Const
// for (let i = 0; i < 10; i++) {
//     console.log(i); // ! 0 -> 9
// }

// console.log(i); //! i is not defined


//? Function

// - Var: Khi 1 khối mã nằm bên trong 1 hàm thì var sẽ trở thành một biến cấp hàm

// function sayHi () {
//     {
//         var phrase = "Hello";
//     }

//     console.log(phrase);
// }

// sayHi(); //! Hello
// console.log(phrase); //! phrase is not defined

// - Let, Const: Chỉ thực thi trong khối 


// function sayHi () {
//     {
//         let phrase = "Hello";
//     }

//     console.log(phrase);
// }

// sayHi(); //! phrase is not defined
// console.log(phrase); //! phrase is not defined

// TODO: Var dung nạp khai báo lại biến / Let, Const thì không

//? - Var: 

// var a = 1;
// var a = 2;
// console.log(a); //! 2

//? - Let, Const

// let a = 1;
// let a = 2;
// console.log(a); //! Identifier 'a' has already been declared

// TODO: Hosting

//? - Var

// a = 1;
// var a;
// console.log(a); //! 1

//? - Let, Const

// a = 1;
// let a;
// console.log(a); //! Identifier 'a' has already been declared

// TODO: Assignment

//? - Var

// var a = 1;
// a = 2;
// console.log(a); //! 2

//? Const: Không thể sử dụng toán tử gán tới lần thứ 2 với nó

// const a = 1;
// a = 2;
// console.log(a); //! Assignment to constant variable.

const obj = {
    name: 'JavaScript'
};

obj.name = 'PHP'; // Đang gán lại thuộc tính name

//! Chú ý:
// Giống nhau: Đều định nghĩa ra 1 biến

// Code thuần: Var

// Babel: Const, Let

// - Khi định nghĩa biến và không gán lại biến đó: Const
// - Khi định nghĩa biến và gán lại biến đó: Let
