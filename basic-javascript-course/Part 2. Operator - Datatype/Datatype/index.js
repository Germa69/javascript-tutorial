const app = {
	// Number Type
	numberType() {
		const a = 1;
		console.group('[Number]');
		console.log(typeof a);
		console.groupEnd();
	},

	// String Type
	stringType() {
		const fullName = 'Nguyễn Đức Anh';
		console.group('[String]');
		console.log(typeof fullName);
		console.groupEnd();
	},

	// Boolean Type
	booleanType() {
		const isBoolean = true;
		console.group('[Boolean]');
		console.log(typeof isBoolean);
		console.groupEnd();
	},

	// Undefined Type
	undefinedType() {
		let firstName;
		console.group('[Undefined]');
		console.log(typeof firstName);
		console.groupEnd();
	},

	// Null Type
	nullType() {
		const isNull = null;
		console.group('[Null]');
		console.log(typeof isNull);
		console.groupEnd();
	},

	// Symbol Type
	symbolType() {
		let id = Symbol('id');
		console.group('[Symbol]');
		console.log(typeof id);
		console.groupEnd();
	},

	// Function Type
	functionType() {
		let myFunction = () => {}
		console.group('[Function]');
		console.log(typeof myFunction);
		console.groupEnd();
	},

	// Object Type
	objectType() {
		let myObject = {
			name: 'Monkey.D.Luffy',
			age: 20
		}
		console.group('[Object]');
		console.log(typeof myObject);
		console.groupEnd();
	},

	// Array Type
	arrayType() {
		let myArray = [
			1,
			2,
			3
		];
		console.group('[Array]');
		console.log(typeof myArray);
		console.groupEnd();
	}
}

app.numberType();
app.stringType();
app.booleanType();
app.undefinedType();
app.nullType();
app.symbolType();
app.functionType();
app.objectType();
app.arrayType();
