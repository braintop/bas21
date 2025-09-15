//exe1 
function power(num){
    return num * num;
}

let x1 = power(2);
console.log(x1);

//exe2
function hello(name){
    return "Hello, " + name + "!";
}

let s = hello("John");//Hello, John!
console.log(s);

//exe3
function maxBetweenTwoNumbers(num1, num2){
    if(num1 > num2)
        return num1;
    return num2;
}

let x3 = maxBetweenTwoNumbers(10, 20);//20
console.log(x3);


// //exe4 even or odd
// function evenOrOdd(num){
//     if(num % 2 == 0){
//         console.log(num + " is even");
//     }else{
//         console.log(num + " is odd");
//     }
// }

// evenOrOdd(10);//even

// //exe5 printTillN 
// function printTillN(n){
//     for(let i = 1; i <= n; i++){
//         console.log(i);
//     }
// }

// printTillN(10);//1 2 3 4 5 6 7 8 9 10

// //exe6 printfromrandto0
// function printFromRandTo0(){
//     let num = Math.floor(Math.random()*100);
//     for(let i = num; i >= 0; i--){
//         console.log(i);
//     }
// }

// printFromRandTo0();//10 9 8 7 6 5 4 3 2 1 0

// //exe7 sumfrom1ton
// function sumFrom1ToN(n){
//     let sum = 0;
//     for(let i = 1; i <= n; i++){
//         sum += i;
//     }//end of for 
//     console.log(sum);
// }

// sumFrom1ToN(10);//55

// //exe8 sumDigits
// function sumDigits(num){

//     let sum = 0;
//     while(num != 0){
//         sum += num % 10;
//         num = Math.floor(num / 10);
//     }
//     console.log(sum);
// }
// sumDigits(123);//6
