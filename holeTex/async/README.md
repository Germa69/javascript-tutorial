# Khái niệm đồng bộ (synchronous) và bất đồng bộ (ansynchronous)

## `synchronous`

1. Thực hiện dòng lệnh tuần tự từ trên xuống dưới 
2. Tại 1 thời điểm chỉ thực thi được một dòng lệnh duy nhất

VD: Một func dựa trên kết quả của một func khác thì cần phải đợi cho func kia trả về kết quả thì nó mới thực hiện tiếp 

## `ansynchronous`

1. Trong hoạt động của bất đồng bộ thì có thể di chuyển sang một tác vụ khác để thực thi
2. Không cần phải chờ cho đến khi tác vụ hiện tại được thực thi xong
3. Giúp thực hiện nhiều tác vụ đồng thời nên có thể làm việc nhiều hơn trong một khoảng thời gian 

# Có 3 cách xử lý bất đồng bộ trong JS

## `Callback`, `Promise`, `Async - await`

# Đối với bất đồng bộ trong JS có 2 loại chính

## `Browser API` và `Web API`

1. setTimeout(), setInterval(), ...
2. Click, scroll, events, ...

## `Promises`

Là các đối tượng JS để thực hiện các tác vụ bất đồng bộ

# Callback

1. Function hoạt động giống như một Object
2. Truyền 1 func vào 1 func khác như là 1 tham số
3. Muốn trì hoãn thực thi một func nào đó và chờ cho đến khi 1 func khác được thực thi và trả về kết quả
4. Sau khi có dữ liệu trả về từ API thì nó thực hiện gọi callback 

Vấn đề phổ biến khi sử dụng callback đó là callback hell

# Promise

# Async / await

1. Đối với Async / await thì function mà chứa các promise thì luôn luôn phải chứa từ khóa `async` phía trước
2. Không thể sử dụng keyword `await` này ở phía cấp độ global, phải bọc nó trong 1 function và chứa từ khóa `async`
3. Phía trước mỗi promise thì có một `await`, nó sẽ đợi cho promise được resolve thành công
4. Một đoạn code bất đồng bộ nhưng hoạt động giống như code đồng bộ

