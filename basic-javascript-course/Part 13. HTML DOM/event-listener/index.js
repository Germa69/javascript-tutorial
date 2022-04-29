var btn = document.getElementById('btn');

var job1 = function(e) {
    console.log('Việc 1');
}

var job2 = function(e) {
    console.log('Việc 2');
}

var job3 = function(e) {
    console.log('Việc 3');
}

btn.addEventListener('click', job1);
btn.addEventListener('click', job2);
btn.addEventListener('click', job3);

setTimeout(() => {
    btn.removeEventListener('click', job1);
    btn.removeEventListener('click', job2);
    btn.removeEventListener('click', job3);
}, 3000);
