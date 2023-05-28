let fs = require("fs");
const { format } = require("path");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// inserting sort 

function insertionSort(A, n){
  // write from here
  for(i = 1 ; i<A.length ; i++){
    let j = i-1
    let key = A[i]
    while(i >=0 && key < A[j]){
        A[j+1] = A[j]
        j--
    }
    A[j+1] = key
  }
  return A;
}

function Convert_to_number(list){
  for(let each in list){
    list[each]=Number(list[each])
  }
}
let len=parseInt(readLine())
// console.log(len) //2
for(let i=0;i<len;i++){
  let n = parseInt(readLine())
//   console.log(n) //5
  let arr =readLine().trim().split(" ")  // object [ '5', '10', '2', '4', '-12\r' ] //[ '12', '89', '90', '7' ]
//   console.log(typeof arr , arr)
  Convert_to_number(arr)
  console.log(...insertionSort(arr, n)) // arr - 5
}

// --------------------------------------------------string insering --------------------------

// function stringInsertionSort(str){
//     // Your code goes here
//     str = str.split('')
//     for(let i =1 ; i<str.length ; i++){
//         let j = i-1
//         key = str[i]
//         while(i >=0 && key < str[j]){
//             str[j+1] = str[j]
//             j--
//         }
//         str[j+1] = key;
//     }
//     let output =""
//     for(i = 0 ; i<str.length ; i++){
//         output += str[i]
//     }
//     return output;
//   }
  
  
//   //DO NOT CHANGE ANYTHING BELOW THIS LINE
  
//   let input_string = readLine()
// //   console.log(input_string)
//   console.log(stringInsertionSort(input_string))

// insertion

// function Convert_to_number(list){
//     for(let each in list){
//       list[each]=Number(list[each])
//     }
//   }
  
  
//   function insert(arr,n){
//     // Your code goes here
//     for(i = 1 ; i<arr.length ; i++){
//         let j = i-1;
//         let key = arr[i]
//         while(i>=0 && key < arr[j]){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = key;
//     }
//     return arr
//   }
  
//   // DO NOT EDIT ANYTHING BELOW THIS LINE
  
//   let n = parseInt(readLine())
// //   console.log(n)
//   let arr = readLine().split(" ")
// //   console.log(arr)
//   Convert_to_number(arr)
//   insert(arr, n)
//   console.log(...arr)

// Insert in Between


//Half Insertion

// function  halfSort(str)
// {
//     for(let i=Math.ceil(str.length/2);i<str.length;i++)
//     {
//         let j=i-1
//         let key = str[i]
//         while (j>=parseInt((str.length/2) )&& key < str[j])
//         {
//             str[j+1]=str[j]
//             j--
//         }
//         str[j+1]=key
//     }
//     let result=""
//     for(let i=0;i<str.length;i++)
//     {
//         result+=str[i]
//     }
//    return result
// }
// //DO NOT CHANGE ANYTHING BELOW THIS LINE

// let input_string = readLine().split('')
// // console.log(input_string)
// console.log(halfSort(input_string))






