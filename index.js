function getNumbers(cb, a, b) {
    cb(a, b)
}

function sum(a, b) {
    console.log(a + b);
}

function rest(a, b) {
    console.log(a - b)
}

getNumbers(sum, 4, 5);