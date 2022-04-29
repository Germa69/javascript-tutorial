/**
  // TODO: B1: Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi và in ra kết quả. 
  - Input: str_input
  - Output: đảo ngược chuỗi và in ra kết quả
  //! Không sử dụng hàm reverse()
  - Phân tích:
  i = 2 => 3 >= 0
  => c
  i = 1 => 2 >= 0
  +> cb
  i = 0 => 1 >= 0
  => cbd
*/

//* C1: Sử dụng phương thúc có sẵn (Built-in)

//? C1-a:
// var str_input = 'Nguyễn Đức Anh'
// console.log(str_input.split('').reverse().join(''))

// ?C1-b:
// const reverseString = (str) => {
//     return str.split('').reverse().join('');
// };

// console.log(reverseString('Nguyễn Đức Anh'));

//* C2: Sử dụng vòng lặp

// const reverseString = (str) => {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i]
//     }
//     return reversed;
// }
// console.log(reverseString('Nguyễn Đức Anh'))

//* C3: Sử dụng hàm for...of

// const reverseString = (str) => {
//     let reversed = '';
//     for (const c of str) {
//         reversed = c + reversed
//     }
//     return reversed;
// }

// console.log(reverseString('Nguyễn Đức Anh'))

//* C4: Đệ quy

// const reverseString = (str) => {
//     return str ? reverseString(str.substr(1)) + str[0] : str;
// };

// console.log(reverseString('Nguyễn Đức Anh'))

//* C5: Phương thức cho mảng

// const reverseString = (str) => {
//     return str.split('').reduce((r, c) => c + r, '');
// };

// console.log(reverseString('Nguyễn Đức Anh'))

/**
  //! Note:
    - Link: https://bit.ly/2Q5uIvz
    - split() - Nó chia một chuỗi thành một mảng các chuỗi con bằng cách sử dụng dấu phân tách và trả về mảng mới.
    - reverse () - Phương thức này đảo ngược thứ tự của các phần tử trong một mảng.  Phần tử đầu tiên trở thành phần tử cuối cùng và phần tử trở thành phần tử đầu tiên.
    - join() - It joins all elements of an array into a string, and returns the new string.
    - Đệ quy là một cách khác để đảo ngược một chuỗi trong JavaScript.  
      Cách tiếp cận này liên quan đến hai hàm JavaScript: substr () và charAt ().  
      Phương thức đầu tiên trả về một chuỗi con của một chuỗi và phương thức thứ hai trả về ký tự được chỉ định của một chuỗi.
    - reduce() -Phương thức này giảm mảng thành một giá trị duy nhất.  Vì hàm này hoạt động đối với mảng, trước tiên chúng ta cần chia chuỗi thành một mảng bằng phương thức split ().
*/

/**
  // TODO: B2: Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa.
*/

// var str = 'nguyễn đức anh'
// console.log(str.charAt(0).toUpperCase() + str.slice(1, 7) + str.charAt(7).toUpperCase() + str.slice(8, 11) + str.charAt(11).toUpperCase() + str.slice(12))

/**
  // TODO: B3: Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả.
*/

var arrString = ['one', 'two', 'three', 'one', 'one', 'four', 'five', 'four', 'five', 'five']
var arrNumber = [1, 2, 3, 3, 4, 5, 4, 4, 4, 5, 5]

/**
  C1 Sử dụng Set:
  ∙ Set là một đối tượng dữ liệu mới được giới thiệu trong ES6
  ∙ Set chỉ cho bạn lưu trữ các giá trị duy nhất.
  ∙ Khi bạn đưa nó vào trong một mảng, nó sẽ xoá tất cả các giá trị trùng lặp.
  ∙ Áp dụng Spread Operater xử lý kê thừa mảng
*/

//* Step 1:
// const uniqueSet = new Set(arrString);
// console.log(uniqueSet)

//* Step 2:
// const backToArray = [...uniqueSet];
// console.log(backToArray)

//* Biến đổi Set đến một mảng sử dụng Array.from
// var backToArray = Array.from(new Set(arrString))
// console.log(backToArray)

/**
  C2: Sử dụng filter
  Để hiểu được tuỳ chọn này, chúng ta sẽ đi qua 2 phương thức đang làm: indexOf và filter
  - indexOf(): Trả về vị trí (index) đầu tiên nó tìm thấy của phần tử được cung cấp từ mảng.
*/

// var arrStr = arrString.filter((item, index) => {

//     console.log(
//         // a. Item
//         item,
//         // b. Index
//         index,
//         // c. indexOf
//         arrString.indexOf(item),
//         // d. Condition
//         arrString.indexOf(item) === index,
//     );

//     return arrString.indexOf(item) === index
// });

// console.log(arrStr)

