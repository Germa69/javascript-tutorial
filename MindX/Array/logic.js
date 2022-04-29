/**
  // TODO: Viết chương trình tìm giá trị lớn nhất/ nhỏ nhất của một mảng bất kì
*/

// var arr = [12, 31, 76, 15, 32, 18, 56, 80, 06, 55];
// console.log(arr);

// var max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//      if (max < arr[i]) {
//          max = arr[i]
//      }
// }

// console.log("Max là: " + max)

/**
  // TODO: Viết chương trình tìm giá trị nhỏ nhất của một mảng bất kì
*/

// var arr = [12, 31, 76, 15, 32, 18, 56, 80, 06, 55];
// console.log(arr);

// var min = arr[0];
//  for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//         min = arr[i]
//     }
// }

// console.log("Min là: " + min)

/**
  // TODO: Viết chương trình tính tổng bình phương của các số âm trong một mảng bất kì
*/

// var arr = [-12, 4, -23, -52, -40, 69, -10, 14];
// console.log(arr)

// var S = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         S += arr[i] * arr[i]
//     }
// }

// console.log("Tổng: " + S) // 144 + 529 + 2704 + 1600 + 100 = 5277

/**
  // TODO: Viết chương trình nhập vào một mảng gồm N số nguyên. Sắp xếp lại mảng theo thứ tự tăng dần
*/

// C1: 

// var arr = []; 
// var temp;      
// var n = Number(prompt('Nhập n phần tử'));    

// for (var i = 0; i < n; i++) {              
//   arr.push(Number(prompt('Nhập phần tử thứ: ' + (i+1)))); 
// }

// console.log(arr);

// // Sắp xếp theo thứ tự tăng dần
// for(i = 0; i < n-1; i++)
//   for(j = i+1; j < n; j++){
//     if(arr[i] > arr[j])
//     {
//         temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     } 
//   }

// console.log("Mảng sau khi sắp xếp: " + arr);

// C2: 

// var arr = []; 
// var temp;      


// do{ 
//   var n = Number(prompt('Nhập n phần tử')); 
//   for (var i = 0; i < n; i++) {              
//     arr.push(Number(prompt('Nhập phần tử thứ: ' + (i+1)))); 
//   }
// }while(n < 0)

// console.log(arr);

// for(i = 0; i < n-1; i++)
//   for(j = i+1; j < n; j++){
//     if(arr[i] > arr[j])
//     {
//         temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     } 
//   }

// console.log("Mảng sau khi sắp xếp: " + arr);

/**
  // TODO: Viết chương trình nhập vào một mảng A gồm N số nguyên và nhập thêm 1 số nguyên X. Hãy kiểm tra xem phần tử X có trong mảng A không?
  //! Áp dụng thuật toán linear Search
*/

// var arr = [];

// do{
//   var n = Number(prompt('Nhập n phần tử')); 
//   for (var i = 0; i < n; i++) {              
//     arr.push(Number(prompt('Nhập phần tử thứ: ' + (i+1)))); 
//   }
//   var x = Number(prompt('Nhập sỗ nguyên x'));
// }while(n < 0 && x < 0)

// console.log(arr);

// for(let i = 0; i <= arr.length; i++){
//   if(arr[i] == x){
//     console.log('Tìm thấy tại vị trí số: ' + i)
//   }
// }

/**
  // TODO: Nhập vào mảng A có N phần tử. Tìm phần tử xuất hiện nhiều nhất trong mảng
  // Ý tưởng:
    - B1: Khởi tạo mảng b[n] == {0}
    - B2: for(i=0 ; i<n; i++){
      for(j=i;j<n;j++){
        if(a[j] == a[i]){
          b[i] = b[i] + 1
        }
      }
    }
    - B3: Tìm phần tử max trong các phần tử b[i] và xuất ra a[i] tương ứng
*/


// var arr = [];
// var max = 0;
// var temp;
// var n, i, j;

// do {
//     n = Number(prompt('Nhập n phần tử'));
//     for (var i = 0; i < n; i++) {
//         arr.push(Number(prompt('Nhập phần tử thứ: ' + (i + 1))));
//     }
// } while (n < 0)

// console.log(arr);

// for (i = 0; i < n - 1; i++) // 2 1 3 5 4 => 2[i] => 1 3 5 4[j] 
//     for (j = i + 1; j < n; j++) {
//     if (arr[i] > arr[j]) {
//         temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
// }

// console.log("Mảng sau khi sắp xếp: " + arr);

// var max = 0;
// var dem;
// var b;

// for (i = 0; i < n; i++) {
//     dem = 1;
//     b = i;
//     for (j = i + 1; j < n; j++) {
//         if (arr[i] == arr[j]) {
//             dem++;
//             b++;
//         }
//     }
//     if (dem > max) {
//         max = dem;
//     }
//     i = b;
// }

// // console.log(max) //! 1 1 1 2 3 => 3

// var d = [];
// // console.log(d);
// var l = 0;
// var dem2;
// var c;

// for (i = 0; i < n; i++) {
//     dem2 = 1;
//     c = i;
//     for (j = i + 1; j < n; j++) {
//         if (arr[i] == arr[j]) {
//             dem2++;
//             c++;
//         }
//     }
//     if (dem2 == max) {
//         d[l] = arr[i];
//         l++;
//     }
//     i = c;
// }

// console.log('Vậy số lần xuất hiện nhiều nhất', max + " lần là: ")

// for (i = 0; i < n; i++) {
//     console.log(d[i]);
// }

/**ng số nguyên có N phần tử theo thứ tụ giảm dần và số M. Chèn số M vào mảng sao cho mảng vẫn có thứ tự giảm dần. In mảng sau khi chèn
  // TODO: Viết chương trình nhập vào một mả
*/

var arr = [];
var temp;
var i;

do {
    var n = Number(prompt('Nhập n phần tử'));
    for (i = 0; i < n; i++) {
        arr.push(Number(prompt('Nhập phần tử thứ: ' + (i + 1))));
    }
    var M = Number(prompt('Nhập sỗ cần chèn'));
    var pos = Number(prompt('Nhập vị trí cần chèn'));
} while (n < 0 && x < 0)

console.log(arr);

for (i = 0; i < n - 1; i++) {
    for (j = i + 1; j < n; j++) {
        if (arr[i] < arr[j]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log("Mảng sắp xếp theo thứ tự giảm dần: " + arr);

for (i = n; i >= pos; i--) {
    arr[i] = arr[i - 1];
}
arr[pos] = M;
n++;

for (i = 0; i < n - 1; i++) {
    for (j = i + 1; j < n; j++) {
        if (arr[i] < arr[j]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log("Mảng sau khi thêm vị trí M: " + arr);

/**
  // TODO: Nhập vào mảng 1 chiều gồm 1 dãy số nguyên N phần tử. Hãy xoá các phần tử trùng nhau trong mảng và in
  // Mô tả:
  function Xoa(a, n, vitrixoa){
    for(i = vitrixoa + 1; i < n; i++){
      a[i-1] = a[i];
    }
    n--; // Số lượng phần tử mảng giảm
  }

  // Xoá phần tử trùng 
  for(i = 0; i < n - 1; i++){ // phần tử của mảng a[i]
    // Vòng lặp duyệt các phần tử nằm sau a[i]. Nếu phía sau a[i] có phần tử a[j] trùng a[i] thì xoá ptu a[j] thì có nghĩa phần tử j
    for(j = i + 1; j < n; j++){
      if(a[i] == a[j]){
        Xoa(a, n, j);
        i--; // nếu không có i-- sẽ xảy ra lỗi gì?
      }
    }
  }
*/