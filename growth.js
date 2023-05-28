// let fs = require("fs");
// const { format } = require("path");
// const { monitorEventLoopDelay } = require("perf_hooks");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

// let n = parseInt(readLine())
// //console.log(n)
// sum = 0

// for (i = 0 ; i < n ; i++){
//     let num = parseInt(readLine())
//    // console.log(num)
//     sum = sum + num
//     avg = sum / n
    
// }
// if (avg > 100){
//     console.log("Excellent!")
// }
// else {
//     console.log("Not Excellent!")
// }

// let num = parseInt(readLine())
// // console.log(num);
// sum = 0
// arr =[]
// for(i = 0 ; i < num ; i++){
//     arr[i] = parseInt(readLine())
//     while(i < arr){
//         sum += sum
//         avg = sum/num
//         i++
//     }
//     // console.log(avg)
// }

// if(avg > 100){
//     console.log("Excellent!")
// }
// else{
//     console.log("Not Excellent!")
// }

// let queryNumber = parseInt(readLine());
// // console.log(queryNumber)

// let number = readLine()
// // console.log(number);

// arr = []
// for(i=0 ; i<number ; i++){
//     arr[i] = parseInt(readLine())
// }
// // console.log(arr)

// count = 0
// for(i=0 ; i < arr.length ; i++){
//     if(arr[i] == queryNumber){
//         count++
//     }
// }
// console.log(count)
    
// let number = parseInt(readLine());
// // console.log(number);
  
// arr = []
// for(i=0 ; i<number ; i++){
//     arr[i] = parseInt(readLine())
// }
// // console.log(arr)

// maxNum = arr[0]
// for(i = 0 ; i< arr.length ; i++){
//     if(arr[i] > maxNum){
//         maxNum = arr[i]
//     }
//     console.log(maxNum)
// }

// let num = parseInt(readLine())
// // console.log(num)

// let A = readLine().split(" ")
// // console.log(A)

// sum = 0;
// for(i=0 ; i < num ; i= i+2){
//     sum = sum + parseInt(A[i])
// }
// console.log(sum)

// let n = parseInt(readLine());
// let arr =[]
// for(let i =0 ; i< n;i++){
// 	arr[i] = parseInt(readLine());
// }
// let count=1
// let max =1
// for(let i =0;i<n;i++){
// 	if(arr[i]==arr[i-1]){
// 		count++
// 	}
// 	else{
// 		max=Math.max(max,count);
// 		count=1;
// 	}
//     // console.log(max)
// }
// console.log(count)

// let Input = parseInt(readLine())
// // console.log(Input)

// arr = []
// for(i=0 ; i < Input ; i++){
//     arr[i] = parseInt(readLine())
// }

// function shuffle(arr){
//     //Implement this function
// 	    console.log(arr) // array [2 5 1 3 4 7]
//     let mid= arr.length/2
//     // console.log(mid) // 3
//     let temp=mid
//     // console.log(temp) // 3
//     let newArr=[]
//     // console.log(mid)
//     for(i=0;i<temp;i++){
//         // console.log(i,mid)
//         newArr.push(arr[i])
//         newArr.push(arr[mid])
//         mid++ 
//     }
//     // console.log(newArr)
//     return newArr
// }

// let clovkNUmber = readLine().split(" ")
// // console.log(clovkNUmber)
// let numberofTimeRotation = parseInt(readLine())
// // console.log(numberofTimeRotation)

// arr = []
// for(i=0 ;i <clovkNUmber ; i++){
//   arr.push(clovkNUmber(i))
// }

// for(i=0 ; i<arr.length ; i++){
//   let element = arr.pop()
//   // console.log(element)
//   arr.unshift(element)
//   for(i in arr)
//   console.log(arr[i])
// }

// let queryNumber = parseInt(readLine());
// // console.log(queryNumber);

// let number = readLine()
// // console.log(number);

// arr= []
// for(i =0 ;i<number ; i++){
//   arr[i] = parseInt(readLine())
// }
// // console.log(arr);

// count = 0
// for(i =0 ; i<arr.length ; i++){
//   if(queryNumber == arr[i]){
//     count++
//   }
//   // console.log(count)
// }
// console.log(count)

// let number = parseInt(readLine());

// arr= []
// for(i=0;i<number ; i++){
//   arr[i] = parseInt(readLine())
// }
// // console.log(arr);

// maxProduct = arr[0] * arr[1]
// // console.log(maxProduct);

// for(i=0 ; i <arr.length ; i++){
//   out = arr[i] * arr[i+1]
//   if(out > maxProduct){
//     maxProduct = out
//   }
// }
// console.log(maxProduct)

// let number = parseInt(readLine())
// // console.log(number)

// let arr = readLine().split(" ").map(x => parseInt(x))
// // console.log(arr)

// let sum= 0
// for(i = 0 ; i<arr.length ; i = i+2){
//   sum +=  arr[i]
// }
// console.log(sum)

