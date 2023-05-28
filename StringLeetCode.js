//415. Add Strings

// let num1 = "11", num2 = "123"

// var addStrings = function(num1, num2) {
//     let i = num1.length - 1;
//     console.log("length of i" , i) //1 
//     let j = num2.length - 1;
//     console.log("length of j" , j)//2 
//     let sum = 0, carry = 0, x, y;
//     let result = "";
//     console.log("carry" , carry) //0 

//     while(i>=0 || j>=0){ // index
//         console.log("i-->" , i)  //1 // 0 // -1
//         console.log("j-->" , j) //2 // 1 //0
//         x = i < 0 ? 0 : num1.charAt(i) - "0";
//         y = j < 0 ? 0 : num2.charAt(j) - "0";
//         sum = (x + y + carry) % 10;
//         console.log("sum" , sum)//4 //3 // 1
//         carry = Math.floor((x + y + carry) /10);
//         console.log("carry" ,carry)//0 //0
//         result =  sum + result;
//         console.log("result" , result)//4 //3 -->34 // 1 -> 134
//         i--;
//         j--;
//     }
//     if(carry!=0){
//         result =  carry + result;
//         console.log("under here" , result)
//     }
//     console.log("final return" , result)
//     return result;
// };
// addStrings(num1 , num2)

// 14. Longest Common Prefix

// let strs = ["flower","flow","flight"]

// var longestCommonPrefix = function(strs) {
//     if(strs.length == 0){
//         return ""
//     }
//     if(strs.length == 1){
//         return strs[0]
//     }
//     for(let i = 0 ; i < strs[0].length ; i++){
//         console.log("here" , strs[0]) // f //l //o //w //e //r 
//         for(let j = 1 ; j < strs.length ; j ++){
//             console.log("Now",strs[j]) // flow // flight *3
//             if(strs[0][i] !== strs[j][i]){ // o != i // ture
//                 console.log(" strs[0][i]" ,strs[0][i])
//                 console.log(" strs[j][i]" ,strs[j][i])
//                 console.log("result--->" , strs[0].slice(0 , i))
//                 return strs[0].slice(0 , i)
//             }
//         }
//     }
//     return strs["noo",0];
// };

// longestCommonPrefix(strs)

//---------------------------------------680. Valid Palindrome II

// let s = "abc"

// const validPalindrome = (s) => {
//     let left = 0;
//     let right = s.length-1;
//     while(left<right){
//         if(s.charAt(left)==s.charAt(right)){
//             left++;
//             right--;
//         }
//         if(s.charAt(left)!=s.charAt(right)){
//             return checkPalindrome(s,left+1,right) || checkPalindrome(s,left,right-1);
//         }
//     }
//     return true;
// };

// const checkPalindrome = (s,i,j) => {
//     let left = i;
//     let right = j;
//     while(left<right){
//         if(s.charAt(left)==s.charAt(right)){
//             left++;
//             right--;
//         }
//         if(s.charAt(left)!=s.charAt(right)){
//             return false;
//         }
//     }
//     return true;
// };
// validPalindrome(s)

//============================================================================

//Roman Integer
// let s = "III"

// var romanToInt = function(s) { /// III
//     let n = 0
//     // console.log("s" , s)
//    const number = {
//    'I': 1,
//    'V': 5,
//    'X': 10,
//    'L': 50,
//    'C': 100,
//    'D': 500,
//    'M': 1000,
// }
//    for(let i = 0; i<s.length; i++){ // I
//     // console.log(i)
//        if(i+1<s.length && number[s[i]]<number[s[i+1]]){ 
//         // console.log("number[s[i]]<number[s[i+1]]" , number[s[i]]<number[s[i+1]])
//            n-=number[s[i]] 
//         //    console.log("n-=number[s[i]] " , n-=number[s[i]] )
//         }
//        else{ 
//            n += number[s[i]] // 1+1+1
//             // console.log("n += number[s[i]] " , n += number[s[i]] )   
//         }
//         // console.log("n" , n)
//     return n

// };

// }

// romanToInt(s)


//-----------------------------------------------------------------------------------------------

// 28. Find the Index of the First Occurrence in a String

// var strStr = function(haystack, needle) {
    
//     return haystack.indexOf(needle);
// };

// let haystack = "sadbutsad", needle = "sad"

// strStr(haystack, needle)

//------------------------------------------------- medium level

//3. Longest Substring Without Repeating Characters

// let s = "pwwkew"

// var lengthOfLongestSubstring = function(s) {
    
//     let set = new Set()
//     let left = 0
//     let maxSize = 0

//     if(s.length == 0) return 0
//     if(s.length == 1) return 1

//     for(let i = 0 ; i < s.length ; i++){
//         while(set.has(s[i])){
//             set.delete(s[left])
//             left++
//         }
//         set.add(s[i]);
//         maxSize = Math.max(maxSize, i - left + 1)

//     }
//     return maxSize
// };


// lengthOfLongestSubstring(s)

//------------------------------------------------------------------------

// 1249. Minimum Remove to Make Valid Parentheses

// let s = "lee(t(c)o)de)"
// // outpuy --> lee(t(c)o)de


// var minRemoveToMakeValid = function(s) {
//     // console.log(s)
//     let stack = []

//     let split_str = s.split("")
//     for(let i = 0 ; i < s.length ; i++){
//         const char = str[i]
//         if(char == "("){
//             stack.push(i)
//         }
//         else if(char == ")"){
//             if(stack.length == 0){
//                 split_str[i] = ""
//             }
//             else{
//                 stack.pop()
//             }
//         }
//     }

//     for(let i = 0 ; i< stack.length ; i++){
//         const char = stack[i]
//         split_str[char] = ""
//     }

//     return split_str.join("")
// };

// minRemoveToMakeValid(s)

//-------------------------------------------------------------------------------

// 49. Group Anagrams

    
// var groupAnagrams = function(strs) {
//     let obj = {};
//     for(let word of strs){
//         let sorted = word.split("").sort().join("");
//         if(sorted in obj){
//             obj[sorted].push(word);
//         }else{
//             obj[sorted] = [word];
//         }
//     }
//     console.log(Object.values(obj))
// };

// let strs = ["eat","tea","tan","ate","nat","bat"]
// groupAnagrams(strs)
























