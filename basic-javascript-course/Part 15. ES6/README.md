* Khái niệm
    - ECMAScript được tạo ra bởi ECMA International
    - Nó là một tiêu chuẩn trong JavaScript

* Những tính năng nổi bật của ES6 (ECMAScript 6 - 2015)

- 1. Let, const --> OK
    + Var / Let, Const
        + Scope:
            . Var: Có thể truy cập ngoài scope
            . Let, Const: Chỉ truy cập trong scope của nó
        + Hosting: Là một khái niệm đưa lên đầu
    + Const / Var, Let
        + Assignment

- 2. Template Literals --> OK

- 3. Multi-line String --> OK

- 4. Arrow function --> OK
    + Mục đích: Viết ngắn gọn hơn
    + Khi viết code mà không dùng {} thì nó hiểu là return 
    + Không có context của nó
    + Không thể sử dụng nó làm Function Contructor được

- 5. Classes --> OK
    + Cách viết khác của Contructor function
    + Là bản khuôn mẫu để thiết kế 1 đối tượng có thuộc tính

    + Trong class có 1 khái niệm constructor

- 6. Default parameter values --> OK
    + Định nghĩa ra 1 hàm và biết được hàm đó có những tham số không bắt buộc phải nhập
    + Thường sau tham sô thứ nhất 

- 7. Destructuring 
    - Phân rã: Sử dụng với Object và Array
        + Array:
            + Giúp lấy trực tiếp các element ở bên trong
        + Object:
            + Đổi tên 1 element dùng dấu ':'
            + Lấy ra 1 value nhưng nó không được định nghĩa

- 8. Rest parameters
    - Lấy ra những phần còn lại
    - Phân biệt khi nào toán tử rest và khi nào là toán tử spread:
        + rest:
            + Khi nó sử dụng kết hợp với destructuring
            + Khi nó sủ dụng kết hợp với function định nghĩa ra 1 tham số
                + Khi sử dụng rest là 1 tham số thì nó trả về 1 mảng
            + Khi nó sử dụng  kết hợp với function định nghĩa ra 1 tham số (obj) thì nó trả lại obj

- 9. Spread (giải)
    + Khi giải trước 1 thằng array, object thì sẽ bỏ đi dấu '[]' array hay '{}' object, 
    lúc đó chỉ còn phần tử đứng bên trong 
    + Hợp nhất 2 mảng || 2 obj
    + Sử dụng truyền đối số cho hàm
    !Chú ý: Nếu TH đặt trùng key của obj thì nó lấy key được định nghĩa sau

- 10. Enhanced object literals --> OK
    + Định nghĩa key : value cho object ngắn gọn hơn
    + Định nghĩa method cho object 
    + Định nghĩa key cho object dưới dạng biến 
        + Tùy vào giá trị của biến để lấy ra key tương ứng của 1 obj

- 11. Tagged template literal
    + Sử dụng 1 function mà gọi đến function đó qua cú pháp template literal
    
- 12. Modules
    + Là tư tưởng khi chúng ta bóc tách 1 thành phần xử lý 1 nhiệm vụ cụ thể sang 1 nơi riêng
    + Có khái niệm: Import và Export
        + Export ra cái j thì Import được cái đó

    + 1 file lưu biến -> export đên 1 file function cho 1 chức năng -> export đến 1 file "tổng quát" danh sách function -> export 1 file app.js chính.
        + export: có nhiều cách, trước nhớ mỗi 2 cách: export { } và export default
        + import: chỉ cần nhớ import (function) from (đường dẫn).
        mẹo: khi sử dụng file app.js, nếu chọn [tên biến] được viết bên file js trước, thì VSCode sẽ tự động thêm link import biến đó vào.

    + Khi mà import mà không phải destructuring thì nó đang export default và ngược lại
    + Mỗi file chỉ được export default 1 lần và co thể export const nhiều lần 

    * THĐB: 
        - Muốn import mà không muốn dùng destructuring thì sử dụng cú pháp: -> là 1 object
            import * as Alias from '...'

- 13. Optional chaining (?.) 
    + Sử dụng khi chưa chắc chắn key đó có tồn tại hay không

* Babals: Giúp chuyển hóa ES6 -> ES5 -> mọi trình duyệt web đọc được