# Kiểu dữ liệu số

Trong Javascript có 2 loại số:

+ Các số thông thường trong Javascript được lưu trữ dưới dạng 64 bit IEEE-754 (còn được gọi là các số phẩy động). Trong hầu hết các trường hợp khi làm việc với Javascript là chúng ta sử dụng loại số này.

+ Số BigInt là loại số sử dụng để biểu thị số nguyên có độ dài tùy ý.

1. Tạo ra các giá trị Number

2. To String / To Fixed

# Làm việc với số

Đối tượng Number trong Javascript là đối tượng giúp chúng ta định nghĩa số và làm việc với số. Chúng ta thường sử dụng các phương thức sau của đối tượng Number khi làm việc với số trong Javascript:

## `Number.isFinite()`

Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean

## `Number.isInteger()`

Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean

## `Number.parseFloat()`

Chuyển đổi chuỗi đã cho thành một số dấu phẩy động

## `Number.parseInt()`

Chuyển đổi chuỗi đã cho thành một số nguyên

## `Number.prototype.toFixed()`

Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân

## `Number.prototype.toString()`

Chuyển đổi và trả về số đã cho dưới dạng chuỗi