// iterations for natural numbers

// const { count } = require("console")

// let c = 3
// for(let i = 1 ; i <= c ; i++){
//   let mul = i * c
//   console.log(mul)
// }

//premeter of rectiangle

// let length = 7
// let breadth = 3

// if(length > 0 && breadth > 0){
//   let peri = (length + breadth) * 2
//   console.log(peri)
// }
// else{
//   console.log(0)
// }

// ABC odd

// let A = 3
// let B = 1
// let C = 3
// let result = A * B * C
// if(result % 2 ==0){
//   console.log("No")
// }
// else{
//   console.log("Yes")
// }

// Product Sum

// let input  =  4421
// let Num = input.toString().split('')
// let realNum = Num.map(Number)
// let product = 1
// let sum = 0
// for(let i = 0 ; i < realNum.length ; i++){
//   product = product * realNum[i]
//   sum = sum + realNum[i]
// }
// console.log(product - sum)

// Mac Book :-

// let input = [10,-20,30,40,50]

// sum = 0
// for(let i = 0 ; i <  input.length ; i++){
//   if(input[i] > 0){
//     sum += input[i]
//   }
// }
// console.log(sum)

// eating symbol :-

// let input = '+-++'
// let neInpt = input.split('')
// let sum = 0
// for(let i = 0 ; i < neInpt.length ; i++){
//   if(neInpt[i] == '+'){
//     sum++
//   }
//   else if(neInpt[i] == '-'){
//     sum--
//   }
// }
// console.log(sum)

// count First
// let input = [10,20,30,40,10]
// let firstNum = input[0]
// let count = 0
// for(let i = 0 ; i < input.length ; i++){
//   if(firstNum == input[i]){
//     count++
//   }
// }
// console.log(count)

// Predict The Quadrant
/**
 *  Q1, if x > 0 and y > 0
    Q2, if x < 0 and y > 0
    Q3, if x < 0 and y < 0
    Q4, if x > 0 and y < 0
 */

// let x = 1
// let y = 3

// function predict(x , y){
//     if(x > 0 && y > 0 ){
//       console.log("Q1")
//     }
//     else if(x < 0 && y > 0){
//       console.log("Q2")
//     }
//     else if(x < 0 && y < 0) console.log("Q3")
//     else if(x > 0 && y < 0) console.log("Q4")
// }
// console.log(predict(x , y))

// Area of rectiangle

// let l = 5
// let b = 3
// function areaRectiangle(l , b){
//   if(l < 0 || b < 0){
//     console.log(0)
//   }
//   else{
//     return l * b
//   }
// }
// console.log(areaRectiangle(l , b))

// clock

// let num1 = 3
// let num2 = 15
// let result = num1 + num2
// if(result < 12){
//   console.log(result)
// }
// else if(result % 12 != 0){
//   console.log(result % 12 )
// }
// else if(result % 12 == 0){
//   console.log(12)
// }

// reverse Integer

// let num = 1230145468454

// let res = 0
// let last
// while(num != 0){
//   last = num % 10
//   res = res * 10 + last
//   num = Math.floor(num / 10)
// }
// console.log(res)

// Palindrome:-

// let Nub = 1222
// let k = Nub
// let last
// let res = 0
// while(k != 0){
//   last = k % 10;
//   res = res * 10 + last
//   k = Math.floor(k / 10)
// }
// if(Nub == res){
//   console.log("It is Plaindrome")
// }
// else{
//   console.log("No it is Not Plaindrome")
// }

// Array

// Lucky Number

// letunction findLucky(x){
//    let count = 1;
//    let current  = x[0]
//    for(let i = 1 ; i < x.length ; i++){
//       if(current == x[i]){
//          count++
//       }
//       else if(count == current){
//          return current
//       }
//       else{
//          current = x[i]
//          count = 1
//       }
//    }
//    if(count == current) {
//       console.log(current)
//    }else{
//       console.log(-1)
//    }
// }
// console.log(findLucky(x)) x = [2,2,3,4]

// Count occurance

// let queryInteger = -3
// let array = [5,-28,-3,124,-3,87]
// let count = 0
// for(let i = 0 ; i< array.length ; i++){
//    if(array[i] == queryInteger){
//       count++
//    }
// }
// console.log(count)

// Alternative Sort

