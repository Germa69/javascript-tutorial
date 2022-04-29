// Declare Common
// var temp;
// var arr;
// var nhap;
// var i;

/**
  // TODO: B1: Variable swap
*/

// let a = 5;
// let b = 6;

// temp = a;
// a = b;
// b = temp;

// console.log(a) // 6
// console.log(b) // 5
// console.log("---------------------------------------")

/**
  // TODO: B2: Swap Array - Đổi vị trí phần tử trong mảng
*/

// arr = ['PHP', 'NodeJS', 'Laravel'];
// console.log(arr)

// temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

// console.log("Mảng sau khi swap: ", arr)
// console.log("---------------------------------------")

/**
  // TODO: B3: Sqlit String into Array
*/

// var str = 'Hello beauty there';

// console.log(str.split(" "))

/**
  // TODO: B4: Spread Operator
*/

// var arr1 = [4, 5, 7, -8];
// console.log("Mảng khởi tạo: " +arr1)
// var arr2 = [...arr1];
// console.log("Mảng kế thừa: " + arr2)
// console.log("---------------------------------------")

/**
  // TODO: B5: Write a script to simulate a clothes shop, asking and performing certain tasks from users
*/

// let chuCai = [
//     'C',
//     'R',
//     'U',
//     'D',
//     'E',
// ];

// let sanPham = [
//     ' Jeans',
//     ' T-Shirt',
//     ' Socks',
// ];

// while(true){                    
//     nhap = String(prompt(`Hi there, welcome to shop admin panel, what do you want (C,R,U,D) ?`));

//     if (nhap === chuCai[1]){
//         console.log('The current items are:');
//         for (let i = 0; i < sanPham.length; i++){ //-> hiện cả mảng xuôi

//             console.log(`${i+1}. ${sanPham[i]}`);
//             // alert(sanPham[i]);
//         }

//     }

//     else if (nhap === chuCai[0]){
//         let newItem = prompt('Enter the new name of the new item: ');
//         newItem = String(newItem);

//         sanPham.push(newItem);

//         alert('Done');

//     }

//     else if (nhap === chuCai[2]){
//         let positionUpdate = prompt('Enter position you want to update: ');
//         positionUpdate = Number(positionUpdate);
//         let newName = prompt('Enter new name: ');
//         newName = String(newName);
//         sanPham[positionUpdate] = newName;

//         alert('Done');

//     }

//     else if (nhap === chuCai[3]){
//         let positionDelete = prompt('Enter the position you want to delete: ');
//         positionDelete = Number(positionDelete);

//         sanPham.splice(positionDelete, 1);

//         alert('Done');
//     }

//     else if (nhap === chuCai[4]) {
//         alert('This command is not supported');
//         break;

//     }
// }

/**
  // TODO: B6: Write a script to ask users enter a sequence of numbers, the Numbers are separated by commas, calculate the sum of the numbers and show it to users
*/

// nhap = prompt('Enter a sequence of Number, separated by commas (,)')

// let arrSo  = nhap.split(','); 
// console.log(arrSo);
//? C1:
// let sum = 0;


// for ( let i = 0; i < arrSo.length; i++){
//   sum += Number(arrSo[i]);
// }

// alert(sum)

//? C2:
// var reducer = (a, b) => Number(a) + Number(b)
// console.log(arrSo.reduce(reducer))

/**
  // TODO: B7: Create an array containing at least 5 numbers, then ask the user to enter a number, do a search to find the number in the array, if a number is found, let the user know it with its item in the array, otherwise , also tell them the same 
*/

// arr = [3, 4, 6, -9, 10, -88, 2];
// console.log(arr)

// var nhapSo = Number(prompt('Enter the number: '))

//? C1: 
// if(arr.indexOf(nhapSo)!= -1){
//   console.log(`${nhapSo} is FOUND in my array at index ${arr.indexOf(nhapSo)} `)
// }else{
//   console.log(`${nhapSo} is NOT FOUND in my array`)
// }

//? C2:
// if(arr.includes(nhapSo)){
//   console.log(`${nhapSo} is FOUND in my array at index ${arr.indexOf(nhapSo)} `)
// }else{
//   console.log(`${nhapSo} is NOT FOUND in my array`)
// }

/**
  // TODO: B8: Description
*/

// Bạn là một người chăn cừu sở hữu một đàn cừu
// Mỗi con cừu của bạn trong đàn của bạn có kích thước khác nhau:

//!B1: Tạo một mảng để đại diện cho kích cỡ đàn của bạn và ghi lại tất cả các kích thước đàn, đầu ra màn hình dự kiến:

// var Size = [5, 7, 300, 90, 24, 50, 75];

