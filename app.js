// // var result = +prompt('enter your total mark');
// // if(result>500) {
// //     console.log ('result is not correct send me the correct mark')
// // }else if(result <200){
// //     console.log( 'stay at home')
// // }
// // else if(result >= 200 && result<=300){
// //     console.log( 'grade is C')
// // }else if(result >= 300 && result<=400){
// //     console.log( 'grade is B')
// // } else{
// //     console.log(result)
// // }

// // newFunction();

// // function newFunction() {
// //     var Account = +prompt('enter your total amount');
// //     if (Account > 2000) {
// //         console.log('result is not correct send me the correct mark');
// //     } else if (Account < 500) {
// //         console.log('you can not take that amount');
// //     }
// //     else if (Account >= 500 && Account <= 1000) {
// //         console.log('you can take ');
// //     } else if (Account >= 1000 && Account <= 1500) {
// //         console.log('your account well be closed');
// //     } else {
// //         console.log(Account);
// //     }
// // }

// var apple = document.querySelector('#apple')
// var banan = document.querySelector('#banan')
// var orange = document.querySelector('#orange')
// var watermalon = document.querySelector('#watermalon')
// var fruits = document.querySelector('#fruits')
// // var percentage = document.querySelector('#percentage')
// // var grade = document.querySelector('#grade')

// function fruits() {
//     console.log(apple.value);
//     console.log(banan.value);
//     console.log(orange.value);
//     console.log(watermalon.value);

//     var fruits =  ;
//     var obtainedMarks = +engMarks.value + +urduMarks.value + +islamMarks.value + + bioMarks.value;
//     console.log('obtained marks ===>', obtainedMarks);
//     studentTotal.innerHTML = obtainedMarks;

//     // var studentPercentage = obtainedMarks / totalMarks * 100;
//     // percentage.innerHTML = studentPercentage;


//     if(studentPercentage > orange){
//         grade.innerHTML = 'its avaible'
// //     }else if(studentPercentage > 70){
// //         grade.innerHTML = 'A'
// //     } else if(studentPercentage > 60){
// //         grade.innerHTML = 'B'
// //     }else{
// //         grade.innerHTML = 'FAIL'
// //     }
// // }


// // let cities= ['karachi',
// // 'lahore'
// // ,'islambad' ]

// // cities.splice(3,1,)
// // console.log(cities)




// constshop=[ 'apple','orange','watermalone', 'geppes', 'banna','mango']
// console.log(fruits.includes('afffgfhgfh'));
// console.log(fruits.indexof('fgfghgkhjhkk'));




let todoInput=document.querySelector("#Todo");

let ul=document.querySelector("ul");


//Render Array

function renderarray(){

    ul.innerHTML="";


    for(i=0 ; i<array.length ; i++){
        ul.innerHTML+=`<li>${array[i]}  <i class="fa-solid fa-pen-to-square" onclick="editTodo(${i})"></i> <i class="fa-solid fa-delete-left" onclick="deleteTodo(${i})"></i>
       </li>`;
    }

    

}

//Create Array and Add to TODO

let array=[];

function addTodo(){

    if(todoInput.value==""){
        alert("Please Enter some taxt");
    }


    array.push(todoInput.value);

    todoInput.value="";


    renderarray()
    

 
    
}


//Delete TODO



function deleteTodo(index){

   
    array.splice(index , 1);

    renderarray()




}

//Edit any TODO


function editTodo(index){

    let newValue=prompt("Enter a new value");

    array.splice(index , 1 , newValue );


   renderarray()



   
    

}

