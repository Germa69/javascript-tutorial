// TODO: Global
// var message = 'Javascript';

// function logger () {
//     console.log(message);
// }

// TODO: Code Block

// {
//     const age = 20;
// }

// if..else, for, while

// TODO: Local scope

// function logger () {
//     function logger2 () {
//         console.log('LOG 2');
//     }

//     logger2()
// }

// logger()

// TODO: Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo 

// function logger(first, last) {
//     console.log(first, last);
// }

// logger('Sin', 'Đăng')
// logger('Hòa', 'Phát')
// logger('Minh', 'Tâm')


// TODO: Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó 

// const age = 18;

// function variable() {
//     const age = 19;

//     function variable2 () {
//         console.log(age);
//     }

//     variable2()
// }

// variable()

// TODO: Cách thức một biến được truy cập
// Hộp nhỏ hơn luôn truy cập được biến ở hộp lớn hơn
// Luôn lấy biến có phạm vi gần nhất
//! Biến
// const age = 18;

// {
//     const age = 16;
//     {
//         {
//             const age = 14;
//             {
//                 const age = 12;
//                 console.log(age);
//             }
//         }
//     }
// }

//! hàm
// const tuoi = 18;

// function age() {
//     const tuoi = 16;
//     function age1 () {
//         const tuoi = 16;
//         function age2 () {
//             const tuoi = 14;
//             console.log(tuoi);
//         }
//         age2()
//     }
//     age1()
// }
// age()

// TODO: Biến trong hàm được tham chiếu bởi 1 hàm ?

// function makeCouter () {
//     let count = 0;

//     function increment() {
//         return ++count;
//     }

//     return increment;
// }

// const couter = makeCouter();

// console.log(couter());

for (let i = 0; i < 10; i++) {
    console.log(i);
}