// TODO: JSON là gì ?

/**
 *  - Là một định dạng dữ liệu (chuỗi)
 *  - Được viết đầy dủ là JavaScript Object Notation   
 *  - Được thể hiện dưới dạng chuỗi
 *  - JSON: Number, String, Boolean, Null, Array, Object
 *  - Thể hiện chuỗi bằng dấu ""
 * 
 *  - Mã hóa / Giải mã
 *  - Encode / Decode
 *  - stringify: Từ JS types -> JSON
 *  - Parse: Từ JSON -> JS types
 */

// var json = ['JavaScript', 'PHP'];
var json = '["JavaScript", "PHP"]';

// console.log(JSON.stringify(json));
console.log(JSON.parse(json));

