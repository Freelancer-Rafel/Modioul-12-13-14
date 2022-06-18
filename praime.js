function isPraimeNumber(n) {
    for (var i = 2; i < n; i++) {
        if(n % i == 0){
            return "Your Number is a Praime Number";
        }
    }
    return "Your Number IS a not Praime Number";
}
var result  = isPraimeNumber(131);
console.log(result);