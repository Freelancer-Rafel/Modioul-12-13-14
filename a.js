var jobpaichow = true;
var savingMany = 2000;

if (jobpaichow == true && savingMany > 200000) {
    console.log('Ascha tmr jonow patri dhakbow');
}
else if (jobpaichow == true) {
    console.log('Thik asa koi din por tmr jonow patri dhakbow');
}
else{
    console.log('Tor kopal a beya nai');
}


function factroial(n) {
    var factroial = 1;
    for (var i = 1; i < n; i++) {
        factroial = factroial * i;
        
    }
    return factroial;
}
var result = factroial(32);
console.log(result);

function factroial(n) {
    if (n == 0) {
        return 1;
    }else{
        return n * factroial(n - 1);
    }
}
var result = factroial(15);
console.log(result);


function factroial(n) {
    var i = 1;
    var factroial = 1;
    while (i <= n) {
        factroial = factroial * i;
        i++;
    }
    return factroial;
}

var result = factroial(10);
console.log(result);


function fibonacci(n) {
    var fibo = [0, 1];
    for (var i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
        
    }
    return fibo;
}

var result = fibonacci(12);
console.log(result);

function fibonacciRekarcive(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    else {
        return fibonacciRekarcive(n - 1) + fibonacciRekarcive(n - 2);
    }
}

var result = fibonacciRekarcive(12);
console.log(result);


var num = [12, 15, 11, 13, 22, 10, 15, 18];
for (var i = 0; i < num.length; i++) {
    var element = num[i];
    console.log(element);
}


function dobulIt(n) {
    var result = n * 2;
    return result;
}
var first = dobulIt(15);
var scound = dobulIt(20);
var total = first + scound
console.log(total);


function add(num1, num2) {
    var result = num1 + num2;
    return result;
}
var result = add(15, 16);
console.log(result);


function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}

var nana = inchToFeet(156);
console.log(nana);


function leepYear(year) {
    var leep = year % 4;
    if (leep == 0) {
        return "Your year is a leep year";
    } else {
        return "Your year is a not leep year"
    }
}
var result = leepYear(1999);
console.log(result);


function factroial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factroial(n - 1);
    }
}
var result = factroial(12);
console.log(result);


function praime(n) {
    for (var i = 2; i < n; i++) {
        if(n % i == 0){
            return "Your number is a praime"
        }
    }
    return "Your Number is a not prime number";
}

var result = praime(131);
console.log(result);