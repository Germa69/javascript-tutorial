# Scope   

- Các loại phạm vi:
    - Global      - Toàn cục
    - Code Block  - Khối mã: let, const
    - Local scope - Hàm: var, function

- Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo        
- Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó
- Cách thức một biến được truy cập
- Khi nào một biến bị xóa khỏi bộ nhớ ? - Life cycle
    - Biến toàn cầu ?
        + Khi thoát tab hay F5 lại trang
    - Biến trong code Block & trong Hàm ?
        + Khi thực thi xong tự xóa biến thuộc phạm vi của hàm khỏi bộ nhớ
    - Biến trong hàm được tham chiếu bởi 1 hàm ?

    
## Tóm tắt

- Global: Sẽ tạo ra khi khai báo 1 biến & hàm không nằm trong bất cứ 1 phạm vi nào khác và có thể
truy cập tất cả mọi nơi tính từ khi biến toàn cầu được tạo ra.

- Code Block: Chỉ có tác dụng với từ khóa let, const, những biến này ngoài khối không thể truy cập được

- Local Scope: Sẽ tạo ra phạm vi hàm khi hàm ấy được gọi, những biến và thân thuộc phạm vi hàm và không truy cập được ở 
phạm vi bên ngoài   