// Phần 1

function myFunction (params) {
    if (typeof params === 'function') {
        params(123);
    }
}

function myCallback (value) {
    console.log(value);
}

myFunction(myCallback);

