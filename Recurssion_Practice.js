// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

//  problem 1----------->   printing from 6 to 1   <---------------------------------------------------

 // recurssion ---> bigger problem solved in small sub problem

// function printNumber(n){ //5 //4 //3 //2 //1 //0
//   //base condition
//     if(n == 0)return 0 //0 ==0

//     console.log(n) //-->5 -> 4 -> 3 -> 2 -> 1
//     return printNumber(n-1) //5-1 -> 4 // 3 //2 // 1 // 0
//   }
//   let n = 5 // input 5
//   console.log(printNumber(n)) // here i'm calling function printNumber(n)

// problem 2----------------------------------------> printing from  1 to 5 <-----------------------------------------------------------------------------

function printNumber(n){//1 //2
    //base condition 
    if(n ==5)return 5
    console.log(n)

    return printNumber(n+1) //1 +1
}
  let n = 1 // input 5
  console.log(printNumber(n)) // here i'm calling function printNumber(n)


// --------------------problem 3---------------------------- print Numbers ---------------------------------------------------

// function printNumber( i , n , sum){
//   //base case
//   if(i == n){
//     sum = sum+1;
//     return sum
//   }
//   sum = sum+i
//   return printNumber(i+1 , n ,sum)
// }
// console.log(printNumber(0 , 5 , 0))

// -------------------------------------problem 4--------------------factorial of Number n ---------------------------------------------------

// function printfactoria(n){
//   if(n ==1 || n ==0){
//     return 1;
//   }
  
//   return (n * printfactoria(n-1))
// }
// let n = 3
// console.log(printfactoria(n))

// -------------------------problem 5-----------------------------fibonacci of Number n ---------------------------------------------------------------------

// function fibonacci(n){
//   if(n==0){
//     return 1
//   }
//   if(n==1){
//     return 1
//   }
  
//   console.log(fibonacci(n))
//   return fibonacci(n-1) * fibonacci(n-2);
// } 
// let n = 3
// console.log(fibonacci(n))

// problem 6----------calculatePower ---------------------------------------------------

// function calPower(x , n){ 
//   if(n == 0){
//     return 1 //base case 1
//   }  
//   if(n == 1){
//     return 1 // base case 2
//   }
//   let xPower1 = calPower(x , n-1) // kaam  
//   let xpow = x * xPower1 
//   return xpow;
// }
// console.log(calPower(2 , 5))

// problem 7---------calculate power (log n ) ---------------------------------------------------

// function calPower(x , n){
//   if(n == 0){
//     return 1 //base case 1
//   } 
//   if(n == 1){
//     return 1 // base case 2
//   }
//   if(n%2 == 0){
//     return calPower(x,n/2)*calPower(x,n/2)
//   }
//   if(n%2 != 0){
//     return calPower(x, Math.floor(n/2)) * calPower(x,Math.floor(n/2))*x 
//   }
// }

// console.log(calPower(2,5))

// function sumOfFirstN(n){
// 	// Implement this function
// 	let result=""
// 	console.log(n)
// 	if(n==1){
// 		// sumOfFirstN(n)=1
// 		// console.log(sumOfFirstN(n))
// 		return 1
// 	}
// 	else{	
// 		return n+sumOfFirstN(n-1)
// 	}
// }
// let n = 5//5
// for(i=1;i<=n;i++){ //5 // 4 // 3 // 2 //1
// 	console.log(i, sumOfFirstN(i))
// }

//------------------------------------------------------poratl question -------------------------------------------------------------------
// function hackMoney(startMoney , targetMoney){
// 	//base Case
// 	if(startMoney == targetMoney){
// 		return 1;
// 	}
// 	if(startMoney > targetMoney){
// 		return 0
// 	}
// 	return hackMoney(startMoney *10 , targetMoney) || hackMoney(startMoney *20 , targetMoney)
// }

