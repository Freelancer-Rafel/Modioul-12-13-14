// const leepYear = 2000;
// let reminder = leepYear % 4;
// if (reminder == 0) {
//     console.log('Your year is a leep year');
// } else {
//     console.log('Your year is a not leep year');
// }

// function isLeepYear(leepYear) {
//     const reminder = leepYear % 4;
//     if (reminder == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// var chack = isLeepYear(2002);
// console.log(chack);


function leepYear(year) {
    var leep = year % 4;
    if (leep == 0) {
        return true
    } else {
        return false;
    }
}

var result = leepYear(2024);
console.log(result);







