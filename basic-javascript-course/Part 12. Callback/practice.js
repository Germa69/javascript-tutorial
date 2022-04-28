
//TODO Ví dụ 1:
var people = [
    {
        name: 'Helga Brekke',
        age: 25,
        gender: 'f',
        us: true
    },
    {
        name: 'Christine Hansen',
        age: 18,
        gender: 'm',
        us: false,
    },
    {
        name: 'Alfred Roob',
        age: 17,
        gender: 'm',
        us: false,
    },
    {
        name: 'Crystal Hermann',
        age: 27,
        gender: 'm',
        us: false,
    },
    {
        name: 'Dax Koch',
        age: 22,
        gender: 'f',
        us: true
    }
];

// C1:
var women = people.filter(function(person) {
    //! chỉ trả lại đối tượng có gender === 'f'
    return person.gender === 'f';
});

// C2:
let women = peoples.filter((person) => person.gender === 'f');
console.table(women)

//TODO: Ví dụ 2:
function courseHandler(course, index){
    console.log(course)
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        originArray: courses
    };

    // return course.name;

    // return `<h2>${course.name}</h2>`;
}

var newCourses = courses.map(courseHandler)

// console.log(newCourses) 
console.log(newCourses.join('')) 

//TODO: Ví dụ 3:

var numbers = [100, 200, 220, 200, 480];

let totalCoin = numbers.reduce(function (total, number){
    return total + number
}, 0);

console.log(totalCoin) //! [L1/5: total = 0]

// let totalCoin = numbers.reduce(function (total, number){
//     return total + number
// });

// console.log(totalCoin) //! [L1/4: total = 100]


//TODO: Flat - "Làm phằng" mảng từ Depth array - "Mảng sâu": Quy tất cả phần tử riêng lẻ thành mảng cùng cấp
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var i =0;

var flatArray = depthArray.reduce(function (flatOutput, depthItem){

    i++;

    let flatjoin = flatOutput.concat(depthItem);

    console.table({
        'Lượt chạy: ': i,
        'Biến lưu trữ: ': flatOutput,
        'Mảng chưa làm phẳng': depthItem,
        'Mảng đã làm phằng': flatjoin
    })

    return flatjoin;

}, []);

console.log(flatArray);

//TODO: Lấy ra các khóa học đưa vào 1 mảng mới
var topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2,
                title: "JavaScript"
            }
        ]
    },
    {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: "NodeJS"
            }
        ]
    }
]

var newCourse = topics.reduce(function (course, topic){
    return course.concat(topic.courses)
}, []);

console.log(newCourse)

var html = newCourse.map(function (course){
    return `
        <div>
            <h2>${course.title}</h2>
            <p>${course.id}</p>
        </div>
    `
});

console.log(html.join('')) //! Đang trả về mảng chứa mã html