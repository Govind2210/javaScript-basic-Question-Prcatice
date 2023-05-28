// function ops (ops){
//     let record = [];

// const { deflateSync } = require("zlib");

//    for(let i = 0; i < ops.length; i++){
//        if(ops[i] === "C"){
//            if(record.length){
//                record.pop();
//            }
//        }else if(ops[i] === "D"){
//            if(record.length >= 1){
//                record.push(2 * record[record.length - 1]);
//            }
//        }else if(ops[i] === "+"){
//            if(record.length >= 2){
//                record.push(record[record.length - 1] + record[record.length - 2]);
//            }
//        }else{
//            record.push(parseInt(ops[i]));
//        }

//        // console.log(record)

//    }
//    let result = 0;
//    for(let i = 0; i < record.length; i++){
//        result += record[i];
//    }

//    return result;
// };

// convert 0 into 5 in the given number -------------------------------------------

// function convertNum(n){

//     let ans =""
//     n = n.toString();
//     for(let i = 0; i< n.length ;i++){
//         if(n[i] == '0'){
//             ans += '5'
//         }
//         else{
//             ans += n[i]
//         }
//     }
//     return parseInt(ans)
// }
// console.log(convertNum(4000007))

//First element to occur k times--------------------------------------------

// let nums = [2,3,1,1,4]
// // console.log(nums)
// console.log(car(nums))
// function car (nums){
//     let startNum = nums[0];
//     // console.log(startNum);

//     let lastNum = nums.length-1
//     // console.log(lastNum)

//     for(i=0 ; i< nums.length ; i = i + startNum){
//         if(startNum[i] == lastNum){
//             return false
//         }
//         else{
//             return true
//         }
//     }
// }

//  Add Two Numbers ----------------------------------------

// let l1 = [2,4,3]
// let l2 = [5,6,4]
// console.log(addTwoNumbers(l1 , l2))

//  function addTwoNumbers(l1, l2) {
//     let list1 = l1.join('') //243
//     let list2 = l2.join('') // 564
//     let num =  +list1 +  +list2
//     // console.log(num)//807
//     reverse = 0
//     while(num!=0){  //
//         reminder = num%10
//         reverse = reverse *10+reminder
//         num = parseInt(num/10)
//     }
//     return reverse
//     }

// Richest Customer Wealth-----------------------------

// let accounts = [[1,2,3],[3,2,1]]
// console.log(richMan(accounts))

// function richMan(accounts){
//     let sumOfWealth = []
//     for(i = 0 ; i< accounts.length ; i++){
//         sumOfWealth.push(accounts[i].reduce((previousValue , currentValue) => previousValue + currentValue));
//     }
//     console.log(sumOfWealth)
//  let number = 0;

//  for(i = 0 ; i < sumOfWealth.length ;i++){
//     if(sumOfWealth[i] > number){
//         number = sumOfWealth[i]
//     }
//  }
//  return number
// }

//Valid Perfect Square

// let nums = [18]
// console.log(validPrefectSqr(nums))

// function validPrefectSqr(nums){
//     for(i=0 ; i <nums.length ; i++){
//     let start = 0 , end = nums;
//     while(start< end){
//         let mid = parseInt(start+end / 2)
//         let square = mid * mid;
//         if(square === mid){
//             return true
//         }
//         if(square < mid){
//             start = mid-1
//         }
//         else{
//             end = mid -1
//         }
//     }
//     }
//     return false
// }

//  Roman to Integer --------------------------------------------------

// let roman = "IV"
// console.log(romanNumber(roman));
// function romanNumber(roman) {
//     let n = 0;
//     const number = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000,
//     };
//     // let size = roman.length
//     // console.log(size); //3

//     for (i = 0; i < roman.length; i++) {
//         if(i+1<roman.length && number[roman[i]]<number[roman[i+1]]){ //1<5
//             n-= number[roman[i]] //1-5=4
//         }
//         else{
//             n+= number[roman[i]] //I
//         }
//     }
//     return n
// }

// Remove Duplicates from Sorted Array

// let nums = [0,0,1,1,1,6,6,9,7,8,8,]
// console.log(removeDublicate(nums))

// function removeDublicate(nums){
//     let unique = [...new Set(nums)]
//     return unique
// }

// console.log(noDoubleNUm(nums))
// function noDoubleNUm(nums){
//     let indexNUm = 0
//     for(i =0 ; i<nums.length ; i++){
//         if(nums[i] != nums[i-1]){
//             nums[indexNUm] = nums[i]
//         }
//     }
//     return indexNUm

// }

// length of last word!

// Water Tank -----------------

// let height = [1,8,6,2,5,4,8,3,7]
// console.log(countWater(height))

// function countWater (height){
//     if (height.length < 2) return -1;
//     let left = 0;
//     let right = height.length-1 ;
//     let maxAmountWater = 0
//     while(left<right){
//       let currentAmountWater = 0;
//       maxAmountWater = Math.max(Math.min(height[left] , height[right]) * (right - left) , maxAmountWater)
//       if(height[left] < height[right]){
//         left++;
//       }
//       else{
//         right--;
//       }
//     }
//     return maxAmountWater
// }

