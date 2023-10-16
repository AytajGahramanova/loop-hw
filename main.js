// TASK - 1 --> Natural n ədədi verilmişdir. n-dən kiçik olan bütün natural tək ədədləri artma ardıcıllığında çap edin//
// let number = 11;
// let a = " ";

// for(let i = 1; i < number; i++){
//     if(i%2 == 1){
//         a = a + (i + " ");
//     }
// }
// console.log(a);



// TASK - 2 --> Reverse a given integer number//
// let number = 4582;
// let lastNum;
// let a = "";

// for(i = 1; i <= number; i++){
//     lastNum = number % 10;
//     a = a + (lastNum + "");
//     number = parseInt(number / 10);
// }
// console.log(a);



// TASK - 4 -->  Ədədin tək rəqəmlərinin hasili//
// let number = 2375;
// let multiplication = 1;

// while(number){
//     let eded = number % 10;
//     number = parseInt(number / 10);
//     if(eded %2 != 0){
//         multiplication = multiplication * eded;
//     }
// }
// console.log("hasili: ", multiplication);



// TASK - 3 --> Find the sum of the series upto n terms//
// let a = 3;
// let b = "";    
// let sum = 0;

// for(let i = 0; i <= a; i++){
//     for(let j = 1; j <= i; j+=i){
//         b += j;
//         sum = sum + i;
//     }
//         console.log(b);
// }
// console.log("sum:", sum);

            
// duzgun gedisati //
// let eded = parseInt(prompt("ededi daxil edin:"));
// let tekrar = parseInt(prompt("tekrar sayini daxil edin:"));
// let sum = 0;
// let total = 0;
// for(let i = 0; i < tekrar; i++){
//     sum = sum*10 + eded;
//     console.log(sum);
//     total += sum;
// }
// console.log(total);