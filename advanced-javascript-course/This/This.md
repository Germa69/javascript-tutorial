## Khái niệm

    - Hầu hết mọi trường hợp thì từ khóa this sẽ trỏ về đối tượng nó đang thuộc về

# Đối tượng là gì ?

# Đặc tính
    - Trong một phương thức, this tham chiếu tới đối tượng truy cập phương thức (đối tượng trước dấu .)
    - Đứng ngoài phương thức, this tham chiếu tới đối tượng global

# Cách nhận biết

    - Nhìn thằng nào chấm đến phương thức thì từ khóa this chính là thằng đó

## Lưu ý

    - This trong hàm tạo là đại diện cho đối tượng sẽ được tạo
    - This trong một hàm là undefined khi ở strict mode 
    - Các phương thức bind(), call(), apply() có thể tham chiếu this tới đối tượng khác
    - Function luôn tồn tại context (this) trừ arrow function