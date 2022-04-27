const app = {
	// 2 ways to create chains
	getStringWay1() {
		console.group('[Way-01]');
		let fullName = 'Nguyen Duc Anh';
		console.log(fullName);
		console.groupEnd();
	},

	getStringWay2() {
		console.group('[Way-02]');
		let work = new String('Web developer');
		console.log(typeof work);
		console.groupEnd();
	},

	// Check string data type
	checkStringDataType() {
		console.group('[Check String Data Type]');
		let learn = 'Javascript';
		console.log(typeof learn);
		console.groupEnd();
	},
	
	// backslash (\)
	backslash() {
		console.group('[Backslash]');
		let favorite = 'HTML \' CSS \'';
		console.log(favorite);
		console.groupEnd();
	},

	// Length of a string
	lengthString() {
		console.group('[Length of a string]');
		let str = 'learn a something';
		console.log(str.length);
		console.groupEnd();
	},

	// Notice the length of a string [80 ký tự / dòng]
	noticeLength() {
		console.group('[Notice the length of a string]');
		var str = "qwe..nm " +
			"1.qwe..nm " +
			"2.qwe..nm " +
			"3.qwe..nm ";
		console.log(str);
		console.groupEnd();
	},

	// Template string
	templateString() {
		let firstName = 'Sin';
		let lastName = 'Dang';

		console.group('[Template String]');
		console.log(`${firstName} ${lastName}`);
		console.groupEnd();
	}
}

app.getStringWay1();
app.getStringWay2(); // Trả về 1 mảng

app.checkStringDataType();

app.backslash();

app.lengthString();

app.noticeLength();

app.templateString();




