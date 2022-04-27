const app = {

	declareVariable() {
		let fullName; // [Khai báo biến]

		fullName = 'Sin Đăng'; // [Gán giá trị]

		/* 
			Khi đoạn mã trên được chạy (thực thi) Javascript sẽ tạo biến với tên fullName và gán giá trị 'Sin Đăng' cho biến này. 
			Một vùng nhớ trong RAM của máy tính sẽ được sử dụng để phục vụ việc lưu trữ những giá trị của biến khi chương trình được thực thi.
		*/
		console.log(fullName);
	},

	rulesVariable() {
		// Hợp lệ
		let address;
		let first_name;
		let $last_name;
		let a8;

		console.log(`${address} - ${first_name} - ${$last_name} - ${a8}`);

		// Không hợp lệ
		// `Java-script`, `8a`, `var`
	},

	assignVariable() {
		let currentCourse = 'Javascript';

		let newCourse;

		newCourse = currentCourse;

		console.log(newCourse);
	},
}

app.declareVariable();
app.rulesVariable();
app.assignVariable();

