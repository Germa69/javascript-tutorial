const app = {

	showDialog() {
		console.group('Dialog');
		console.log('Javascript Tutorial');
		console.groupEnd();
	},

	writeMessage(msg) {
		console.group('Write Message');
		console.log(msg);
		console.groupEnd();
	},

	writeDialog(fullName, age) {
		console.group('Write Dialog');
		console.log(`${fullName} - ${age}`);
		console.groupEnd();
	},

	// Arguments
	writeLog() {
		console.group('Arguments Log');
		console.log(arguments);
		console.groupEnd();
	},

	writeLogOfForType1() {
		console.group('Arguments Log of for type 1');
		for (let item of arguments) {
			console.log(item);
		}
		console.groupEnd();
	},

	writeLogOfForType2() {
		let myString = '';
		console.group('Arguments Log of for type 2');
		for (item of arguments) {
			myString += `${item} - `
		}
		console.log(myString);
		console.groupEnd();
	},

	// Return value of functions
	addition(a, b) {
		return a + b;
	},

	// Tìm hiểu sâu về function
	showMessage() {
		console.log('Message 1');
	},

	showMessage() {
		console.log('Message 2');
	},

	// Phạm vi biến trong hàm
	variableFunc() {
		let a = 2;
		(() => {
			console.log(a);
		})()
	},

	// Declaration function
	declareFunction() {
		console.log('Declaration function');
	},
}

app.showDialog(); 
app.writeMessage('I learn Javascript');
app.writeDialog('Nguyen Duc Anh', 22);

app.writeLog('Log1', 'Log2', 'Log3');
app.writeLogOfForType1('Log1', 'Log2', 'Log3');
app.writeLogOfForType2('Log1', 'Log2', 'Log3');

var result = app.addition(1, 3);
console.log(result);

app.showMessage();

app.variableFunc();

app.declareFunction();

const expressionFunc = function() {
	console.log('Expression function');
}

expressionFunc();

arrowFunc = () => {
	console.log('Arrow function');
}

arrowFunc();