/**
 * even --> decreasing order is 23 8 -19
 * odd --> increasing order is -4 31.
 */

// let array = [23,-4,8,31,-19]
// // console.log(array.length)

// function sorting(array){

//    while(array-- > 0){
//       let arr = []
//       let even = []
//       let odd = []
//       for(let i = 0 ; i < array.length ; i++){
//          if(i % 2 ){
//             even.push(array[i])
//          }
//          else{
//             odd.push(array[i])
//          }

//          for(let i = 0 ; i <even.length ; i++){
//             for(let j = 0 ; j < even.length ; j++){
//                if(even[j] < even[i]){
//                   let temp = even[i]
//                   even[i] = even[j]
//                   even[j] = temp
//                }
//             }
//          }

//          for(let i = 0 ; i <odd.length ; i++){
//             for(let j = 0 ; j < odd.length ; j++){
//                if(odd[j] < odd[i]){
//                   let temp = odd[i]
//                   odd[i] = odd[j]
//                   odd[j] = temp
//                }
//             }
//          }

//       }
//       let answer = []
//       for(let i = 0 ; i < arr.length ; i++){
//           if(i%2==0){
//               answer.push(even[i/2])
//           }
//           else{
//               answer.push(odd[parseInt(i/2)])
//           }
//       }
//       for(let i =0 ;i< answer.length ;i++){
//           console.log(answer[i])
//       }

//    }

// }
// console.log(sorting(array))

// max by now

// let arr = [3,2,5,10,8]

// let ans = []
// let max = arr[0]
// for(let i = 0 ; i < arr.length ; i++){
//    if(max > arr[i]){
//       ans.push(max)
//    }
//    else{
//       max = arr[i]
//       ans.push(max)
//    }
// }
// console.log(ans)

// sorted Square

// let array = [5,-4,-1,0,3,10]
//  let ans = []
// for(let i = 0 ; i < array.length ; i++){
//    let neNum = Math.abs(array[i])
//    // console.log("neNum" , neNum)
//    let square = neNum * neNum
//    // console.log("square" , square)
//    ans.push(square)
// }
// let sorted = ans.sort((a ,b) => a - b)
// console.log(sorted)
//

// growth

// let array = [5,10,20,30,40,50]

// let Numtot = array.length-1
//  let sum = 0
// for(let i = 0 ; i < array.length ; i++){
//    sum += array[i]
// }
// let average = sum / Numtot
// if(average > 100){
//    console.log("Excellent!")
// }
// else{
//    console.log("Not Excellent!")
// }

// color sort

// let color = [2,0,2,1,1,0]

// for(let i = 0 ; i < color.length ; i++){
//    for(let j = i+1 ; j < color.length ; j++){
//       if(color[i] > color[j]){
//          let temp = color[i]
//          color[i] = color[j]
//          color[j] = temp
//       }
//    }
//    console.log(color[i])
// }

// prime Number

// for(let  i = 2 ; i <= 100 ; i++){
//    for(var j = 2 ; j < i ; j++){
//       if(i % j == 0){
//          break;
//       }
//    }
//    if(i == j){
//       console.log(i)
//    }
// }

// Strings

// let string = 'aa'

// function nonRepating(string){
//    let map = {}
//    let arr = string.split('')
//    for(let i = 0 ; i < arr.length ; i++){
//       if(map[arr[i]]){
//          map[arr[i]]+1
//       }
//       else{
//          map[arr[i]] = 1
//       }
//    }
//    for(let i = 0 ; i < arr.length ; i++){
//       if(map[arr[i]] === 1){
//          return i
//       }
//    }
//    return -1
// }
// console.log(nonRepating(string))

// trek

// let trek = "UDDDUDUU"
// function trekValue(trek){
//    let newString = trek.split('')
//    // console.log(newString)
//    let upper = 'U'
//    let Down = 'D'
//    let sum = 1
//    for(let i = 0 ; i < newString.length ; i++){
//       // console.log(newString[i])
//       if(newString[i] == upper){
//          sum++
//       }
//       else if(newString[i] == Down){
//          sum--
//       }
//    }
//    console.log(sum)
// }
// trekValue(trek)

// substring

// let str = "abcabcbb"

