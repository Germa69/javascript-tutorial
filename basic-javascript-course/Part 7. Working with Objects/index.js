var myInfo = {
	name: 'Nguyen Duc Anh',
	age: 22,
	address: 'Ha Noi',
}

const app = {
	
	// Hiển thị đối tượng
	showObject(obj) {
		console.group('Show Object');
		console.log(obj);
		console.groupEnd();
	}, 

	// Kiểu dữ liệu Object
	typeObject(obj) {
		console.group('Type Object');
		console.log(typeof obj);
		console.groupEnd();
	},

	// Lấy value trong obj
	getValueToObject(obj) {
		console.group('Get Value To Object');
		console.log(obj.name);
		console.log(obj['age'])
		console.groupEnd();
	},

	// Thêm 1 thuộc tính vào Object
	addPropertyToObject(obj) {
		console.group('Add Property To Object');
		obj.phone = 'xxx.xxxx.xx';
		obj['E-mail'] = 'xxx@.xxxx.xx'
		console.log(obj)
		console.groupEnd();
	},

	// Lấy key của Object
	getKeyToObject(obj) {
		console.group('Get Key To Object');
		let myKey = 'address';
		console.log(obj.myKey);
		console.log(obj[myKey]);
		console.groupEnd();
	},

	// Xóa key trong Object
	deleteKeyToObject(obj) {
		console.group('Delete Key To Object');
		console.log(delete obj['name']);
		console.log(obj);
		console.groupEnd();
	},
}

app.showObject(myInfo);
app.typeObject(myInfo);
app.getValueToObject(myInfo);
app.addPropertyToObject(myInfo);
app.getKeyToObject(myInfo);
app.deleteKeyToObject(myInfo);


// Object constructor : Là bản thiết kế của đối tượng
function User(firstName, lastName, avatar) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.avatar = avatar;

	this.getName = () => {
		return `${this.firstName}` `${this.lastName}`;
	}
}

console.group('Object constructor');
let user = new User('Sin', 'Dang', 'Avatar');

user.title = 'Chia sẻ dạo tại F8';

console.log(user);

console.log(user.constructor === User); 
console.groupEnd();

// Object prototype

User.prototype.className = 'F8';
User.prototype.getClassName = function() {
	return this.className;
}

console.group('Object prototype');

let author = new User('Sin', 'Dang', 'Avatar');
console.dir(author.className);
console.dir(author.getClassName());

console.groupEnd();






