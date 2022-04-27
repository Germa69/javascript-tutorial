var app = {
    /* 
        TODO: In ra 1 mảng không trùng lặp
        ? input: ['a', 'b', 'c', 'd', 'a', 'a', 'c']
        ? output: ['a', 'b', 'c']
    */

    exercise(arr) {

        // C1: Dùng hàm filter
        // var result = arr.filter((item, index) => arr.indexOf(item) === index);
        // return result;

        // C2: Hàm Set
        var result = [...new Set(arr)];
        return result;
    },
};

var result = app.exercise(['a', 'b', 'c', 'd', 'a', 'a', 'c']);
console.log(result);

/* 
    TODO: Ứng dụng đếm ngược
    ? input: 10
    ? output: 10 -> 0
*/

function countDown (num) {
    if (num > 0) {
        console.log(num);
        return countDown(num - 1);
    }
    return num;
}

countDown(3);

/* 
    TODO: Vòng lặp bằng đệ quy
*/

function loop(start, end, callback) {
    if (start <= end) {
        callback(start);
        return loop(start + 1, end, callback);
    }
}

/* 
    BT1: Lặp qua phần tử mảng tìm ra chỉ số mảng
    ? input: ['Javascript', 'PHP', 'Ruby']
    ? output: 0 1 2
*/

var arr = ['Javascript', 'PHP', 'Ruby'];

loop(0, arr.length - 1, (index) => {
    console.log('index', index);
});

/* 
    BT2: Tính tổng của 1 mảng 
    ? input: [1, 2, 3]
    ? output: 6
*/

var arr1 = [1, 2, 3];
sum = 0;

loop(0, arr1.length - 1, (index) => {
    sum += arr1[index];
})

console.log(sum);

/* 
    BT3: Tính giai thừa bằng đệ quy
    ? input: 6
    ? output: 6 * 5 * 4 * 3 * 2 * 1 = 720
*/

// C1
function giaiThua (number) {
    var output = 1;

    for (var i = number; i > 0; i--) {
        output *= i;
    }

    return output;
}

// C2
function giaiThua (num) {
    if (num > 0) {
        return num * giaiThua(num - 1);
    }
    return 1;
}



var result = giaiThua(6);
console.log(result);