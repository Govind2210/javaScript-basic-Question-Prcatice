const { Console } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
//-----------------------------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------REVISION-------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------------------------
//Mac-book 

// let MacBook = (readLine());
// //console.log(MacBook)

// sum = 0

// for(i = 0 ; i < MacBook ; i ++){
//     let itration = parseInt(readLine());
//     //console.log(itration)
//     if(itration > 0){
//         sum += itration
//     }    
// }
// console.log(sum);

//------------------------------------------------------------------------------------------------------------------------------------- 

//predict the QUADRANT

//EXPECTED INPUT

//Q1, if x > 0 and y > 0
//Q2, if x < 0 and y > 0
//Q3, if x < 0 and y < 0
//Q4, if x > 0 and y < 0

// let num = parseInt(readLine());
// //console.log(num);

// for(i = 0 ; i < num ; i++){
//     let quadrant = readLine().split(" ")
//     let X = parseInt(quadrant[0]);
//     let Y = parseInt(quadrant[1]);

//     //console.log(X);
//     //console.log(Y);

//     if(X > 0 && Y > 0){
//         console.log("Q1")
//     }
//     else if(X < 0 && Y > 0){
//         Console.LOG("Q2")
//     }
//     else if(X < 0 && Y <0){
//         Console.log("Q3")
//     }
//     else if(X > 0 && Y <0 ){
//         console.log("Q4")
//     }
//     else{
//         console.log(0)
//     }
// }

//-----------------------------------------------------------------------------------------------------------------------------------------

// Eating Symbols

// let x = readLine()
// console.log(x);
// sum = 0

// let positive = "+"
// let negative = "-"

// for(let i = 0 ; i<x.length ; i++){
//     if(x[i] === positive){
//         sum += 1
//     }
//     else if(x[i] === negative){
//         sum -= 1
//     }
// }
// console.log(sum)

//-----------------------------------------------------------------------------------------------------------------------------------------

// Amazing Sum

// let num = parseInt(readLine());
// //console.log(num);
// arr = []
// identifiers = false;

// for(let i = 0 ; i < num ; i++){
//     let X = parseInt(readLine());
//     arr.push(X)
// }
// //console.log(arr)

// for(j = 0 ; j < arr.length ; j++){
//     if(arr[j] + arr[j + 1] > 100)
//     //console.log(arr[j] + arr[j + 1] > 100)
//     identifiers = true;
// }
// if(identifiers){
//     console.log("True")
// }
// else{
//     console.log("False")
// }

//-----------------------------------------------------------------------------------------------------------------------------------------

// Reverse integer

// let X = parseInt(readLine());
// //console.log(X)
// sum = 0
// let Temp = X
// mod = 0

// while( X != 0){ //123
//     digit = X % 10 ; //123 --> 123 % 10 -->3
//    // console.log(digit);
//     sum = sum  * 10 + digit;
//     X = Math.floor(X / 10)
//     //console.log(X)
// }
// console.log(sum)

//-----------------------------------------------------------------------------------------------------------------------------------------

// abc odd

// 
// let x = readLine().split(" ")

// let a = parseInt(x[0])
// let b = parseInt(x[1])

// for(i = 0; i <= 3 ; i++){
//     if(a * b * i/2 == 0){
//         console.log("Yes")
//         break;
//     }
//     else{
//         console.log("No")
//     }
// }

//-----------------------------------------------------------------------------------------------------------------------------------------

//reduce 1

// let x = parseInt(readLine());
// //console.log(x);

// for(i = 0 ; i <= x ; i++){
//     let x1 = parseInt(readLine())
//     if(x1 <= 2){
//         console.log(1)
//     }
//     else{
//         console.log(-1)
//     }
// }

//-----------------------------------------------------------------------------------------------------------------------------------------

// Crackers

// let num = readLine().split(" ")
// let a = parseInt(num[0])
// let b = parseInt(num[1])

// if ( a % b == 0){
//     console.log(0)
// }
// else{
//     console.log(1)
// }

//---------------------------------------------------------------------------------------------------------------------------------------

// Train

// let train = readLine().split(" ")

// let Totalcar = parseInt(train[0]);
// let Frontcar = parseInt(train[1]);
// //console.log(Totalcar);
// //console.log(Frontcar);

// let j = (Totalcar + 1) - Frontcar
// console.log(j);

//--------------------------------------------------------------------------------------------------------------------------------

// Iterate

// let Iterate = parseInt(readLine());
// //console.log(Iterate);

// for(i = 0; i <= Iterate ; i++){
//     mul = Iterate * i
//     console.log(mul);
// }

//------------------------------------------------------------------------------------------------------------------------------

// Predict the seat

// let Berth  = ["L" , "M" , "U" , "L" , "M" , "U" ,"SL" , "SU" ]

// //              1    2     3       4     5     6     7      8

// let seat = readLine();
//console.log(seat);

// for(i = 0 ; i< seat ; i++){
//     let Realseat = readLine().split(" ")

//     let Totalseat = parseInt(Realseat[0]);
//     let berthNumber = parseInt(Realseat[1]);

//     //console.log(Totalseat);
//     //console.log(berthNumber);

//     if(berthNumber > Totalseat){
//         console.log("Invalid")
//     }
//     else{
//         berthNumber = berthNumber % 8
//         if(berthNumber == 0){
//             console.log("SU")
//         }
//         else{
//             console.log(Berth[berthNumber - 1])
//         }
//     }
    
// } 

//---------------------------------------------------------------------------------------------------------------------------------

// Min occurance 

// let NumberofInput = parseInt(readLine());

// arr = []
// for(i = 0 ; i < NumberofInput ; i ++){
//   arr[i] = parseInt(readLine());
// }

// FirstNumber = arr[i]
// count = 0

// for(i = 0; i < NumberofInput ; i++){
//   if(arr[i] === FirstNumber){
//     count++
//   }
// }
// console.log(count)

//-------------------------------------------------------------------------------------------------------------------------------------

//Max occurrences

// let sz = parseInt(readLine());

// arr = []
// for(i = 1 ; i < sz ; i++){
//   arr.push(parseInt(readLine()))
// }

// let maxcount = 0
// let Currcount = 1

// for(i = 1;i<sz;i++){
//   if(arr[i] == arr[i -1]){
//     Currcount ++;
//   }
//   else{
//     if(maxcount< Currcount){
//       maxcount == Currcount
//     }
//     Currcount = 1;
//   }
// }
// let res = [];
// Currcount = 1;
// for(let i =1 ; i <sz; i++){
//   if(arr[i] == arr[i-1]){
//     Currcount++;
//   }
//   else{
//     if(maxcount == Currcount){
//       res.push(arr[i-1]);
//     }
//     Currcount = 1;
//   }
// }
// if(Currcount == maxcount){
//   res.push(arr[sz-1]);
// }
// for(let i =0 ; i< res.length; i++){
//   console.log(res[i])
// }


//-----------------------------------------------------------------------------------------------------------
