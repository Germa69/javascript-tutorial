/**
  // Common
*/

var i;
var x;
var n;

/**
  // TODO: B1| Then answer the following questions:
*/

/**
  //? 1. Var và const trong JavaScript là gì?
  -> var và const trong Javascript là 2 cách để khai báo một biến trong Javascript
  //? 2. Sự khác biệt giữa let và var là?
  - Khai báo var là phạm vi toàn cục hoặc phạm vi chức năng trong khi let là phạm vi khối
  - Các biến var có thể được cập nhật và khai báo lại trong phạm vi của nó
  - Biến let có thể được cập nhật nhưng không được khai báo lại
  - Các biến var được khởi tạo với undefined
  - Biến let không được khởi tạo
  //? 3. Sự khác biệt giữa let và const là:
  - Biến let có thể được cập nhật nhưng không được khai báo lại
  - Biến const không thể được cập nhật hoặc khai báo lại
  - Let có thể được khai báo mà không được khởi tạo
  - Const phải được khởi tạo trong khi khai báo
  //? 4. Sử dụng trong những trường hợp nào?
  - Const được sử dụng để khai báo một hằng số - một giá trị không thể thay đổi trong thời gian chạy
  - Hãy tạo một biến có thể truy cập trong khối bao quanh nó
  - Var tạo một biến có thể truy cập trong suốt hàm chứa của nó 
*/

/**
  // TODO: B2| Then answer the following questions:
*/

/**
  //? 1. Boolean là gì?
  - The boolean type has only two values: true and false.
  //? 2. Kết quả nào trong Boolean? 
  - They are  yes/no values: true means “yes, correct”, and false means “no, incorrect”.
*/

/**
  // TODO: B3| Write a program to print out
*/

// var i = 0;
// var nhapSo;
// var nhapN;
// var nhapC;
// var nhapS;

// console.log('a) 7 numbers, starting from 0 (no user input):')
// for (i = 0; i < 7; i++) {
//     console.log(i)
// }
// console.log('---------------------------------------------')
// console.log('b) n numbers, starting from 0, n entered by user:')
// do {
//     nhapSo = Number(prompt('Enter a number?')) // 4
// } while (isNaN(nhapSo) || nhapSo == '')

// for (i = 0; i < nhapSo; i++) {
//     console.log(i)
// }
// console.log('---------------------------------------------')
// console.log('c) A sequence of numbers, starting from 3, ending before n, n entered by user:')
// do {
//     nhapN = Number(prompt('Enter a number?')) // 7
// } while (isNaN(nhapN) || nhapN == '')

// for (i = 3; i < nhapN; i++) {
//     console.log(i)
// }
// console.log('---------------------------------------------')
// console.log('d) A sequence of numbers, starting from c, ending before n, c and n entered by user:')
// do {
//     nhapN = Number(prompt('Enter n')) // 7
//     nhapC = Number(prompt('Enter c')) // 2
// } while (isNaN(nhapN) || nhapN == '' && isNaN(nhapC) || nhapC == '')

// for (i = nhapC; i < nhapN; i++) {
//     console.log(i)
// }
// console.log('---------------------------------------------')
// console.log('e) A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user:')
// do {
//     nhapN = Number(prompt('Enter n')) // 7
//     nhapC = Number(prompt('Enter c')) // 2
// } while (isNaN(nhapN) || nhapN == '' && isNaN(nhapC) || nhapC == '')

// for (i = nhapC; i < nhapN; i += 3) {
//     console.log(i)
// }
// console.log('---------------------------------------------')
// console.log('f) A sequence of numbers, starting from c, ending before n, stepping by s. c, n and s entered by user:')
// do {
//     nhapN = Number(prompt('Enter n')) // 13
//     nhapC = Number(prompt('Enter c')) // 2
//     nhapS = Number(prompt('Enter s')) // 4
// } while (isNaN(nhapN) || nhapN == '' && isNaN(nhapC) || nhapC == '' && isNaN(nhapS) || nhapS == '')

// for (i = nhapC; i < nhapN; i += nhapS) {
//     console.log(i)
// }
// console.log('---------------------------------------------')

/**
  // TODO: B4| Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
*/

// var calculate;
// var fact = 1;

// do {
//     calculate = Number(prompt('Enter a number')) // 5
// } while (isNaN(calculate) || calculate == '')

// for (i = 1; i <= calculate; i++) {
//     fact *= i
// }
// console.log("B4: ", fact)
// alert(`The factorial of ${calculate} is ${fact}`);
// console.log('---------------------------------------------')

/**
  // TODO: B5| Write a program asking users their age, and then decide if they are old enough to view a 14+ content
*/

// var age;
// do {
//     age = Number(prompt('How old are you?')) // 5
// } while (isNaN(age) || age == '')

// if (age > 14) {
//     console.log("B4: Enjoy!")
//     alert('Enjoy!')
//     console.log('---------------------------------------------')
// } else {
//     console.log("B4: You are not old enough to view this content")
//     alert('You are not old enough to view this content');
//     console.log('---------------------------------------------')
// }


/**
  // TODO: B6| Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range
*/

// do {
//     x = Number(prompt('Enter a number'))
// } while (isNaN(x) || x == '')

