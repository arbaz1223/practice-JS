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

var Account = +prompt('enter your total amount');
if(Account>2000) {
    console.log ('result is not correct send me the correct mark')
}else if(Account <500){
    console.log( 'you can not take that amount')
}
else if(Account >= 500 && Account<=1000){
    console.log( 'you can take ')
}else if(Account >= 1000 && Account<=1500){
    console.log( 'your account well be closed')
} else{
    console.log(Account)
}