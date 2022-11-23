
function checkYear(year) {
    if (year % 400 == 0)
        return true;

    if (year % 100 == 0)
        return false;

    if (year % 4 == 0)
        return true;
    return false;
}

function cToF(celsius) {
    // to convert to 
    var cTemp = celsius;
    var cToFahr = cTemp * 9 / 5 + 32;
    var message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) {
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    var message = fTemp + '\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
}

function factorial(num) {
    let ans = 1;
    for(let i = 2; i <= num; i++) ans *= i;
    return ans;
}
let year = 2010;
let ans = year ? 'leap' : 'not leap';

cToF(60);
fToC(45);
console.log(factorial(3));
console.log(ans);
