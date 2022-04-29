* Callback và callback hell

    - Callback: Thỏa mãn 2 điều kiện sau:
        + Nó là một hàm (function)
        + Nó là đối số cho một hàm khác

    - Callback có lợi ích gì?  
        + Callback được thực thi bên trong một hàm khác. Điều này giúp chúng ta thực hiện một chuỗi các hành động liên tiếp nhau
        + Xử lý sự kiện 
        + Vì sao không định nghĩa chức năng đó ngay bên trong hàm luôn mà lại đi dùng callback ?
            + Vì callback được truyền vào hàm như một tham số, tăng tính linh động, ...
        + Callback thường được dùng trong các methods của các Object, array như các phương thức map, reduce, find, ...

    - Callback hell là gì?
        + Là hiện tượng một chuỗi các callback được lồng vào nhau liên tiếp
        + Dẫn đến việc khó theo dõi và debug code

* Promise

    - Được ra đời để giải quyết vấn đề Callback hell => giúp dễ dàng xử lý bất đồng bộ trở nên dễ dàng hơn khi sd callback

    - Sync (Synchronous): 
        + Đồng bộ là thằng nào viết trước chạy trước, thằng nào viết sau chạy sau
        + Tư tưởng: Chạy theo luồng đồng bộ

    - Async (Asynchronous):
        + Bất đồng bộ là xử lý không theo quy trình cụ thể
        + Những hàm bất đồng bộ thường gặp:
            . setTimeout, setInterval
            . fetch
            . XMLRequestHTTP
            . file reading
            . request animation frame

    - Nỗi đau (Pain):
        + Callback hell
        + Pyramid of doom

    - Lý thuyết, cơ chế hoạt động
        + Khởi tạo một promise thông qua từ khóa new => new Promise()
        + Một promise nhận vào một hàm (executor) với 2 tham số cũng là 2 hàm là resolve vả reject
            . Resolve dùng để trả dữ liệu về khi xử lý logic thành công
            . Reject dùng để trả lỗi khi thất bại
        + Trả lại 3 phương thức:
            
            callback ~ function () {

            }

            .then(callback): Khi thằng resolve được gọi thì thằng callback .then sẽ được gọi
            .catch(callback): Khi thằng reject được gọi thì thằng .catch sẽ được gọi
            .finally(callback): Một trong 2 thằng được gọi thì thằng .finally đều được gọi

        + Ý nghĩa: 
            - Promise sinh ra giải quyết 1 vấn đề j đó trong quá trình lập trình bất đồng bộ

        + Trạng thái:
            - Pending: Chờ việc trả về thành công hay thất bại => Memory leak
            - fulfilled: Trả về thành công
            - rejected: Trả về thất bại

        + Một số lỗi thường gặp 
            - Uncaught (in promise) : Promise này đã không sử dụng catch (bắt lỗi)

        + Những câu hỏi trả lời phỏng vấn: 
            - Em có nắm rõ về khái niệm promise không ? 
                + (1) Promise là một khái niệm sinh ra để xử lý những thao tác bất đồng bộ và 
                trước khi có promise thì chúng ta thường sử dụng callback vả callback xảy ra 
                một vấn đề là callback hell nó sẽ bị sâu vào, khó nhìn, code sẽ bị khó debug.
                Promise được sinh ra phiên bản JavaScript mới hơn trong phiên bản ES6 và chúng 
                ta có thể sử dụng chúng để khắc phục callback hell làm cho code dễ nhìn, dễ debug
                hơn.

                + (2) Để tạo ra được một promise thì chúng ta sử dụng từ khóa new Promise và Promise contructor 
                của nó truyền vào một executor function. Khi executor thực thi thì sẽ nhận được 2 tham số (là hàm)
                (1) -> resolve: Được gọi khi thao tác xử lý logic thành công
                (2) -> reject: Được gọi khi ta thao tác xử lý logic thất bại

                + (3) Khi chúng ta sử dụng thằng promise thì đối tượng promise tạo ra. Chúng ta sử dụng
                phương thức .then hoặc .catch. Then và catch đều nhận callback function, sẽ được thực thi vào then khi
                promise được resolve, khi lọt vào catch khi promise bị reject

    - Tính chất chuỗi (chain)

        + Với tính chất chuỗi của promise thì khi các bạn resolve thì nó có thể có nhiều chuỗi .then

        + Cái callback trong .then thứ nhất nó return cái j thì nhận value đó ở .then thứ hai
        ~ Ông đằng sau cần value ông đằng trước để thực thi

        + Trong cái function callback có phải là lúc nào nó return cái j đó thì thằng đằng sau mới nhận cái đó k ? - Không phải
            -> Nếu không return cái j thì nó ra undefined

        + Trong function callback .then nếu nó không return thằng promise thì nó sẽ chạy .then kế tiếp (t/c đặc biệt)

        + Trong function callback .then nếu giữa đường có 1 promise bị reject thì nó sẽ không chạy đến những chuỗi còn lại 

        ! CHú ý:
            - Cái func nó sẽ return lại cái value của callback này nếu mà nó không phải là 1 promise, còn trong TH nó là 1 promise
            thì func nó sẽ return lại chính cái promise mà nó return trong callback này

    - Promise methods (resolve, reject, all)

        + Promise.resolve: Luôn trả về thành công trừ khi return 1 promise trả về reject
        + Promise.reject: Luôn trả về thất bại
        + Promise.all: Chạy song song những promise 
            (Những logic bất đồng bộ nhưng không phụ thuộc nhau thì chúng ta chạy song song)
            . Nhận đối số là 1 mảng
            . Trả về 1 promise 
            . Kết quả truyền ở đầu vào ntn thì kết quả trả về như vậy
    - Thực hành, ví dụ
    