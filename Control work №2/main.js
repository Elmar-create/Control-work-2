function extractNumbers(str) {
    return str.match(/\d+/g)?.map(Number) || [];
}

console.log(extractNumbers("a1fg5hj6")); 
// [1, 5, 6]

console.log(extractNumbers("abc123def45"));
// [123, 45]

console.log(extractNumbers("hello"));
// []