let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

// unorder - list

// let k = parseInt(readLine())
// // console.log(k)
// let num = parseInt(readLine())
// // console.log(array)

// function unordelist(){
//     for(let i = 0 ; i < num ; i++ ){
//         let val = parseInt(readLine())
//         if(val == k){
//             return i
//         }
//     }
//         return -1
// }
// unordelist(k , num)

//strange

// let num = parseInt(readLine())
// // console.log(num)

// var count1 =0

// for(let i = 0 ; i < num ; i++){
//     let arr = readLine().trim().split("").map(Number)
//     let sum = 0;
//     let mul = 1
//     for(let j = 0 ; j < arr ; i++){
//         sum = sum + arr[j]
//         mul = mul + arr[j]
//     }
//     if(sum >= mul){
//         count++
//     }
// }
// console.log(count1)

// sum of evene numbers

// let n =  parseInt(readLine())
// // console.log(n)

// let arr = readLine().trim().split("").map(Number)
// // console.log(arr)

// let sum = 0
// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] % 2 == 0){
//         sum += arr[i]
//     }
// }
// console.log(sum)

// max diffrence

//



// double ajent

// let num = parseInt(readLine());
// // console.log(num);

// let ajent = readLine().split(" ");
// // console.log(ajent);
// let myMap = new Map();

// for (let word of ajent) {
//   let sorted = word.split("").sort().join("");
//   // console.log("sorted" , sorted)
//   if (myMap.has(sorted)) {
//     myMap.set(sorted, myMap.get(sorted) + 1);
//   } else {
//     myMap.set(sorted, 1);
//   }
// }
// console.log(Math.max(...myMap.values()));


// toggle

// let str = readLine().split('')
// // console.log(str)

// let res = ''
// for(let i = 0 ; i < str.length ; i++ ){
//     if(str[i] == str[i].toUpperCase()){
//         res += str[i].toLowerCase()
//     }
//     else if(str[i] == str[i].toLowerCase()){
//         res += str[i].toUpperCase()
//     }
// }
// console.log(res)

// flower sorting

// function Sorted(array){
//   if (array.length <= 1) {
//     return array;
//   }

//   var pivot = array[0];

//   var left = [];
//   var right = [];

//   for (var i = 1; i < array.length; i++) {
//     array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
//   }

//   return Sorted(left).concat(pivot, Sorted(right));
// }






