var date = new Date();

const app = {

	// Phương thưc lấy năm hiện tại
	getCurrentYear() {
		console.log(date.getFullYear());
	},

	// Phương thưc lấy tháng hiện tại
	getCurrentMonth() {
		console.log(date.getMonth() + 1);
	},

	// Phương thức lấy ngày hiện tại
	getCurrentDay() {
		console.log(date.getDate());
	},

	// Hàm merge nhiều function thành một
	mergeFunction() {
		let listOfFuncs = [];

		for (let func in arguments) {
			listOfFuncs.push(func);
		}

		return function () {
			for (let func of listOfFuncs) {
				func(arguments)
			}
		}
	}
}

app.getCurrentYear();
app.getCurrentMonth();
app.getCurrentDay();

app.mergeFunction(app.getCurrentYear(), app.getCurrentMonth(), app.getCurrentDay());

