# Kiểu dữ liệu chuỗi

1. Tạo chuỗi

2. Một số case sử dụng backslash (\)

3. Xem độ dài chuỗi

4. Chú ý độ dài khi viết code

5. Template String ES6

6. Tìm kiểu thêm: `Javascript string methods`

# Làm việc với chuỗi

Các method của String được khởi tạo từ string constructor

1. Length

## `String.prototype.length`

2. Find Index

## `String.prototype.indexOf`, `String.prototype.lastIndexOf`, `String.prototype.search`

Phân biệt sự khác/giống nhau giữa 2 phương thức `indexOf` và `search`

Hàm indexOf () rất hữu ích, đặc biệt khi làm việc với một chuỗi con trong JavaScript. Hàm này trả về vị trí của lần xuất hiện đầu tiên của một giá trị đã cho trong một chuỗi. Nếu giá trị đó không được tìm thấy trong chuỗi, thì indexOf() sẽ trả về -1.

* Giống nhau
- Chấp nhân các đối số (tham số giống nhau)
- Cùng trả về 1 giá trị tìm thấy

* Khác nhau
- Phương thức search() không nhận đối số vị trí bắt đầu thứ hai.
- Phương thức indexOf() không thể nhận các giá trị tìm kiếm mạnh mẽ (biểu thức chính quy).

3. Cut String

## `String.prototype.slide`

Hàm slice(start, end) . `start` là tham số bắt buộc và chỉ định điểm bắt đầu của việc trích xuất chuỗi con. Tham số `end` là tùy chọn, nó chỉ định vị trí để dừng quá trình trích xuất. Ký tự được chỉ định bởi `end` không được bao gồm trong chuỗi con được trích xuất. Nếu bạn không cung cấp tham số `end`, tất cả các ký tự bắt đầu từ vị trí `start` sẽ được trích xuất từ chuỗi gốc như một phần của chuỗi con. Chúng ta có thể thấy rằng các hàm `slice`, `substring` và `substr` tất cả đều hoạt động theo cách rất giống nhau.

## `String.prototype.substring`

Tương tự hàm `slide` những khác là nó không nhận giá trị âm. Trường hợp đặc biệt là nếu truyền vào tham số start một gía trị âm thì nó trả về chuỗi ban đầu	

## `String.prototype.substr`

Hàm substr() sẽ tìm kiếm chính xác một chuỗi ký tự cụ thể từ chuỗi ban đầu dựa trên các tham số truyền vào ký tự bắt đầu và chiều dài ký tự, sau đó trả về chính xác chuỗi ký tự được tìm thấy. Tham số bắt đầu là nơi tìm kiếm chuỗi con bắt đầu và tham số chiều dài chỉ định số ký tự cần trích xuất. Nếu tham số chiều dài không được cung cấp, tất cả các ký tự từ vị trí bắt đầu sẽ được trích xuất. Nếu độ dài bằng 0 hoặc giá trị âm, thì substr() sẽ trả về một chuỗi rỗng. Ngoài substr(), bạn cũng có thể sử dụng các hàm `substring` và `slice` mà chúng ta cũng đề cập sau.

4. Replace

## `String.prototype.replace`

Hàm replace() trả về một chuỗi mới với các kết quả trùng khớp của chuỗi hoặc biểu thức chính quy được thay thế. Chuỗi ban đầu không thay đổi, chỉ có giá trị trả về được thay đổi

`g` 

Dùng để tìm kiếm và thay thế toàn bộ, tức là mọi ký tự được tìm thấy sẽ được thay thế. Nếu không sử dụng `g` thì chỉ có ký tự đầu tiên được tìm thấy là được thay thế

`i`

Không phân biệt chữ hoa hay chữ thường mà sẽ thay thế hết.

5. Convert String

## `String.prototype.toLowerCase` và `String.prototype.toUpperCase`

Chuyển 1 chuỗi thành in Hoa & Thường

6. Join String

## `String.prototype.concat`

7. Trim String

## `String.prototype.trim`

Loại bỏ khoảng trắng ở hai đầu của chuỗi 

8. Split

## `String.prototype.split`

Hàm chuyển một chuỗi thành một mảng theo định dạng cụ thể hoặc có thể căt thành từng thành phần trong mảng

9. Get a character by index

## `String.prototype.charAt`

Trả về ký tự tại một chỉ mục được chỉ định trong 1 chuỗi

## `String.prototype.charCodeAt`

Trả về vị trí unicode của ký tự tại vị trí đã cho trong chuỗi.

## `String.prototype.fromCharCode`

Hàm được sử dụng để tạo một chuỗi từ mã hóa Unicode

## `String.prototype.valueOf`

Hàm là một phương thức xây dựng JavaScript trong đối tượng String và trả về giá trị nguyên thủy của một đối tượng String như một kiểu dữ liệu chuỗi

## `String.prototype.match`

Hàm match () dùng để sử dụng các mẫu biểu thức chính quy, trả về 1 mảng 