/**
  // TODO: B4: Tạo dữ liệu của 3 nhân viên mindX (gồm tên, tuổi, mức lương, chức vụ). Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete).
*/

var information = [{
        ten: 'Nguyễn Đức Anh',
        tuoi: 21,
        mucLuong: 2500000,
        chucVu: 'Giám đốc'
    },
    {
        ten: 'Nguyễn Đức Phúc Lộc',
        tuoi: 18,
        mucLuong: 1500000,
        chucVu: 'Trợ lý'
    },
    {
        ten: 'Nguyễn Đức Long',
        tuoi: 14,
        mucLuong: 500000,
        chucVu: 'Nhân viên'
    },
]

var choose = prompt("Hãy chọn phương thức (Read, Create, Update, Delete)")

if (choose == 'Read' || choose == 'read' || choose == 'R' || choose == 'r') {
    for (let info in information) {
        console.log('-----------------');
        console.log(information[info].ten);
        console.log(`Tuổi: ${information[info].tuoi}`)
        console.log(`Múc lương: ${information[info].mucLuong}`)
        console.log(`Chức vụ: ${information[info].chucVu}`)
    }
} else if (choose == 'Create' || choose == 'create' || choose == 'C' || choose == 'c') {
    var createdName = prompt('Enter new name: ')
    var createdAge = prompt('Enter new age: ')
    var createdSalary = prompt('Enter new salary: ')
    var createdPos = prompt('Enter new pos: ')

    information.push({
        ten: createdName,
        tuoi: createdAge,
        mucLuong: createdSalary,
        chucVu: createdPos
    })

    for (let info in information) {
        console.log('-----------------');
        console.log(information[info].ten);
        console.log(`Tuổi: ${information[info].tuoi}`)
        console.log(`Múc lương: ${information[info].mucLuong}`)
        console.log(`Chức vụ: ${information[info].chucVu}`)
    }
} else if (choose == 'Update' || choose == 'update' || choose == 'U' || choose == 'u') {
    var updated = prompt('Enter position')

    for (let i = 0; i < information.length; i++) {
        if (information[updated] === information[i]) {
            var updatedName = prompt('Enter new name: ')
            information[i].ten = updatedName
            var updatedAge = prompt('Enter new age: ')
            information[i].tuoi = updatedAge
            var updatedSalary = prompt('Enter new salary: ')
            information[i].mucLuong = updatedSalary
            var updatedPos = prompt('Enter new pos: ')
            information[i].chucVu = updatedPos
        }
    }

    for (let info in information) {
        console.log('-----------------');
        console.log(information[info].ten);
        console.log(`Tuổi: ${information[info].tuoi}`)
        console.log(`Múc lương: ${information[info].mucLuong}`)
        console.log(`Chức vụ: ${information[info].chucVu}`)
    }
} else if (choose == 'Delete' || choose == 'delete' || choose == 'D' || choose == 'd') {
    var deleted = prompt('Enter position')

    for (let i = 0; i < information.length; i++) {
        if (information[deleted] === information[i]) {
            information.splice(i, 1)
            alert('Xoá thành công!')
        }
    }

    for (let info in information) {
        console.log('-----------------');
        console.log(information[info].ten);
        console.log(`Tuổi: ${information[info].tuoi}`)
        console.log(`Múc lương: ${information[info].mucLuong}`)
        console.log(`Chức vụ: ${information[info].chucVu}`)
    }
} else {
    alert('Chức năng đang cần nâng cấp!')
}

/**
  // TODO: Bài 5: Viết chương trình cho phép người dùng nhập vào ngày tháng năm
*/

//*a Kiểm tra xem ngày tháng năm đó có hợp lệ hay không

var day = Number(prompt('Nhập ngày: '))
var month = Number(prompt('Nhập tháng: '))
var year = Number(prompt('Nhập năm: '))

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        if (day > 0 && day <= 31) {
            alert(`Ngày ${day}/${month}/${year} hợp lệ`)
            break;
        } else {
            alert(`Ngày ${day}/${month}/${year} không hợp lệ`)
            break;
        }
    case 4:
    case 6:
    case 9:
    case 11:
        if (day <= 30 && day > 0) {
            alert(`Ngày ${day}/${month}/${year} hợp lệ`)
            break;
        } else {
            alert(`Ngày ${day}/${month}/${year} không hợp lệ`)
            break;
        }
    case 2:
        if (day <= 28 && day > 0) {
            alert(`Ngày ${day}/${month}/${year} hợp lệ`)
            break;
        } else {
            alert(`Ngày ${day}/${month}/${year} không hợp lệ`)
            break;
        }
    default:
        alert(`Ngày ${day}/${month}/${year} không hợp lệ`)
        break;
}

// Link: http://bit.ly/3cvbdDZ