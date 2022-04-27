var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 400
    },
]

// C1
for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}

// C2
for (var i in courses) {
    console.log(courses[i]);
}

// C3
courses.forEach(course => {
    console.log(course);
})

//TODO: Tạo mới 1 phương thức
Array.prototype.forEach2 = function (callback) {
    for (const index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }

    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

//TODO: Kiểm tra sự đứng đắn
// var sports = new Array(100);

// sports.push(
//     {
//         id: 1,
//         title: 'Football',
//     },
//     {
//         id: 2,
//         name: 'Swimming',
//     },
// )


// sports.forEach2(function(sport, index, array) {
//     console.log(index, sport, array);
// })