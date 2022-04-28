/**
 *  - Object prototype
 *  - forEach2 là phương thức được định nghĩa trong array constructor
 * 
 *  - for..in: Không chỉ duyệt các element hiện hữu ở trong mảng mà nó còn duyệt luôn cả key có trong __proto__
 * 
 *  - Thực chất course là 1 array được khởi tạo từ array contructor thế nên nó được kế thừa lại những phương thức 
 *    định nghĩa sẵn nằm trong thằng prototype của array contructor thế nên mới dùng phương thức map
 */

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];

Array.prototype.forEach2 = function(callback) {
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            callback(this[i], i, this);
        }
    }
}

courses.forEach2(function (course, index, array) {
    console.log(course, index, array);
});