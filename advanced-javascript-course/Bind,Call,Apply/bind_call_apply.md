## Bind
    - Rằng buộc từ khóa this trong hàm, các phương thức trở thành 1 đối tượng khác

# Đặc tính
    - Phương thức bind() sẽ trả về một hàm mới với this mới
    - Có thể nhận các đối số như hàm ban đầu

# Chú ý
    - Cho dù chính method tạo ra từ đối tượng nhưng mà chúng ta gán sang 1 biến khác 
    và chúng ta gọi biến đó không thông qua đối tượng thì từ khóa this trỏ về đối tượng window

    - console.dir(Function) -> Định nghĩa săn method bind() 
    - Tất cả các function được tạo ra trong JS thì method cũng là function thế nên function thông
    thường và phương thức trong 1 Object đều có thể kế thừa lại phương thức bind của Function Contructor

    - Sẽ tạo ra 1 vùng nhớ mới

# Tóm tắt
    - Phương thức bind() cho phép rằng buộc this cho một phương thức (function)
    - Phương thức bind() sẽ trả về một hàm mới với context được bind
    - Hàm được trả về từ bind() vẫn có thể nhận các đối số của hàm gốc


----------------------------------------------------------------------------------------------------------

## Call

- Fn.call() giúp gọi hàm và bind this tới đối tượng khác, mặc định this là window object
- Fn.call() không trả ra hàm mới, nó gọi luôn hàm sau khi bind this (Fn.bind() thì chỉ bind this nhưng không gọi hàm)
- Fn.call() dùng để mượn hàm - function borrowing
- Fn.call() có thể dùng để kế thừa properties & method từ 1 Constructor khác

## Kiến thức khác

- Khi gọi hàm không qua 1 đối tượng thì this nó trả về window khi chạy trên trình duyệt, trỏ về đối tượng global khi trỏ
về NodeJS
