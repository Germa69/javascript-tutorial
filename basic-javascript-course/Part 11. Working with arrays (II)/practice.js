// //TODO: Tìm ra các giá trị bằng nhau giữa hai array.

// var arr1 = [1, 2, 6, 8];  // 0 1 2 3 4 5 
// var arr2 = [2, 9, 6];  // 1 2 3 2 9 6

// //? C1: 
// var arr3 = arr1.concat(arr2);
// var result = arr3.filter(function(value, index) {
//     console.log(index);
//     return arr3.indexOf(value) !== index;
// })

// console.log(result);

// //? C2: Không tối ưu chỉ đúng 1 trường hợp
// var result = [];
// arr1.forEach(function(value1) {
//     arr2.forEach(function(value2) {
//         if(value1 == value2) {
//             result.push(value1);
//         }
//     });
// });

// console.log(result);

// //? C3: Không tối ưu chỉ đúng 1 trường hợp
// var arr=[];

// for (i of arr1){
//     for (j of arr2) {
//         i===j ? arr.push(i) : arr
//     }
// }
// console.log(arr);

// //TODO: Cho biến numbers là một mảng chứa các giá trị số bất kì. Trong hàm cho trước, hãy trả về tổng của toàn bộ giá trị của các phần tử trong mảng numbers.
// var numbers = [1, 2, 3, 4];

// //? C1
// var sum = 0;
// for (const number of numbers) {
//     sum+=number;
// }

// console.log(sum); 

// //? - C2:
// var number = numbers.reduce((a, b) => a + b, 0);
// console.log(number);

// //TODO: Cho biến inputs là một mảng chứa các giá trị có thể là bất kì kiểu dữ liệu nào. Trong hàm cho trước, hãy trả về tổng của toàn bộ giá trị số hợp lệ của các phần tử trong mảng inputs.
// var inputs = [1, 2, function() {}, NaN, 6, 'hi', 11];

// //? C1:
// var output = inputs.reduce(function(total, currentValue) {
//     if(typeof currentValue === 'number' && isNaN(currentValue) === false) {
//         //? console.log('current value: ', currentValue,' |is integer: ',   Number.isInteger(currentValue));
//         return total + currentValue;
//     }else {
//         return total + 0;
//     }
// }, 0);

// //? C2:
// var output = inputs.reduce((GTKT, GTHH) => (typeof GTHH === 'number' && isNaN(GTHH) === false) ? GTKT + GTHH : GTKT + 0, 0);
// console.log(output);

// //TODO: Thêm phương thức reduce2 cho kiểu mảng, logic hoạt động tương tự reduce gốc.

// Array.prototype.reduce2 = function (callback, initValue) {
//     result = initValue ? initValue : 0
//     for(let i = 0; i < this.length; i++) {
//         result = callback(result, this[i], i, this);
//     }
//     return result
// }

// //TODO: Làm phẳng mảng từ Depth array - "Mảng sâu" => Thuật ngữ flat

// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
//     return flatOutput.concat(depthItem);
// }, []);

// console.log(flatArray);

//TODO: Lấy ra các khóa học đưa vào 1 mảng mới

var topics = [
    {
        topic: 'Frontend',
        courses: [
            {
                id: 1,
                title: 'HTML & CSS'
            },
            {   
                id: 2,
                title: 'JavaScript',
            }
        ]
    },
    {
        topic: 'Backend',
        courses: [
            {
                id: 1,
                title: 'PHP'
            },
            {
                id: 2,
                title: 'NodeJS'
            }
        ]
    }
];

var newCourses = topics.reduce(function(courses, topic) {
    return courses.concat(topic.courses);
}, []);

console.log(newCourses);

var htmls = newCourses.map(function(course) {
    return `
        <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>
        </div>
    `;
})

console.log(htmls.join(''));