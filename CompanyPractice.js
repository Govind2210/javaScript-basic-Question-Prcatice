// find the second lowest and heigesg from unsorted array

// let array = [17,22,8,94,44,26,32]

// 1st way------------------------- one-Liner ---------------------------

// let sorted = array.sort((a,b)=> a - b) // sorting the array

// console.log(sorted[1]) // finding 2 lowest from array 

// console.log(sorted[sorted.length-2]) // finding 2 higest from array 


// 2nd Way------------------------------------------------------------------

// function findSecondLargestElem(arr){
//     let first = -1 , second = -1
//     for(let i = 0 ; i < arr.length ; i++){
//         if(arr[i] > first){
//             second = first
//             first = arr[i]
//         }
//         else if(arr[i] > second && arr[i] != first){
//             second = arr[i]
//         }
//     }
//     console.log(second)
// }

// let arr = [1,2,3,4,5,6,7,8,9]
// findSecondLargestElem(arr)

// sorted array ---------------------------------------------------------------------------------------

// function sorting(arr){
//     for(let i = 0 ; i < arr.length ; i++){
//         for(let j = i+1 ; j < arr.length ; j++){
//             if(arr[i] > arr[j]){
//                 temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     console.log(arr)
// }
// let arr = [ 55,7,99,3,4,88,45,36]
// sorting(arr)


// Steps all prime number divisor of number ---------------------------------------------------------
// if any iteration you will find the divisor of number then print it and divide it N by same Number untill it can be divided !

// let N = 4 ; 
// for(let i = 2 ; i < Math.sqrt(N) ; i++){
//     if(N % i == 0 ){
//         while(N % i == 0){
//             console.log(i)
//             N = N / i
//         }
//     }
// }
// if(N != 1){
//     console.log(N)
// }

// find the prime Number 1 - 100 ----------------------------------------------------------------

// for(let i = 2 ; i < 100 ; i++){
//     for(var j = 2 ; j < 100; j++){
//         if(i % j == 0){
//             break;
//         }
//     }
//     if(i == j){
//         console.log(i)
//     }
// }

// traling of zeros 

// let N  = 30
// let targetzero = 0
// for(let i = 5 ; i <= N ; i=i*5){
//     trailingZero = targetzero + Math.floor(N / i);
// }
// console.log(trailingZero)


// binary into decimal code

// let N = 50
// let binaryRepresentation  = ""
// for( ;N != 0;){
//     binaryRepresentation = N % 2 + binaryRepresentation
//     N = Math.floor(N/2)
// }
// console.log(binaryRepresentation)

// count occurance using Hashmap

// let Input = "aaabbbbbbccddde"
// let myMap = new Map()

// for(let i = 0 ; i < Input.length ; i++){
//     if(myMap.has(Input[i])){
//         myMap.set(Input[i] ,myMap.get(Input[i])+1)
//     }
//     else{
//         myMap.set(Input[i] , 1)
//     }
// }
// console.log(myMap)

// reverse the number

let k = 123
let num = k
let lastNum 
let result = 0
while(num != 0){
    lastNum = num % 10
    result = result * 10 + lastNum 
    num = parseInt(num / 10)
}
console.log(result)


