// var result = +prompt('enter your total mark');
// if(result>500) {
//     console.log ('result is not correct send me the correct mark')
// }else if(result <200){
//     console.log( 'stay at home')
// }
// else if(result >= 200 && result<=300){
//     console.log( 'grade is C')
// }else if(result >= 300 && result<=400){
//     console.log( 'grade is B')
// } else{
//     console.log(result)
// }

// newFunction();

// function newFunction() {
//     var Account = +prompt('enter your total amount');
//     if (Account > 2000) {
//         console.log('result is not correct send me the correct mark');
//     } else if (Account < 500) {
//         console.log('you can not take that amount');
//     }
//     else if (Account >= 500 && Account <= 1000) {
//         console.log('you can take ');
//     } else if (Account >= 1000 && Account <= 1500) {
//         console.log('your account well be closed');
//     } else {
//         console.log(Account);
//     }
// }

var engMarks = document.querySelector('#eng-marks')
var urduMarks = document.querySelector('#urdu-marks')
var islamMarks = document.querySelector('#islam-marks')
var bioMarks = document.querySelector('#bio-marks')
var studentTotal = document.querySelector('#total-marks')
var percentage = document.querySelector('#percentage')
var grade = document.querySelector('#grade')

function calculatePercentage() {
    console.log(engMarks.value);
    console.log(urduMarks.value);
    console.log(islamMarks.value);
    console.log(bioMarks.value);

    var totalMarks = 500;
    var obtainedMarks = +engMarks.value + +urduMarks.value + +islamMarks.value + + bioMarks.value;
    console.log('obtained marks ===>', obtainedMarks);
    studentTotal.innerHTML = obtainedMarks;

    var studentPercentage = obtainedMarks / totalMarks * 100;
    percentage.innerHTML = studentPercentage;


    if(studentPercentage > 80){
        grade.innerHTML = 'A+'
    }else if(studentPercentage > 70){
        grade.innerHTML = 'A'
    } else if(studentPercentage > 60){
        grade.innerHTML = 'B'
    }else{
        grade.innerHTML = 'FAIL'
    }
}





