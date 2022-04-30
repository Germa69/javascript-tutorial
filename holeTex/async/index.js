// import XMLHttpRequest from 'xhr2';
// import fetch from 'node-fetch';
// import axios from 'axios';

const app = {
	/* Synchronous */
	sync() {
		console.log(1);
		console.log(2);
		console.log(3);
	},

	/* Ansynchronous */
	ansync() {
		setTimeout(() => console.log(1), 0);
		console.log(2);
		console.log(3);
	},

	/* Callback - XMLHttpRequest */
	httpGetAsync(url, callback) {
		let xmlHttp = new XMLHttpRequest();
		xmlHttp.onreadystatechange = function() {
			if (xmlHttp.readyState === 4 && xmlHttp.status === 200) callback(xmlHttp);
		};
		xmlHttp.open('GET', url, true); // true for asynchronous
		xmlHttp.send(null);
	},

	/* Callback - Fetch */
	async getUser() {
		try {
			const response = await fetch('https://randomuser.me/api/');
			if (!response.ok) {
				throw new Error(`Error! status: ${response.status}`);
			}
			const result = await response.json();
			console.log(result);
		} catch (err) {
			console.log(err);
		}	
	},

	/* Callback - Axios */
	async getTours() {
		try {
			const response = await axios.get('https://course-api.com/react-tours-project');
			console.log(response);
			
		} catch (err) {
			console.log(err);
		}
	},
}

// app.httpGetAsync('https://picsum.photos/200/300', (data) => {
// 	console.log(data);
// 	document.querySelector('#img-1').setAttribute('src', data.responseURL);

// 	app.httpGetAsync('https://picsum.photos/200/300', (data) => { 
// 		document.querySelector('#img-2').setAttribute('src', data.responseURL);

// 		app.httpGetAsync('https://picsum.photos/200/300', (data) => {
// 			document.querySelector('#img-3').setAttribute('src', data.responseURL);
// 		})
// 	})
// })

// await app.getUser();
// await app.getTours();

/* Promise */
function httpGetAsync(url, resolve) {
	let xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState === 4 && xmlHttp.status === 200) resolve(xmlHttp);
	};
	xmlHttp.open('GET', url, true); // true for asynchronous
	xmlHttp.send(null);
};

const currentPromise = new Promise((resolve) => {
	httpGetAsync('https://picsum.photos/200/300', resolve);
});

const promise2 = new Promise((resolve, reject) => {
	httpGetAsync('https://picsum.photos/200/300', resolve);
});

const promise3 = new Promise((resolve, reject) => {
	httpGetAsync('https://picsum.photos/200/300', resolve);
});

//! Then sử dụng khi một promise được resolve thành công
// currentPromise
// 	.then((data) => {
// 		console.log(`Promise 1`, document.querySelector('#img-1').setAttribute('src', data.responseURL));
// 		return promise2;
// 	})
// 	.then((data) => {

// 		setTimeout(() => {
// 			console.log(`Promise 2`, document.querySelector('#img-2').setAttribute('src', data.responseURL));
// 		}, 2000)

// 		return promise3;
// 	})
// 	.then((data) => {
// 		console.log(`Promise 3`, document.querySelector('#img-3').setAttribute('src', data.responseURL));
// 	})
// 	.catch(err => console.log(err));

/* Async, await */
const axecuteAsync = async () => {
	try {
		const response = await currentPromise;
		console.log(`Promise 1`, document.querySelector('#img-1').setAttribute('src', response.responseURL));
		const response2 = await promise2;
		console.log(`Promise 2`, document.querySelector('#img-2').setAttribute('src', response2.responseURL));
		const response3 = await promise3;
		console.log(`Promise 3`, document.querySelector('#img-3').setAttribute('src', response3.responseURL));
	} catch (err) {
		console.log({err});
	}
}

axecuteAsync();