// excell sheet problem:-

// A=1
// B=2
// C=3
// A-Z = 26
// AA => 26 + 1 = 27
// AB => 26 +2 = 28
// let string = 'AAA'
// console.log(excellsheet());
// function excellsheet (string){
//     let ans = 0;
//     let p = 0;
//     for(let i= string.length() -1 ; i>=0 ; i-- ){
//         let c = string.chatAt(i);
//         let val = c - 26 + 1;
//         let ans = val*Math.pow(26 , p)
//         p++
//     }
//     return ans;
// }
// let columnTitle = 'A';

//  function titleToNumber(columnTitle) {
//     const alpha = Array(26).fill(1).map(( _,i) => String.fromCharCode(65 + i))
//     let col = 0
//     for(i = 0; i < columnTitle.length; i++){
//         col = col * 26 + alpha.indexOf(columnTitle[i]) + 1
//     }
//     return col
// }

// reverse a string

// let str = 'Geeks'
// console.log(reverse(str))
// function reverse  (str){
//     if(str.length = 0){
//         return ""
//     }
//     return reverse(str.substring(1)) + str.charAt(0)
// }

//---------------------------------------------maxmium subarray------------------------------------------------------------

// nums = [-2,1,-3,4,-1,2,1,-5,4]
// console.log(adding(nums))
// function adding(nums){
//     let sum = null;
//     let subSum = 0;
//     for(let i =0 ;i < nums.length ;i++){
//         if(subSum < 0){
//             subSum =nums[i]
//         }
//         else{
//             subSum =subSum + nums[i]
//         }

//         if(sum === null || subSum > sum){
//             sum = subSum
//         }
//         else if( subSum<0 && subSum<sum){
//             subSum = 0
//             continue
//         }

//     }
//     return sum;
// }

//----------------------------------------------check Duplicate contains ----------------------------------------------------------------------------------

// let nums = [1,2,3,1]
// console.log(contaionDublicate(nums))

// function contaionDublicate(nums){

//     let myMap = new Map();

//     for(i=0 ; i< nums.length ;i++){
//         if(myMap.has(nums[i])){
//             return true
//         }
//         else{
//             myMap.set(nums[i])
//         }
//     }
//     return false;
// }

// Chocolate Distribution Problem-----------------------------------------------------------------------------

// let arr = [3, 4, 1, 9, 56, 7, 9, 12]
// let m = 5;
// let n = arr.length

// console.log(chocho(arr,n,m));

// function chocho(arr , m ,n){
//     if(m==0 || n==0){
//         return 0
//     }
//     let sorted = arr.sort((a,b)=>a-b) // sotring here
//     // console.log(sorted)

//     if(n<m){ // no of student is not greater than no of packet
//         retrun -1
//     }
//     let minDiff = Number.MAX_VALUE
//     for(i=0 ; i+m-1<n ; i++){
//         let diff = arr[i+m-1] - arr[i]

//         if(minDiff > diff){
//             minDiff = diff
//         }
//     }
//     return minDiff;
// }

//
// let nums = [3,2,4]
// let target = 9

// function twosum(nums , target ){
// let newmap = new Map();
// for(i=0 ;i<nums.length ;i++){ // 2
//     newmap.set(nums[i] , i)
//     let diff = target - nums[i]
//     if(newmap.has(diff)){
//         // console.log(i , nums[i] , diff)
//         if( i < newmap.get(diff)){
//             return [i , newmap.get(diff)]
//         }
//         else{
//             return [newmap.get(diff) , i]
//         }
//     }
// }
// }

//------------------------------ Search in Rotated Sorted Array------------------------------------------

// let nums = [4,5,6,7,0,1,2];
// let target = 0

// console.log(SortedArray(nums ,target));

// function SortedArray(nums , target){

//     let start = nums[0];
//     // console.log("start" ,start)
//     let end = nums.length-1
//     // console.log("end",end)

//         for(let i = 0 ; i< nums.length ; i++){
//             if(nums[i] === target){
//                return i
//             }
//         }
//         return -1
// }

// binary search alogo :-
//  function search (nums, target) {
//     let start = nums[0];
//     console.log("start" ,start)
//     let end = nums.length-1
//     console.log("end",end)
//     // let mid = (start + end / 2)
//     // console.log( "mid" , mid)
// for(i = 0 ; i < nums ; i++){

//     if(nums[start] == target){
//        console.log(i)
//     }
//     else if(nums[end] == target){
//         console.log(i)
//     }

//     else{
//         while(nums[start] + 1 != end){
//             let mid = (start + end / 2)
//             if(nums[mid] == target){
//                 console.log(i)
//                 break;
//             }
//             if(target > nums[mid]){
//                 nums[start] = mid
//             }
//             else{
//                 nums[end] = mid
//             }
//         }
//     }
// }

// };
// console.log(search(nums , target))

// REverse String

// const s = ["h" , "e" , "l" , "l" ,"o"]
// console.log(reverse(s))

