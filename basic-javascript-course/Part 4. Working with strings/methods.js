const app = {

	//TODO: Length
	length() {
		console.group('[Length]');
		let str = 'Nguyen Duc Anh';
		console.log(str.length);
		console.groupEnd();
	},

	//TODO: Find Index
	findIndex() {
		console.group('[Find Index]');
		let str = 'Nguyen Duc Anh muon hoc Tieng Anh lam!'
		// Trả về vị trí của chuỗi đầu tiên mà tìm thấy
		console.log(str.indexOf('Anh'));
		// Trả về vị trí của chuỗi sau vị trí đầu tiên tìm thấy
		console.log(str.indexOf('Anh', 15));
		// Trả về vị trí của chuỗi cuối mà tìm thấy
		console.log(str.lastIndexOf('Anh'));
		// Không tìm thấy trả về -1
		console.log(str.indexOf('Anh1'));
		// Trả về giống thằng indexOf()
		console.log(str.search('Anh'));
		console.groupEnd();
	},

	//TODO: Cut String
	cutString() {
		let str = 'Nguyen Duc Anh';

		// Slice(): Trích xuất một phần của chuỗi và trả về phần được trích xuất trong một chuỗi mới.
		console.group('[Slice]');
		// TH1: slide(start(+), end(+)): Cắt ra một phần của chuỗi từ vị trí start đến vị trí end (T -> P)
		console.log(str.slice(7, 11));
		// TH2: slide(start(-), end(-)): Nếu một tham số là số âm, vị trí được tính từ cuối chuỗi. (P -> T)
		console.log(str.slice(-7, -4));
		// TH3: slide(start(+)): Bỏ vị trí cắt -> lấy phần còn lại
		console.log(str.slice(7));
		// TH4: slide(start(-)): Lấy vị trí cắt -> Bỏ phần còn lại
		console.log(str.slice(-3));
		console.groupEnd();

		// substring(): Tương tự như hàm slide() những khác là không chấp nhận chỉ mục âm
		console.group('[Substring]');
		// TH1: substring(start(+), end(+)): Cắt ra một phần của chuỗi từ vị trí start đến vị trí end (T -> P)
		console.log(str.substring(7, 11));
		// TH2: substring(start(+)): Bỏ vị trí cắt -> lấy phần còn lại
		console.log(str.substring(7));
		// TH3: Khi mình cắt (start(-)): Trả về chuỗi ban đầu
		console.log(str.substring(-1));
		console.groupEnd();

		// substr(): Tương tự như hàm slide() nhưng khác là tham số thứ 2 chỉ định độ dài phần được trích xuất
		console.group('[Substr]');
		// TH1: substr(start(+), length): Bỏ vị trí cắt và lấy độ dài cần trích xuất
		console.log(str.substr(7, 11));
		// TH2: slide(start(+)): Bỏ vị trí cắt -> lấy phần còn lại
		console.log(str.substr(7));
		// TH3: slide(start(-)): Lấy vị trí cắt -> Bỏ phần còn lại
		console.log(str.substr(-3));
		console.groupEnd();
	},

	//TODO: Replace String
	replaceString() {
		let str = 'Nguyen Duc Anh Anh';

		console.group('[Replace]');
		// TH1: Thay thế cho 1 giá trị được chỉ định
		console.log(str.replace('Anh', 'Em'));
		// TH2: Phân biệt chữ hoa & thường 
		console.log(str.replace(/ANH/i, 'Em'));
		// TH3: Thay thế nhiều giá chị được chỉ định
		console.log(str.replace(/Anh/g, 'MSC'))
		// TH3: Thay thế nhiều giá chị được chỉ định và in hoa thường
		console.log(str.replace(/ANH/gi, 'MSC'))
		// TH4: Sử dụng function() làm đối số thứ 2 của hàm replace()
		let oldstring = 'AAPL GOOG and MSFT are really big technology companies.';
		let newstring = oldstring.replace(/[A-Z]{4}/g, tickerToName);
		 
		function tickerToName(match){
			if(match === 'AAPL'){
				return 'Apple';
			} else if (match === 'GOOG'){
				return 'Google';
			} else if (match === 'MSFT') {
				return 'Microsoft';
			}
		}

		console.log(newstring);
		console.groupEnd();
	},

	//TODO: Convert String
	convertString() {
		let str = 'Nguyen Duc Anh';

		console.group('[Convert]');
		// Convert to uppercase
		console.log(str.toUpperCase());
		// Convert to lowercase
		console.log(str.toLowerCase());
		// Combined with the replace function
		let oldstring = 'The Most Popular JavaScript String Functions';
		let pattern = /\s/g;

		function slugify(str) {
			return str.replace(pattern, '-').toLowerCase();
		}

		let newstring = slugify(oldstring);
		console.log(newstring);
		console.groupEnd();

	},

	//TODO: Join String
	joinString() {
		let str = 'Sin';
		let str2 = 'Dang';

		console.group('[Join]');
		// TH1: Có thể nối hai hoặc nhiều chuỗi
		console.log(str.concat(str2));
		// TH2: Có thể thay thế toán tử cộng
		console.log(str.concat(' ', str2))
		console.groupEnd();
	},

	// TODO: Trim String
	trimString() {
		let str = '   Nguyen Duc Anh   ';
		console.group('[Trim]');
		console.log(str.trim());
		console.groupEnd();
	},

	// TODO: Split String  
	splitString() {
		let str = 'Nguyen Duc Anh';
		console.group('[Split]');
		console.log(str.split(' '));
		console.groupEnd();
	},

	// TODO: charAt
	charAt() {
		let lightsaber = 'Super Powerful Slicing Ability';
		console.group('[charAt]');
		console.log(lightsaber.charAt(0));
		// Vị trí cuôi cùng của chuỗi
		console.log(lightsaber.charAt(lightsaber.length - 1))
		console.groupEnd();
	},

	// TODO: charCodeAt
	charCodeAt() {
		let alphabet = 'abcdefghijklmnopqrstuvwxyz';
		console.group('[charCodeAt]');
		console.log(alphabet.charCodeAt(0));
		console.groupEnd();
	},

	// TODO: fromCharCode
	fromCharCode() {
		let secretcode = String.fromCharCode(69, 118, 101, 114, 121, 116, 104, 105, 110, 103, 32, 105, 115, 32, 65, 87, 69, 83, 79, 77, 69);
		console.group('[fromCharCode]');
		console.log(secretcode);
		console.groupEnd();
	},

	// TODO: valueOf
	valueOf() {
		let str = new String('Nguyen Duc Anh');
		console.group('[valueOf]');
		console.log(str);
		console.log(str.valueOf());
		console.groupEnd();
	},

	// TODO: match
	match() {
		let numbersinstring = '50 plus 50 equals 100!';
		console.group('[match]');
		let result = numbersinstring.match(/\d+/g);
		console.log(result);
		console.groupEnd();
	}
}

// app.length();
// app.findIndex();
// app.cutString();
// app.replaceString();
// app.convertString();
// app.joinString();
// app.trimString();
// app.splitString();
app.charAt();
app.charCodeAt();
// app.fromCharCode();
// app.valueOf();
// app.match();