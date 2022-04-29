/**
 *  1. LocalStorage là gì ?
 *  2. Hạn chế của LocalStorage
 *  3. Kiểm tra LocalStorage
 *  4. Sử dụng LocalStorage với JavaScript
 */

1. Local Storage là gì ?
    - Là một loại lưu trữ cho phép các trang web và ứng dụng javascript lưu trữ và truy cập dữ liệu ngay trong trình duyệt
    mà không có timeout.
    - Dữ liệu được lưu trữ trong trình duyệt sẽ tồn tại ngay cả sau khi cửa sổ trình duyệt bị đóng
    - Dữ liệu chỉ mất khi clear lịch sử trình duyệt, hoặc sử dụng LocalStorage API để xóa

2. Hạn chế của LocalStorage
    - Lưu trữ trong trình duyệt người dùng (Không lưu trên server)
    - Mỗi trang web có 1 localStorage riêng và không thể truy cập đến localStorage khác
    - Sẽ bị một số lỗi bảo mật mà hacker có thể tận dụng để lấy dữ liệu của người dùng

3. Kiểm tra LocalStorage

    - if (storageAvailable('localStorage')) {
        // Trình duyệt này hỗ trợ LocalStorage
    } else {
        // trình duyệt không hỗ trợ LocalStorage
    }

4. Sử dụng LocalStorage với JavaScript

## setItem()
    - Để gán 1 biến nào đó vào LocalStorage:

    -----------------------------------------------
    | window.localStorage.setItem('key', 'value') |
    -----------------------------------------------

    - Với key là tên biến để ta truy xuất và value là giá trị biến truyền vào.
    - Chỉ cho phép chúng ta lưu biến với kiểu String, vì vậy để lưu 
    Object và Array thì ta phải convert sang JSON:

    ----------------------------------------------------
    | localStorage.setItem(key, JSON.stringify(value)) | 
    ----------------------------------------------------

    - Khi cần sử dụng chỉ cần JSON.parse() để convert về giá trị ban đầu

## getItem()
    - Để lấy ra được dữ liệu trong localStorage của trình duyệt ta dùng method:

    ---------------------------------------
    | window.localStorage.getItem('key'); | 
    ---------------------------------------

## removeItem()
    - Để xóa 1 item khỏi localStorage ta sẽ sử dụng method:

    -----------------------------------------
    | window.localStorage.removeItem('key') | 
    -----------------------------------------   

## clear()
    - Để xóa toàn bộ các dữ liệu trong LocalStorage của domain hiện tại

    --------------------------------
    | window.localStorage.clear(); | 
    -------------------------------- 