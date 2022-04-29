// TODO: Closure
// function makeCouter () {
//     let count = 0;

//     function increment() {
//         return ++count;
//     }

//     return increment;
// }
    
// const couter = makeCouter();

// console.log(couter());
// console.log(couter());
// console.log(couter());

//  NOTE: 
//   - couter chính là hàm increment được return ở bên trong
//   - increment được tạo ra khi gọi hàm makeCouter
//   - Tham chiếu biến count ra bên ngoài

// TODO: Ứng dụng 1: Xây dựng ra cách log ngắn gọn hơn

// function createLogger (namespace) {
//     function logger (message) {
//         console.log(`[${namespace}] ${message}`);
//     }

//     return logger;
// }

// const infoLogger = createLogger('Info');
// infoLogger('Thanh toán chưa thành công')
// infoLogger('Chú ý hơn về lời nói')

// TODO: Ứng dụng 2: Ứng dụng lưu trữ storage với closure

// function createStorage (key) {
//     const store = JSON.parse(localStorage.getItem(key)) ?? {};

//     const save = () => {
//         localStorage.setItem(key, JSON.stringify(store))
//     }

//     const storage = {
//         get(key) {
//             return store[key];
//         },
//         set(key, value) {
//             store[key] = value;
//             save()
//         },
//         remove(key) {
//             delete store[key];
//             save()
//         }
//     }

//     return storage;
// }

// const profileSetting = createStorage('profile_setting');

// profileSetting.set('fullname', 'Nguyễn Đức Anh')

// profileSetting.remove('fullname')
// console.log(profileSetting.get('fullname'));

// TODO: Ứng dụng 3: Ứng dụng lưu trữ storage với closure

function createStudent() {
    const cars = [];

    return {
        add(car) {
            cars.push(car);
        }, 
        show () {
            console.log(cars);
        }
    }
}

const students = createStudent();
students.add('Nguyễn Đức Anh');
students.show();