// function subString(s){
//    // console.log(str)
//    if (s.length <= 1) return s.length;
// 	const seen = new Map();
// 	let left = 0, longest = 0;
// 	for (let right = 0; right < s.length; right++) {
// 		const currChar = s[right];
// 		const prevSeenChar = seen.get(currChar);
// 		if (prevSeenChar >= left) left = prevSeenChar + 1;
// 		seen.set(currChar, right);
// 		longest = Math.max(longest, (right - left + 1));
// 	}
// 	return longest;
// }

// Add string

// let num1 = "11", num2 = "123"

// function AddString(num1 ,num2){

//    let i = num1.length - 1;
//     let j = num2.length - 1;
//     let sum = 0, carry = 0, x, y;
//     let result = "";
//     while(i>=0 || j>=0){
//         x = i < 0 ? 0 : num1.charAt(i) - "0";
//         y = j < 0 ? 0 : num2.charAt(j) - "0";
//         sum = (x + y + carry) % 10;
//         carry = Math.floor((x + y + carry) /10);
//         result =  sum + result;
//         i--;
//         j--;
//     }

//     if(carry!=0){
//         result =  carry + result;
//     }

//   console.log(result) ;
// }

// AddString(num1 ,num2)

// resver the string

// function reverseStr(str){
//    let result = ""
//    for(let i = str.length -1 ; i>=0 ;i--)
// {
//    result += str[i]
// }

// console.log(result)
// }

// reverseStr("Hello")

// function palidromeStr(str){
//    let k = str;
//    let result = ""
//    for(let i = str.length - 1 ; i >= 0 ; i--){
//       result += str[i]
//    }
//    if(result == k){
//       console.log("this is plaindrome")
//    }
//    else{
//       console.log("this is not a plaindrome")
//    }
// }

// palidromeStr("aba")

// 49. Group Anagrams

// let strs = ["eat","tea","tan","ate","nat","bat"]

// function Anagrams(strs){
//    let obj = {}
//    for(let word of strs){
//       // console.log("strs-->" , strs)
//       let sorted = word.split('').sort().join()
//       // console.log("sorted" , sorted)
//       if(sorted in obj){
//          obj[sorted].push(word)
//          // console.log("word" , word)
//       }
//       else{
//          obj[sorted] = [word]
//          // console.log("word-->" , word)
//       }
//    }
//    console.log(Object.values(obj))
// }

// Anagrams(strs)

// 22. Generate Parentheses

// let n = 3
// function Parentheses(n){
//    console.log(n)
//    let ans = []
//    function solution(opening , closing , str){
//       if(opening == 0 && closing == 0){
//          ans.push(str)
//       }
//       if(closing < opening){
//          return
//       }
//       if(opening != 0){
//          solution(opening-1 , closing , str+"(")
//       }
//       if(closing != 0){
//          solution(opening , closing-1 , str+")")
//       }
//    }
//    solution(n ,n,"")
//    console.log(ans)
// }
// Parentheses(n)

// Recurssion

// Distance covering

// let n = 2

// function DistanceCovering(current , target){
//    if(current == target){
//       return 1
//    }
//    if(current > target){
//       return 0
//    }
//    return DistanceCovering(current +1 , target) + DistanceCovering(current +2 , target)
// }
// DistanceCovering(0 , n)

// Neighbours
// function panel(panelSize, i , numberOfAdjacentA,numberOfAdjacentB, currStr, arrangemnts) {
// 	if(i==panelSize){
// 		arrangemnts.push(currStr)
// 		return
// 	}
// 	if(numberOfAdjacentA !==2){
// 		panel(panelSize,i+1,numberOfAdjacentA+1,0,currStr+'a',arrangemnts)

// 		if(numberOfAdjacentB !==2){
// 			panel(panelSize,i+1,0,numberOfAdjacentB+1,currStr+'b',arrangemnts)
// 		}
// 	}
// 	else{
// 	    panel(panelSize,i+1,0,numberOfAdjacentB+1,currStr+'b',arrangemnts)
// 	}

// }
// function realPanel(n){
//    let arrguments = []
//    panel(n ,0,0, 0, "" , arrguments)
//    arrguments.sort()
//    for(let i = 0 ; i < arrguments ;i++){
//       console.log(arguments[i])
//    }
// }
// let n = 4;
// realPanel(n)

// Valid Palindrome: Recursive