// let arr = [];
// arr[0] = 1;
// arr[9] = 10;

// if (x > arr.length / 2) {
//     console.log("B6: Higher half of 0 - 9")
//     alert('Higher half of 0 - 9')
//     console.log('---------------------------------------------')
// } else if (x === arr.length / 2) {
//     console.log("B6: Half of 0 - 9")
//     alert('Half of 0 - 9')
//     console.log('---------------------------------------------')
// } else {
//     console.log("B6: Lower half of 0 - 9")
//     alert('Lower half of 0 - 9')
//     console.log('---------------------------------------------')
// }

/**
  // TODO: B7| Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n
*/

// do {
//     n = Number(prompt('n = '))
//     x = Number(prompt('x = '))
// } while (isNaN(n) || n == '' && isNaN(x) || x == '')

// if (x > n / 2) {
//     alert(`${x} is higher half of ${n}`);
//     console.log(`B7: ${x} is higher half of ${n}`)
//     console.log('---------------------------------------------')
// } else if (x === n / 2) {
//     alert(`${x} is half of ${n}`);
//     console.log(`B7: ${x} is half of ${n}`)
//     console.log('---------------------------------------------')
// } else {
//     alert(`${x} is lower half of ${n}`);
//     console.log(`B7: ${x} is lower half of ${n}`)
//     console.log('---------------------------------------------')
// }

/**
  // TODO: B8| Write a script to check if a number is even (divisible by 2) or odd number
*/

// do {
//     x = Number(prompt('x = '))
// } while (isNaN(x) || x == '')

// if (x % 2 == 0) {
//     alert(`${x} is an even number`);
//     console.log(`B8: ${x} is an even number`)
//     console.log('---------------------------------------------')
// } else {
//     alert(`${x} is an odd number`);
//     console.log(`B8: ${x} is an odd number`)
//     console.log('---------------------------------------------')
// }

/**
  // TODO: B9| Write a program to print out
*/

//? a. Tổng là 6, nửa là L, nửa là H:
// for (i = 0; i < 6 / 2; i++) {
//     console.log('L');
// }
// for (i = 0; i < 6 / 2; i++) {
//     console.log('H');
// }
// console.log('---------------------------------------------')

//? b. Nhập n, nửa lớn là L, nửa nhỏ là H:
// do {
//     n = Number(prompt('Nhập n = '))
// } while (isNaN(n) || n == '')

// if (n % 2 === 0) {
//     for (i = 0; i < n / 2; i++) {
//         console.log('L');
//     }
//     for (i = 0; i < n / 2; i++) {
//         console.log('H');
//     }
// } else {
//     for (i = 0; i < Math.round(n / 2); i++) {
//         console.log('L');
//     }
//     for (i = 0; i < Math.round(n / 2) - 1; i++) {
//         console.log('H');
//     }
// }
// console.log('---------------------------------------------')

//? c. 8 là 1 và 0 lặp lại:
// for (i = 0; i < 8; i++) {
//     if (i % 2 == 0) {
//         console.log(0);
//     } else {
//         console.log(1);
//     }
// }
// console.log('---------------------------------------------')

//?d. Nhập n, 1 và 0 lặp lại:
// do {
//     n = Number(prompt('Nhập n = '))
// } while (isNaN(n) || n == '')

// for (i = 0; i < n; i++) {
//     if (i % 2 == 0) {
//         console.log(0);
//     } else {
//         console.log(1);
//     }
// }
// console.log('---------------------------------------------')

/**
  // TODO: B10| Write a script to calculate the BMI (Body Mass Index) of a person, the formula is as follows BMI (Body Mass Index):
  // Description:
  BMI = mass (kg) / (height(m) x height(m))
  Note: you must do the conversion from cm to m before calculation
  And then based on the calculated BMI, tell them that they are:
  ● Severely underweight if BMI &lt; 16
  ● Underweight if BMI is between 16 and 18.5
  ● Normal if BMI is between 18.5 and 25
  ● Overweight if BMI is between 25 and 30
  ● Obese if BMI is more than 30
*/

var weightInKg;
var heightInCm;
var heightInM;
var BMI;

do {
    weightInKg = Number(prompt('Your weight in kg?'))
    heightInCm = Number(prompt('Your height in cm?'))
} while (isNaN(weightInKg) || weightInKg == '' && isNaN(heightInCm) || heightInCm == '')

heightInM = heightInCm / 100;

BMI = Math.round((weightInKg / (heightInM * heightInM)) * 100) / 100;

alert(`Your BMI is ${BMI}`);

if (BMI < 16) {
    alert('Severely underweight');
    console.log('Severely underweight');
    console.log('---------------------------------------------')
} else if (BMI >= 16 && BMI < 18.5) {
    alert('Underweight');
    console.log('Underweight');
    console.log('---------------------------------------------')
} else if (BMI >= 18.5 && BMI < 25) {
    alert('Normal');
    console.log('Normal');
    console.log('---------------------------------------------')
} else if (BMI >= 25 && BMI <= 30) {
    alert('Overweight');
    console.log('Overweight');
    console.log('---------------------------------------------')
} else {
    alert('Obese');
    console.log('Obese');
    console.log('---------------------------------------------')
}