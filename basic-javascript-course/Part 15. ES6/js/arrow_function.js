// Declaration Function
// function logger (log) {
//     console.log(log);
// }

// Expression Function
// var logger = function (log) {
//     console.log(log);
// }

// Arrow Function

var logger = (log) => {
    console.log(log);
}

logger('Message...')


var course = {
    name: 'JavaScript',
    getName: function () {
        return this.name; //! this ~ course
    }
}

console.log(course.getName()); //! JavaScript


const Course = (name, price) => {
    this.name = name;
    this.price = price;
}

const jsCourse = new Course('JavaScript', 250000);

console.log(jsCourse); //! Course is not a constructor