// let n = parseInt(readLine())
// console.log(n)
// for(i=0 ; i< n ; i++){
// 	let targetMoney = parseInt(readLine())
// 	//console.log(targetMoney)
// 	let ans =  hackMoney(1 , targetMoney) 
// 	if(ans == 1){
// 		console.log("Yes")
// 	}
// 	else{
// 		console.log("No")
// 	}
// }

// Recursive Sequence
// function recursiveSeq(sn , count , N ){
// 	let i , prod = 1
// 	if(count == N+1){
// 		return 0
// 	}
// 	for(i=sn ;i<sn+count ; i++){
// 		prod = prod*i
// 	}
// 	return prod + recursiveSeq(i , count+1, N)
// }
// let n = parseInt(readLine())
// // console.log(n)
// for(i =0 ; i< n ;i++){
// 	let N = parseInt(readLine())
// 	// console.log(N)
// 	console.log(recursiveSeq(1,1,N))
// }

//Reverse String: Recursive----------------------------------------------------------------------------------------------------------
// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// let n = parseInt(readLine())
// console.log(reverseString('hello'))

//------------------------------------------ 2 nd lecture -------------------------------------------------------------------------------------

// Tower of henoi

// function towerOfHenoi(n , source , helper , destination ){
//   //base Condition
//   if(n==1){
//     console.log("transfer disk "+ n + " from  "+ source + " from " + destination)
//     return ;
//   }
//   towerOfHenoi(n-1 , source ,destination , helper)
//   console.log("transfer disk "+ n  + " from  "+ source + " from " + destination);
//   towerOfHenoi(n-1 ,helper , source , destination)
// }
// let n = 2
// console.log(towerOfHenoi( n , "S" , "H" , "D"))

// Reverse A string :----------------------------------------------------------------------------------------------------------------

// function printRev(str , n){
//   if(n ==0){
//     console.log(str.charAt(n))
//     return
//   }
//   console.log(str.charAt(n))
//   return printRev(str , n-1)
// }
// let str = "abcd"
// console.log(printRev(str , str.length-1));

// find the first and last occurance in the string------------------------------------------------------------------------------

// 

// check if an aaray is sorted (stricky increasing)--------------------------------------------------------------------------

// function aaraySorted(arr , n){
//   //base case
//   if(n == arr.length-1){
//     return true 
//   }
//   if(arr[n] < arr[n+1]){
//     //aaray is sorted till now 
//     return  aaraySorted(arr , n+1);
//   }
//   else{
//     return false;
//   }
// }
// let arr = [1,2,3,5]
// console.log(aaraySorted(arr , 0));

//move all x to the end of the string

// function moveAllX(str , n , count , newString){
// //base Case
//   if(n == str.length-1){
//     for(i = 0 ; i<count ; i++){
//       newString += 'x'
//     }
//     console.log(newString);
//     return
//   }
//   let currChar = str.charAt(n)
//   if(currChar == 'x'){
//     count++
//     moveAllX(str ,n+1 ,count , newString)
//   }
//   else{
//     newString += currChar; // new sting = new string +currchar
//     moveAllX(str . n+1 , count,newString)
//   }
// }
// let str = "absxmfioxpoxpxuxnxm"
// console.log(moveAllX(str, 0 ,0, ""))

// remove dupliacte n a string---------------------------------------------------------------------------------------------------------

// let str = "aabbccda"
// // let map = new Boolean[26];
// function removeDev(){
//     //base Condition
//     if(n == str.length()){
//         console.log(newString);
//         return;
//     } 
//     function removeDev(str , n , newString){
//         let currChar = sar.charAt(n)
//     }   if(map[currChar - 'a' == true]){
//         removeDev(str , n+1 ,newString)
         
//     }
//     else{
//         newString += currChar;
//         map[currChar - 'a'] == true;
//         removeDev(str , n+1 ,newString)
//     }
// }
// console.log(removeDev(str,0 ,""))

