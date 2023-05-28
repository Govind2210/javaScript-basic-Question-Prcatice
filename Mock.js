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


// let testcase = parseInt(readLine())
// // console.log(testcase);
// let number = readLine().split(' ').map(Number) //1 2 3 3 9 7

// let sortingArr = number.sort((a,b)=>b - a) //[ 9, 7, 3, 3, 2, 1 ]
// // console.log(number)
// let M = [];
// let N = [];

// for(i = 0 ; i < sortingArr.length ; i = i +2){
//     M.push(sortingArr[i])
// }
// for(i = 1 ; i< sortingArr.length ; i = i+2){
//     N.push(sortingArr[i])
// }
// M = parseInt(M.join(""))
// N = parseInt(N.join(""))

// // console.log(M)
// // console.log(N)

// console.log(M+N)


let arrSize = parseInt(readLine())
let arr = readLine().trim().split(" ")
let M = "";
let N = "";
arr.sort((a,b)=> b-a)
for(let i = 0 ; i < arrSize ; i+=2){
    M+= arr[i]
    if(arr[i+1]!= undefined){
        N += arr[i+1];
    }
}
M = parseInt(M)
M = parseInt(N)

console.log(M+N)

