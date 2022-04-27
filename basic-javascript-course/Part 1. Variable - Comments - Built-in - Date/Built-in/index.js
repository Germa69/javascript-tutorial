const app = {
	// console
	console() {
		const random = Math.random();
		console.log(random);
	},

	// setTimeout
	timeOut() {
		setTimeout(() => {
			const random = Math.random();
			console.log(random);
		}, 1000)
	},

	// setInterval

	interval() {
		setInterval(() => {
			const random = Math.random();
			console.log(random);
		}, 1000)
	}
}

app.console();
app.timeOut();
app.interval();

/* Browser */

// alert
alert('Hello world!');

// confirm
const result = confirm('Bạn học giỏi không?');

result ? console.log('Học giỏi') : console.log('Bình thường');

// prompt
const age = prompt('Bạn bao nhiêu tuổi?');

console.log(`Tôi ${age} tuổi`);
