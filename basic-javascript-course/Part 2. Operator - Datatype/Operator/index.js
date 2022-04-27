const app = {
	// Toán tử số học - Arithmetic
	arithmetic() {
		let x = 1;
		let y = 2;

		console.group('[Operator]');
		console.log('Addition', x + y);
		console.log('Subtraction', x - y);
		console.log('Multiplication', x * y);
		console.log('Exponential', x ** y);
		console.log('Division', x / y);
		console.log('Divide by balanced', x % y);
		console.groupEnd();

		console.group('[Prefix]');
		/**
		 	+> V1: +1 cho x, x = x + 1 => x = 2
			+> V2: Trả về x
		*/
		const outputPrefix = ++x;
		console.log('Output prefix:', outputPrefix); 
		console.log('Value:', x); 
		console.groupEnd();

		console.group('[Postfix]');
		/**
		 	+> V1: 'y copy', 'y copy' = 6 
			+> V2: +1 cho y, y = y + 1 => y = 7 
			+> V3: Trả về 'y copy'
		*/
		const outputPostfix = y++;
		console.log('Output postfix:', outputPostfix); 
		console.log('Value:', y); 
		console.groupEnd();
	},

	// Toán tử gán - Assignment
	assignment() {
		let x = 1;
		let y = 2;

		console.group('[Operator]');
		console.log('Equal to [=]', x = y); 
		console.log('Assign plus equal to [+=]', x += y);
		console.log('Assign minus equal to [-=]', x -= y);
		console.log('Assign multiplication equal to [*=]', x *= y);
		console.log('Assign division equal to [/=]', x /= y);
		console.log('Assign exponentiation equal to [/=]', x **= y);
		console.groupEnd();
	},

	// Toán tử chuỗi - String operator
	stringOperator() {
		/**
		 	+> N1: Phép (+) là toán tử số học khi VT và VP là 1 số
			+> N2: Khi 1 trong 2 vế không còn là số thì phép (+) trở thành phép nối chuỗi
		*/	
		let str = 'Hello';
		let str2 = 'World';	
		console.group('[String Operator]');
		console.log(str + ' ' + str2);
		console.groupEnd();
	},

	// Toán tử so sánh
	comparison() {
		let x = 1;
		let y = 2;

		console.group('[Operator]');
		console.log('Comparison equal to [==]', x == y); 
		console.log('bigger not equal to [==]', x != y); 
		console.log('Greater than [>]', x > y); 
		console.log('Less than [<]', x < y); 
		console.log('Greater than or equal to [>=]', x >= y); 
		console.log('Less than or equal to [>=]', x <= y); 
		console.groupEnd();
	},

	// Toán tử logic - Logical
	logical() {
		let x = 1;
		let y = -1;
		let z = 3;

		console.group('[Operator]');
		// Cả 3 phần tử thoả mãn điều kiện
		if (x > 0 && y > 0 && z > 0) {
			console.log('Điều kiện đúng'); 
		} else {
			console.log('Điều kiện sai'); 
		}

		// Chỉ cần 1 trong 3 điều kiện đúng
		if (x > 0 || y > 0 || z > 0) {
			console.log('Điều kiện đúng'); 
		} else {
			console.log('Điều kiện sai'); 
		}

		// Phủ định lại giá trị (true => false, false => true)
		if (!(x > 0)) {
			console.log('Điều kiện đúng');
		} else {
			console.log('Điều kiện sai');
		}
		console.groupEnd();
	},

	nullish() {
		/**
		 * - Toán tử kết hợp nullish (??) là một toán tử logic trả về toán hạng bên phải của nó khi toán hạng bên trái của nó là null 
 		 *   hoặc không xác định, và nếu không trả về toán hạng bên trái của nó.
		 * - Điều này có thể được tương phản với toán tử logic OR (||), trả về toán hạng bên phải nếu toán hạng bên trái là bất kỳ 
		 *   giá trị sai nào, không chỉ null hoặc không xác định. Nói cách khác, nếu bạn sử dụng || để cung cấp một số giá trị mặc định 
		 * 	 cho foo biến khác, bạn có thể gặp phải các hành vi không mong muốn nếu bạn coi một số giá trị giả là có thể sử dụng 
		 * 	 được (ví dụ: '' hoặc 0). Xem bên dưới để biết thêm ví dụ.
		 * - Toán tử kết hợp nullish có ưu tiên toán tử thấp thứ năm, trực tiếp thấp hơn || và cao hơn trực tiếp so với toán tử có điều 
         *   kiện (bậc ba).
		 */

		let x = null;
		let y = 3;

		if (x ?? y > 0) {
			console.log(x);
			console.log(y);
		} else {
			console.log('Điều kiện sai');
		}
	}
};

app.arithmetic();
app.assignment();
app.stringOperator();
app.comparison();
app.logical();
app.nullish();