// print all the subsequences of a String---------------------------------------------------------------------------------------------
//Important --------------------------------
// function subsequence(str , n ,newString){ // str -> strin , n -> index , newString -> to store the value
//     //base case
//     if(n == str.length){
//         console.log(newString)
//         return;
//     }
//     let currChar = str.charAt(n) // indexing 
//     //to be
//     subsequence(str,n+1,newString+currChar)
//     //or not to be
//     subsequence(str,n+1,newString)
// }
// let str = "abc"
// console.log(str, 0 , "") //tc - O(n)

//print all the unique subsequnce of a string---------------------------------------------------------------------------


// function subsequence(str , n ,newString){// str -> strin , n -> index , newString -> to store the value
//         //base case
//         if(n == str.length){
//             if(setInterval.contain(newString)){
//                 return
//             }
//             else{
//                 console.log(newString);
//                 setInterval.add(newString)
//                 return;
//             }
//         }
//         let currChar = str.charAt(n) // indexing 
//         //to be
//         subsequence(str,n+1,newString+currChar)
//         //or not to be
//         subsequence(str,n+1,newString)
//     }
//     let str = "abc" 
//     //use hash here
//     console.log(str, 0 , "") //tc - O(n)

//----------------------------------------Portal question on Recursssion Question---------------------------------------------------------------------

// Factorial Recurssion

// let number = -2

// function factorial(number){
//     if(number < 0){
//         return undefined
//     }
//     if(number == 0 || number == 1){
//         return 1;
//     }
//     return number * factorial(number-1)
// }
// console.log(factorial(number));

//Recursive Sequence

// let testCase = parseInt(readLine()) // 3
// // console.log(testCase);

// for(i = 0 ; i< testCase ; i++){ // 1 // 2 //5
//     let N = parseInt(readLine())
//     // console.log(N)
//     console.log(recurssionSeq(1,1,N))
// }

// function recurssionSeq(sn , count , N ){
//     let i , prod = 1
//     if(count == N+1){
//         return 0
//     }
//     for(i = sn ; i < sn + count ; i++){
//         prod = prod * i
//     }
//     return prod + recurssionSeq(i , count + 1 , N);
// }

//GCD: Recursive

// function gcd(a , b){
//     if(b == 0 ){
//         return a
//     }
//     else{
//         return gcd(b , a%b)

//     } 
// }
// let n = parseInt(readLine())
// console.log(n)
// while(n > 0){
//     let input = readLine().split(" ")
//     console.log(input)
//     let a = parseInt(input[0])
//     console.log(a);
//     let b = parseInt(input[1])
//     console.log(b)
// }

//Palindrome: Recursive------------------------------------------------------------------------------------------------------------------

// function Palindrome(str , left , right){
//     if(left >= right){
//         return true
//     }
//     return str[left] == str[right] && Palindrome(str,left +1 , right-1)
// }
// let n = parseInt(readLine())
// // console.log(n);
// for(i = 0 ; i < n ; i++){
//     let str = readLine()
//     // console.log(str)
//     let res = Palindrome(str,0,str.length-1)
//     if(str == res){
//         console.log("True")
//     }
//     else{
//         console.log("False")
//     }
// }

//Recursive Print-------------------------------------------------------------------------------------------------------------------------

// function printRecursive( left , right){
//     let res = "" 
//     if(left == right){
//         return right
//     }
//     res = left + " " 
//     return res + printRecursive (left+1 , right) 
// }

// let testCase = parseInt(readLine())
// // console.log(testCase);
// for(i = 0 ; i < testCase ; i++){
//     let input = readLine().split(" ").map(Number)
//     // console.log(input)
//     let left = parseInt(input[0]);
//     // console.log(left);
//     let right = parseInt(input[1])
//     // console.log(right)
//     console.log(printRecursive(left , right))

// }
//-------------------------------------------------------------------------------------------------------------------------------------------------