// let str = "tenet"
// function Palindrome(str){
//    let newStr = str.toLowerCase().replace(/[^0-9a-z]/g, "")
//    let left = 0 , right = newStr.length-1
//    let count = 0
//    while(left < right){
//       if(newStr[left] !== newStr[right]) {
//          count++
//       }
//       else{
//          left++
//          right--
//       }
//    }
//    if(count != 0){
//       console.log("False")
//    }
//    else{
//       console.log("True")
//    }
// }
// Palindrome(str)

// finding prime numbers

// for( i = 2 ; i < 100 ; i++){
//    for(j = 2 ; j < i ; j++){
//       if(i % j == 0){
//          break;
//       }
//    }
//    if(i == j ){
//       console.log(i)
//    }
// }

// pallindrome

// let s = "A man, a plan, a canal: Panama"

// function pallindrone(s){
//    console.log(s)
//    let newStr = s.toLowerCase().replace(/[^0-9a-z]/g , "")
//    let left = 0 ; right = newStr.length-1
//    while(left < right){
//       if(newStr[left] != newStr[right])console.log("false")
//       left++
//       right--
//    }
//    console.log("true")

// }
// pallindrone(s)

// 78. Subsets

// let nums = [1,2,3]

// function subSet(nums){
// console.log(nums)
// let reqArr = [[]]
// for(let ele of nums){
//    let currArr = reqArr.length
//    for(i = 0 ; i < currArr ; i++){
//       let subArr = [...reqArr[i] , ele]
//       reqArr.push(subArr)
//    }
// }
// console.log(reqArr)

// }
// subSet(nums)

// 46. Permutations

// var permute = function(nums) {
//    const output = [];

//   const backtracking = (current, remaining) => {
//       if (!remaining.length) return output.push(current);

//       for (let i = 0; i < remaining.length; i++) {
//           const newCurrent = [...current];
//           const newRemaining = [...remaining];

//           newCurrent.push(newRemaining[i]);
//           newRemaining.splice(i, 1);

//           backtracking(newCurrent, newRemaining);
//       }
//   }
//   backtracking([], nums);
// //   return output;
// console.log(output)

// };

// let nums =  [1,2,3]
// permute(nums)

// let data = [5, 3, 10, 6, 11];
// let max = data[0];

// for (i = 0; i < data.length; i++) {
//   for (let j = i + 1; j < data.length; j++) {
//     if (data[i] > data[j]) {
//       temp = data[i];
//       data[i] = data[j];
//       data[j] = temp;
//     }
//   }
// }
// console.log(data);

// let str ="smita"
// function reverse(str){
//    let r = ""
//    for(let i = str.length-1 ; i >= 0 ;i--){
//       r += str[i]
//    }
//    console.log(r)
// }
// reverse(str)

// let A = [20,10,7,5];

// function solution(A) {
//   // console.log(A)
//   let arr = [...A];
//   let even = []
//   let odd = []
//   for(let i = 0 ;i< arr.length ; i++){
//    if(arr[i] % 2 == 0){
//       even.push(arr[i])
//    }
//    else{
//       odd.push(arr[i])
//    }
//   }
//   const EVEmax = even.reduce((a, b) => Math.max(a, b), -Infinity)
//   const oddax = odd.reduce((a, b) => Math.max(a, b), -Infinity)
// console.log(EVEmax + oddax)
// }

// solution(A);

// time travel

// let speed = 60;
// let Distance = 600;

// let time = parseInt(Distance / speed)
// console.log(time)

// sum of Natural NUmber

// let n = 5;

// let result = n * (n +1) / 2
// console.log(result)

// sum mul n minus

// let a = 5;
// let b = 6

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)

// prime number

// for(let i = 2 ; i < 100 ; i++){
//    for(var j = 2 ; j < i ; j++){
//       if(i % j == 0){
//          break;
//       }
//    }
//    if(i==j){
//       console.log(i)
//    }
// }

// prime checker



// function primeChecker(n){
//    if(n<1){
//       console.log("false")
      
//    }
//    let count = 0
//    for(let i = 2 ; i < n ; i++){
//       if(n % i == 0){
//          count++
//       }
//    }
//    if(count == 0){
//       console.log("true")
//    }
//    else{
//       console.log("false")
//    }
// }
// let n = 2
// primeChecker(n)












