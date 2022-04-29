/**
  // TODO: B1: Declare a variable named movie with an object value, containing the following properties:
    - title, For example: ‘The dark night rises’
    - year, For example: 2012
    - rate, For example: 8.4
*/

var movie = {
    title: 'The dark night rises',
    year: 2012,
    rate: 8.4,
}

console.log(movie['title']) //! Lấy giá trị của thuộc tính
var i = 1;
for (let film in movie) {
    console.log(`${i++}.${film} = ${movie[film]}`);
}
console.log('------------------------------------')

/**
  // TODO: B2: Log all of 3 the properties of the movie object to the console using 2 different ways
*/

console.log("C1: \n" + movie.title)
console.log(movie.year)
console.log(movie.rate + "\n\n")

console.log("C2: \n" + movie['title'])
console.log(movie['year'])
console.log(movie['rate'])

let nhap = prompt('What do you want to know?')
if (nhap == null || nhap == undefined) {
    console.log(`${nhap} does not exist in our data`)
    alert(`${nhap} does not exist in our data`)
} else {
    console.log(movie[nhap])
    alert(movie[nhap])
}
console.log('------------------------------------')

/**
  // TODO: B3: Update (after 10):
*/

movie.rate = 8.7;
movie.rate += 0.5;

console.log(movie)

var nhapKey = prompt('What you want to update?')
let nhapValue = prompt('What is the update?')
let nhapValueNumber = Number(nhapValue)
let nhapValueString = String(nhapValue)

if (nhapValueNumber) {
    movie[nhapKey] = Number(nhapValueNumber)
} else if (nhapValueString) {
    movie[nhapKey] = String(nhapValueString)
}
console.log(movie)
console.log('------------------------------------')

/**
  // TODO: B4: Update (after 11): Nâng cấp Cập nhật để kiểm tra xem thuộc tính do người dùng nhập có tồn tại hay không? 
*/

console.log(movie)

var nhapKey = prompt('What you want to update?')

if (nhapKey === null || nhapKey === undefined || nhapKey === '') {
    alert('Please fill in the information!')
} else if (movie[nhapKey]) {
    let updateValueData = prompt('Enter data update: ');
    let updateValueNumberData = Number(updateValueData)
    let updateValueStringData = Number(updateValueData)

    if (updateValueNumberData) {
        movie[nhapKey] = Number(updateValueNumberData)
    } else if (updateValueStringData) {
        movie[nhapKey] = String(updateValueStringData)
    }

    console.log(movie)
} else {
    console.log(`${nhapKey} does not exist in our data`);

    let insertValueData = prompt('Enter the new data: ');
    let insertValueNumberData = Number(insertValueData)
    let insertValueStringData = String(insertValueData)

    if (insertValueNumberData) {
        movie[nhapKey] = Number(insertValueData)
    } else if (insertValueStringData) {
        movie[nhapKey] = String(insertValueData)
    }

    console.log(movie)
}

/**
  // TODO: B5: Array of Objects (after 4)
   - Tạo một mảng gọi là phim, chứa ít nhất 3 dữ liệu phim có cấu trúc giống nhau, đều có tiêu đề, năm và tỷ lệ (có thể thêm thuộc tính nếu muốn)
   - In hoặc đăng xuất phim đầu tiên khỏi danh sách phim
   - In hoặc đăng xuất tiêu đề của bộ phim cuối cùng khỏi danh sách phim
   - Sử dụng vòng lặp để in hoặc đăng xuất tất cả phim trong danh sách phim
   - Sử dụng vòng lặp để in hoặc đăng xuất tất cả phim trong danh sách phim, dữ liệu được kiểm duyệt như sau 
*/

var movies = [{
        title: 'Attack on titans',
        year: 2013,
        rate: 8.8,
    },
    {
        title: 'My boss my hero',
        year: 2006,
        rate: 8.2,
    },
    {
        title: 'Mind hunter',
        year: 2017,
        rate: 8.6,
    },
    {
        title: 'Manhunt: Unabomber',
        year: 2017,
        rate: 8.1,
    }
]

console.log("* Mảng khởi tạo: ")
console.log(movies)

//!Print first movie:

console.log("* In ra đối tượng đầu tiên trong mảng: ")
console.log(movies[0])

//! Print last movies with title:

console.log("* In ra đối tượng cuối cùng trong mảng: ")
let lastMovie = movies[movies.length - 1];
console.log(lastMovie);
console.log(lastMovie.title);

//! Use loop print all movies:

console.log("* In ra tất cả đối tượng của phim: ")
for (let mv in movies) {
    console.log(movies[mv])
}

//! Use a loop to print all movie in movie list, the date is prettified:

for (let i = 0; i < movies.length; i++) {
    console.log(movies[i].title);
    console.log(`Year: ${movies[i].year}`);
    console.log(`Rate: ${movies[i].rate}`);
    console.log('------------');
}
console.log("* In ra tất cả đối tượng của phim theo cấu trúc: ")

for (let mv in movies) {
    console.log('-----------------');
    console.log(movies[mv].title);
    console.log(`Year: ${movies[mv].year}`)
    console.log(`Rate: ${movies[mv].rate}`)
}
console.log('-----------------');

//! Increase the rate of the last movie in the movies list by 0.7

lastMovie.rate += 0.7;
console.log(lastMovie.rate)

for (let i = 0; i < movies.length; i++) {
    if (movies[i] == movies[movies.length - 1]) {
        console.log('-----------------');
        console.log(movies[i].title);
        console.log(`Year: ${movies[i].year}`)
        console.log(`Rate: ${movies[i].rate + 0.7}`)
    } else {
        console.log('-----------------');
        console.log(movies[i].title);
        console.log(`Year: ${movies[i].year}`)
        console.log(`Rate:  ${movies[i].rate}`)
    }
}

/**
  // TODO: B6: Đối tượng chứa mảng
  - Tạo một đối tượng có tên phim, với tiêu đề, năm và tỷ lệ và các ký tự. Các nhân vật có ít nhất 3 nhân vật của phim
  - In hoặc đăng xuất dữ liệu phim ở định dạng sau (Lưu ý, hãy nhớ toán tử lây lan… để ghi nhanh một mảng): 
*/

//! Create object

var movieAttackOnTitans = {
    title: "Attack on titans",
    year: 2013,
    rate: 8.8,
    casts: ['Eren', 'Armin', 'Mikasa']
}
console.log(movieAttackOnTitans)
console.log('--------------------------------------------------------------------');

// //! Display object

for (let i = 0; i < 1; i++) {
    console.log(movieAttackOnTitans.title);
    console.log(`Year: ${movieAttackOnTitans.year}`)
    console.log(`Rate: ${movieAttackOnTitans.rate}`)
    console.log(`Casts: ${movieAttackOnTitans.casts.join(' ')}`)
}
console.log('--------------------------------------------------------------------');
C2:
    for (let mv in movieAttackOnTitans) {
        console.log(`${mv} ${movieAttackOnTitans[mv]}`);
    }

//! Add new cast to the movie and then log it back

movieAttackOnTitans.casts.push('Levi');

for (let i = 0; i < 1; i++) {
    console.log(movieAttackOnTitans.title);
    console.log(`Year: ${movieAttackOnTitans.year}`)
    console.log(`Rate: ${movieAttackOnTitans.rate}`)
    console.log(`Casts: ${movieAttackOnTitans.casts.join(' ')}`)
}
console.log('--------------------------------------------------------------------');

/**
  // TODO: B7: Cấu trúc kết hợp đối tượng và mảng
  - Tạo một mảng có tên phim, chứa ít nhất ba phim, tất cả đều có thuộc tính tiêu đề, năm, tỷ lệ và ký tự
  - Ví dụ: ghi hoặc in tất cả các phim trong mảng phim 
*/

var movies = [{
        title: 'Attack on titans',
        year: 2013,
        rate: 8.8,
        casts: ['Eren', 'Armin', 'Mikasa']
    },
    {
        title: 'Mind hunter',
        year: 2017,
        rate: 8.6,
        casts: ['Holden', 'Bill']
    },
    {
        title: 'Manhunt: Unabomber',
        year: 2017,
        rate: 8.1,
        casts: ['Ted']
    }
]

for (let mv in movies) {
    console.log('-----------------');
    console.log(movies[mv].title);
    console.log(`Year: ${movies[mv].year}`)
    console.log(`Rate: ${movies[mv].rate}`)
    console.log(`Casts: ${movies[mv].casts.join(' ')}`)
}