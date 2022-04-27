# Mảng

1. Tạo mảng

- Cách tạo
- Sử dụng cách nào? Tại sao?
- Kiểm tra data type?

2. Truy xuất mảng

- Độ dài mảng
- Lấy phần tử theo index

* Note:

- Mảng thì chỉ mục được đánh tự động và bắt đầu bằng số 0
- Mảng có thể chứa tất cả kiểu dữ liệu
- Nếu dùng từ khóa new để tạo mảng thì sẽ sinh ra instant làm code chậm đi

# Làm việc với mảng

## `Array.prototype.toString`

Chuyển đổi một mảng thành một chuỗi các giá trị mảng (Không thể thay thế dấu phẩy).

## `Array.prototype.join`

Chuyển đổi một mảng thành một chuỗi các giá trị mảng (Có thể phân tách bằng dấu phẩy).

## `Array.prototype.pop`

Xóa element cuối mảng và trả về phần tử đã xóa
* Note: Nếu mà xóa khi không có phần tử trong mảng => undefined

## `Array.prototype.push`

Thêm một hoặc nhiều các element vào cuối mảng và trả về độ dài mới của mảng 

## `Array.prototype.shift`

Xóa element đầu mảng và trả về phần tử đã xóa

## `Array.prototype.unshift`

Thêm một hoặc nhiều các element vào đầu mảng và trả về độ dài mới của mảng 

## `Array.prototype.splice`

Có thể xóa, cắt, chèn cả phần tử mới vào mảng
Xóa: Tham số thứ nhất quyết định đặt con trỏ vào đâu, con trỏ thứ hai là xóa đi mấy phần tử
Thêm: Tham số thứ nhất quyết định đặt con trỏ vào đâu, con trỏ thứ hai là thêm mấy phần tử, tham số 3 là tên phần tử muốn thêm

/**
  //! Syntax: arr.splice(index, howmany, item1, ....., itemX)
  - Trong đó:
    +> arr là tên biến mảng
    +> index là vị trí mà các bạn muốn thêm vào
    +> howmany là số phần tử sẽ xóa tính tự vị trí thêm mảng, để 0 nếu không muốn xóa phẩn tử nào
    +> item1, ...,itemX là giá trị của các phần tử muốn thêm vào

*/

## `Array.prototype.concat`

Nối mảng

## `Array.prototype.slice`

Cắt 1 vài element của mảng

## `Array.prototype.includes`