// function reverse(s){
//     let len = s.length;
//     let start = s[0];
//     let end = s.length-1;
//     let mid = Math.floor(s/2);
//     while(start<= mid && mid>= end){
//         let temp = s[start];
//         s[start] = s[end]
//         temp = s[end]
//         start++
//         end--
//     }
//     return s
// }

//stock market

// prices = [7,1,5,3,6,4]

// var maxProfit = function(prices) {
//   let minByProce = prices[0];
//   let max = 0;
//   for(let i = 1 ; i< prices.length ; i++){
//     const sellprice = prices[i];
//     const profit =  sellprice - minByProce

//     max = Math.max(max , profit)
//     minByProce = Math.min(minByProce , prices[i])
//   }
//   return max
// };
// console.log(maxProfit(prices))

//-------------------------------------------------------------------------------------------------------

// merged sorted array

// let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

// var merge = function(nums1, m, nums2, n) {
//   let first = m -1 ;
//   let secont = n-1
//   let i = m + n -1

//   while(secont >= 0){
//     let fstVal = nums1[first]
//     // console.log("fstVal" , fstVal) // 3
//     let SecVal = nums2[secont]
//     // console.log("SecVal" , SecVal) //6 // 5 //2

//     if(fstVal > SecVal){
//         // console.log("nums1, here" , nums1[i])
//       nums1[i] = fstVal;
//       i--
//       first--
//     }
//     else{
//       nums1[i]= SecVal
//     //   console.log("nums2, here" , nums2[i])
//       i--
//       secont--
//     }
//   }

// };
// console.log(merge(nums1 , m ,nums2 , n))

//-----------------------------------------------------------------------------------------------------
// // Move Zeroes

// const nums =[0,1,0,3,12]
// //            i       j

// var moveZeroes = function(nums) {
//   let index = 0
// //   console.log("index" , index)

//   for(i = 0 ; i < nums.length ; i++){
//     if(nums[i] != 0){
//         nums[index] = nums[i]
//         // console.log('a real change' , nums[index])
//         index++
//     }

//   }
//   for(i = index ; i< nums.length ; i++){
//     nums[i] = 0
//   }

// };
// console.log(moveZeroes(nums))

//--------------------------------------------------------------------------------------------
// byuing and selling stock price - 2

// let  prices = [7,1,5,3,6,4]

// var maxProfit = function(prices) {
//   let maxProfit = 0;
//   for(let i = 1 ; i < prices.length ; i++){
//     if(prices[i] > prices[i-1]){
//       maxProfit += (prices[i]-prices[i-1])
//     }
//   }
//   return maxProfit
// }
// console.log(maxProfit(prices))

//=============================================================================================================

// tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// --------------------------------------------lenth of tree
//  var diameterOfBinaryTree = function(root) {

//   let diameter = 0

//   desf(root)

//   return diameter

//   function desf(root){
//     if(!root){
//       return 0
//     }

//     const left = desf(root.left)
//     const right = desf(root.right)

//     // update when diameter

//     diameter = Math.max(diameter , left + right)

//     // update the largest number

//     return 1 + Math.max(left , right)

//   }

// };

// let root = [1,2,3,4,5]

// diameterOfBinaryTree(root)

//------------------------------------------------------------------------------------------------------------------------

// invert a tree

// var invertTree = function(root) {
//   // console.log(root)

//   dfs(root)

//   return root

// };

// function dfs(node){

//   if(!node){
//     return
//   }

//   let temp = node.left ;
//   node.left = node.right
//   node.right = temp

//   dfs(node.left)
//   dfs(node.right)

// }

// let root = [4,2,7,1,3,6,9]

// invertTree(root)

// ==========================================================================================================

// var isSymmetric = function(root) {

//   let res = true

//   function helper(node1 , node2){

//     if(!node1 && !node2){
//       return
//     }

//     if(!node1 || !node2 || node1.val != node2.val ){
//       res = false
//       return
//     }

//     helper(node1.left , node2.right)
//     helper(node1.right , node2.left)
//   }

//   helper(root , root)
//   return res
// }

// let root = [1,2,2,3,4,4,3]

// isSymmetric(root)

//-------------------------------------------------------------------------------------------------------------

// 179. Largest Number

// const largestNumber = (nums) => nums.sort((a, b) => `${b}${a}` - `${a}${b}`).reduce((p, c) => (p === `0` ? '0' : `${p}${c}`), '');

// let nums = [3,30,34,5,9]

// console.log(largestNumber(nums))

// 15. 3Sum

/**
 * num.length < 3 return.
 * sort in ascending order.
 * loop throght 2 pointer method .
 * skip duplicate.
 */

let nums = [-1, 0, 1, 2, -1, -4];

var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);

  let result = [];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    let a = nums[i];

    if (i > 0 && a == nums[i - 1]) continue;

    let right = nums.length - 1;
    let left = i + 1;

    while (left < right) {
      sum = a + nums[left] + nums[right];

      if (sum > 0) right--;
      else if (sum < 0) left++;
      else {
        result.push([a, nums[left], nums[right]]);

        left++;
        while (nums[left] == nums[left - 1] && left < right) left++;
      }
    }
  }
  return result;
};
console.log(threeSum(nums));
