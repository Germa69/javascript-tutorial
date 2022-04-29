// function Course (name, price) {
//     this.name = name;
//     this.price = price;

//     this.getName = function () {
//         return this.name;
//     }

//     //! Xử lý rất nhiều biến
// }

class Course {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }

    getName () { return this.name; }

    getPrice () { return this.price; }
}

const phpCourse = new Course('PHP', 100000);
const jsCourse = new Course('JS', 200000);

console.log(phpCourse.getName());
console.log(jsCourse);