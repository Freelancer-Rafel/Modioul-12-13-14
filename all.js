// class-4

// var jobpaichow = true;
// var savingMany = 20000;

// if (jobpaichow == true && savingMany > 200000) {
//     console.log('Ascha thik asa tmr jonow patri dhakbow');
// } 
// else if(jobpaichow == true) {
//     console.log('Thik asa koi din por tmr jonow patri khojbow');
// }
// else {
//     console.log('tor kopal a biya nai');
// }

// class-4 end


// class-5 start 
// var firendsAgo = [12, 15, 12, 33, 18, 20, 11];

// firendsAgo.shift()
// firendsAgo.unshift(10)
// firendsAgo.pop();
// firendsAgo.push(60);
// console.log(firendsAgo);

//class-5 end


// factroial start 


// function factroial(n) {
//     var factroial = 1;
//     for (let i = 1; i < n; i++) {
//         factroial = factroial  * i;
        
//     }
//     return factroial;
// }
// var result = factroial(32);
// console.log(result);

// factroial end


//factroialRecursive  start


// function factroial(n) {
//     if(n == 0){
//         return 1;
//     }else{
//         return n * factroial(n - 1);
//     }
// }
// var result =  factroial(11);
// console.log(result)


//factroialRecursive  end


// factroial While start

    // function factroial(n) {
    //     var i = 1;
    //     var factroial = 1;
    //     while (i <= n) {
    //         factroial = factroial * i;
    //         i++;
    //     }
    //     return factroial;
    // }
    // var result = factroial(13);
    // console.log(result);

// factroial While end


// fibonscci start


// function fibonacci(n) {
//     var fibo = [0, 1]
//     for (let i = 2; i <= n; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];

//     }
//     return fibo;
// }
// var result = fibonacci(12);
// console.log(result);


// fibonscci end


//fibonasscRekarcive start


// function fibonacci(n) {
//     if (n == 0) {
//         return 0;
//     }
//     if (n == 1) {
//         return 1;
//     }
//     else{
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }
// var result = fibonacci(10);
// console.log(result);


//fibonasscRekarcive end


// for start 

// var num =  [10, 15, 12, 16, 66, 65];
// for (var i = 0; i <= num.length; i++) {
//     var element = num[i];
//     console.log(element);
// }

// for end


// function start

// function dobulIt(num) {
//     var result = num * 2;
//     return result;
// }

// var first =  dobulIt(15);
// var scound  = dobulIt(20);
// var total = first + scound;
// console.log(total);

// function add(num1, num2) {
//     var result = num1 + num2;
//     return result;
// }
// var sum = add(15, 16);
// console.log(sum);


// function end


// inchToFeet start

    // function feet(inch) {
    //     var feet = inch / 12;
    //     return feet;
    // }
    // var nana = feet(160);
    // console.log(nana)

// inchToFeet end


// leepYear start 


// function leepYear(year) {
//     var leep = year % 4;
//     if (leep == 0) {
//         return  true;
//     } else {
//         return false;
//     }
// }
// var sum = leepYear(1880);
// console.log(sum);


// leepYear end

// object start

    // var students = {id: 121, Roll: 01, Num: 65122, Name: "Md Saiful  Islam Rafel"};
    // var students1 = {id: 122, Roll: 02, Num: 41331, Name: "Md Saiful  Islam Rasel"};

    // students.Name = "Rasel"

    // console.log(students, students1)

// object end



function factroial(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * factroial(n - 1);
    }
}
var result = factroial(12);
console.log(result);