// console.log(`1. Hello, my name is Phuong Nam and here is my sheep size:  \n${Size.join(' ')}`)
// console.log('------------------------------------------------------------------')

//! B2: Vào cuối mỗi tháng, bạn phải chọn một và chỉ một con cừu để cắt và do đó bạn muốn chọn cái lớn nhất để tối đa hóa lợi nhuận của bạn. Thêm tập lệnh để tìm kiếm con cừu lớn nhất trong danh sách của bạn: 300

// var max = Size[0];
// for (i = 0; i < Size.length; i++) {
//     if (max < Size[i]) {
//         max = Size[i]
//     }
// }
// console.log(`2. Hello, my name is Phuong Nam and here is my sheep size:  \n${Size.join(' ')}`)
// console.log('\n')
// console.log(`Now my biggest sheep has size ${max}, let's shave it`)
// console.log('------------------------------------------------------------------')

//! B3: Khi tuyệt đối lớn nhất của bạn, kích thước của nó sẽ trở lại kích thước mặc định, là 8.

// var defaultSize = 8;
// console.log(`3. Hello, my name is Phuong Nam and here is my sheep size:  \n${Size.join(' ')}`)
// console.log('\n')
// console.log(`Now my biggest sheep has size ${max}, let's shave it`)
// console.log('\n')
// Size.splice(Size.indexOf(max), 1, defaultSize)
// console.log(`After shearing, here is my flock \n${Size.join(' ')}`)
// console.log('------------------------------------------------------------------')

//! B4: Trong tháng tiếp theo, Mọi con cừu trong đàn của bạn phát triển, chúng có kích thước tăng 50. Đăng xuất chúng

// console.log(`4. Hello, my name is Phuong Nam and here is my sheep size:  \n${Size.join(' ')}`)
// console.log('\n')
// console.log(`Now my biggest sheep has size ${max}, let's shave it`)
// console.log('\n')

// console.log(`After shearing, here is my flock \n${Size.join(' ')}`)
// console.log('\n')
// console.log('AFTER 1 MONTH')
// for (i = 0; i < Size.length; i++) {
//     Size[i] += 50
// }
// console.log(`One month has, passed, my sheeps, have grown, here are their sizes  \n${Size.join(' ')}`)
// console.log('------------------------------------------------------------------')

//! B5: Hãy làm điều này trong 4 tháng (hoặc bao lâu tùy thích)

// let months = Number(prompt('Làm trong bao nhiêu tháng: '));

// for (let i = 0; i < months; i++) {

//     console.log(`MONTH ` + Number(i + 1));
//     console.log('One month has passed, my sheeps has grown, here are their sizes: ');


//     for (let i = 0; i < Size.length; i++) {
//         Size[i] += 50;
//     }
//     console.log(Size);


//     max = Size[0];
//     for (let i = 0; i < Size.length; i++) {
//         if (max < Size[i]) {
//             max = Size[i];
//         }
//     }
//     console.log(`Now my biggest sheep has size ${max}, let\'s shave it:`);


//     console.log('After shearing, here is my flock ')

//     Size.splice(Size.indexOf(max), 1, defaultSize);

//     console.log(Size);
// }

//! Tính tổng tiền trong mảng:

// let reducer = (a, b) => Number(a) + Number(b);
// let tongSizeFlock = Size.reduce(reducer);

// console.log(`My flock has size in total: ${tongSizeFlock} `);

// let money = tongSizeFlock * 23000;

// console.log(`I would get ${tongSizeFlock} * 2$ = ${money}`);

/**
  // TODO: B9: Given the array
*/

// const colors = ['red', 'gray', 'blue', 'purple', 'cyan']

// for (i = 0; i < 4; i++) {
//     color(colors[1])
//     forward(30)
//     right(90)
// }

// for (i = 0; i < 4; i++) {
//     color(colors[2])
//     forward(60)
//     right(90)
// }

// for (i = 0; i < 4; i++) {
//     color(colors[3])
//     forward(90)
//     right(90)
// }

// for (i = 0; i < 4; i++) {
//     color(colors[4])
//     forward(120)
//     right(90)
// }

/**
  // TODO: B10: Viết tập lệnh yêu cầu người dùng nhập một chuỗi tên, được phân tách bằng
    dấu phẩy (,), Tạo một mảng mới chứa các tên, mỗi tên được bao quanh bằng & lt; & gt ;. nếu bạn
    cần gợi ý, hãy tìm chúng ở cuối bài tập về nhà nà
*/

// var nhap = prompt('Enter a sequence of names')

// var arrStr = nhap.split(',')
// var arr1Str = arrStr.map(arrStr => `<${arrStr}>`)

// alert(`${arrStr} => ${arr1Str.toString()}`)
// Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map