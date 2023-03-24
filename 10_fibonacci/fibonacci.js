const fibonacci = function(x) {
    if (x < 0) return "OOPS";
    let index = 1;
    let fib = 1;
    let fibn0 = 0;
    let fibn1 = 1;
    while (index < x)
    {
        fib = fibn0 + fibn1;
        fibn0 = fibn1;
        fibn1 = fib;
        index++;
    }
    return fib
};


// Do not edit below this line
module.exports = fibonacci;
