/**
 *  - Là khái niệm để sử dụng lấy dữ liệu từ phía Backend trả về
 * 
 *  1. Font-end: Xây dựng giao diện người dùng
 *  
 *  2. Back-end: Xây dựng logic xử lý - cơ sở dữ liệu
 * 
 *  - Ý tường: Fetch làm nhiệm vụ gọi lên 1 API để lấy ra nội dung được lưu trữ phía back-end và
 *             front-end nhận nội dung đó và render để hiển thị lên trình duyệt.
 * 
 *  - API -> Application programing interface (Giao diện lập trình ứng dụng)
 *      
 *      + Hiểu: Cổng giao tiếp giữa các phần mềm
 * 
 *      + Mô phỏng quá trình:
 * 
 *          Backend -> API (URL) -> Fetch -> JSON/XML -> JSON.parse -> JS types -> Render ra giao diện với HTML
 */

// stream
// response chính là 1 đối tượng (Object) khi
// response.json() trong đó phương thức json() đã trả 1 promise, promise resolve nó đã JSON.parse 

var postAPI = 'https://jsonplaceholder.typicode.com/posts';

fetch(postAPI)
    .then((response)=> {
        //? JSON.parse: JSON -> JavaScript types
        return response.json();  
    })
    .then((posts) => {
        var postBlock = document.getElementById('post-block');
        //? Sẽ trả về 1 chuỗi
        var htmls = posts.map((post) => {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`;
        });

        var html = htmls.join('')

        postBlock.innerHTML = html;
    })
    .catch((error) => {
        alert('Có lỗi');
    })

