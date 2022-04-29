// TODO: Value types
// const a = 5   //! D1
// const b = a   //! D2
// a = 4         //! D3

// console.log(b);

/**
 *  - Phân tích:
 *      + D1: Với const a = 5: Tạo ra biến a, cấp một ô nhớ, lưu 5 vào ô nhớ
 *      + D2: Với const b = a: Tạo ra biến b, cấp một ô nhớ khác, sao chép giá trị của a và tạo ô nhớ mới
 *      + D3: Với a = 4: Sửa giá trị trong ô nhớ a thành 4
 *  - Chú ý: 
 *      + Kiểu value types là nó đang lưu cái giá trị gán cho biến nó
 */

// TODO: Reference types (Trả về địa chỉ vùng nhớ)
// const a = { 
//     name: 'Mercedes'    //! D1
// }

// const b = a             //! D2

// a.name = 'BMW'          //! D3

/**
 *  - Phân tích:    
 *      + D1: Với const a { name: 'Mercedes } : Tạo biến a, cấp một ô nhớ, lưu { name: 'Mercedes'} vào ô nhớ
 *            trả về địa chỉ đã lưu và gán cho biến a
 *      + D2: Với const b = a : Tạo biến b, trỏ biến b tới cùng địa chỉ ô nhớ của biến a
 *      + D3: Với a.name = 'BMW' : Sửa giá trị của key name trong ô nhớ thành 'BWM'
 * 
 *  - Chú ý:
 *      + Sau khi lưu vào ô nhớ thì giá trị của biến a không phải là giá trị được lưu vào ô nhớ mà sau khi lưu
 *        vào ô nhớ thì nó có 1 địa chỉ cụ thể. Trả lại địa chỉ lưu Obj vừa tạo ra.
 * 
 *  - VD:
 *      Biến         Giá trị          Địa chỉ                  Ô nhớ                 
 *        a           <#001>            #001             { name: 'Mercedes' }         (D1)
 * 
 *        a           <#001>            #001             { name: 'Mercedes' }         (D2)
 *        b           <#001>
 *        
 *        a           <#001>            #001             { name: 'BWM' }               (D3)  
 *        b           <#001>
 */

// TODO: Một số ví dụ

let a = {
    name: 'Mercedes'
}

a = {
    name: 'BMW',
    model: 'i8'
}

/**
 *  - Lưu ý:
 *      + Khi 1 biến được gán lại bằng 1 Obj mới thì Obj, array, func mới luôn luôn là 1 vùng nhớ mới được tạo ra
 * 
 * - VD:
 *      Biến         Giá trị          Địa chỉ                  Ô nhớ                 
 *        a           <#002>            #001             { name: 'Mercedes' }                (D1)
 * 
 *                                      #002             { name: 'BmW', model: 'i8 }         (D2)
 */

// TODO: Trường hợp Object chứa 1 Object con

const student = {
    name: 'Nguyễn Đức Anh',
    profile: {
        firstName: 'Nguyễn',
        middleName: 'Đức',
        lastName: 'Anh',
        introduction: 'Boy'
    }
}


/**
 *  - Phân tích:
 *      + Student đang lưu địa chỉ ô nhớ của Object đã gán cho nó
 *      + Key profile trong Object nên cũng đang lưu địa chỉ ô nhớ của Object đã gán cho nó  
 * 
 *  - Lưu ý:
 *      + Object sẽ được lưu trữ tại 1 vùng nhớ khác nhau 
 * 
 *  - VD: 
 *      Biến         Giá trị          Địa chỉ                  Ô nhớ      
 *                                      #001                 { firstName: 'Nguyễn', middleName: 'Đức', lastName: 'Anh', 
 *                                                             introduction: 'Boy'} 
 *    student        <#002>             #002                 { name: 'Nguyễn Đức Anh', profile: <#001> }
 *           
 */

// TODO: Data types with function
//! VD1
// function sum (a, b) {
//     a = 0;
//     b = 0;
//     console.log(a, b);
// }

// const c = 1
// const d = 2

// sum(c, d)
// console.log(c, d);

//! VD2
// function func(obj) {
    //! let obj = object
//     obj.name = 'Porcher'
//     console.log(obj)
// }

// const object = {
//     name: 'BMW'
// }

// func(object)

// console.log(object);

//! VD3

function createCar (obj) {
    // obj = JSON.parse(JSON.stringify(obj));
    obj = {...obj} // Chỉ sử dụng khi có 1 cấp obj mà thôi
    obj.name = 'Mercedes'
    return obj
}

const car = {
    name: 'BMW',
}

const newCar = createCar(car)

console.log(car);
console.log(newCar);

//! VD4

const v1 = {
    name: 'BWM'
}

const v2 = {
    name: 'BWM'
}

console.log(v1 === v2);

//! VD5

const v3 = {
    name: 'BWM'
}

v3.name = 'VM'
console.log(v3);


//! VD6

