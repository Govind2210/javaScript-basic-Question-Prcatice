const { reverse } = require("dns");
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

//Expected input

// let itrate = parseInt(readLine());

// for(i = 1 ; i <= itrate ; i++){
//   let mul = itrate * i
//   console.log(mul)
// }

// let num =  readLine();
// //console.log(num)
// let p = 1
// let sum = 0

// for(i = 0 ; i<= num ; i++){
// 	let t = parseInt(num[i])
//   s = s+t;
//   p = p*t
// }
// let diff = (s - p)
// if(num < 0){
//   console.log(0)
// }
// else{
//   console.log(diff)
// }

// let num = parseInt(readLine());
// // console.log(num);

// arr = []
// for(i = 0 ; i<num ; i++){
//   arr[i] = parseInt(readLine())
// }
// // console.log(arr)

// let count = 0

// for(i = 0 ; i <arr.length ; i++){
//   if(arr[0] == arr[i]){
//     count++
//   }
// }
// console.log(count)

// let itration = readLine().split(" ")
// // console.log(itration);

// let A = parseInt(itration[0])
// // console.log(A);

// let B = parseInt(itration[1])
// // console.log(B);

// let X = 1
// if(1 <= A <= 3 && 1 <= B <= 3){
//   for(c = 1 ; c <=1 ; c++){
//     X = A*B*c
//   }
//   if (X%2!=0) {
//     console.log(" Yes ");
//   }
//   else{
//     console.log (" No ");
// }
// }

// let num = parseInt(readLine());
// // console.log(num);
// let rev = 0;
// while(num != 0){
//   reminder = num % 10;
//   rev = rev *10 +reminder
//   num = parseInt(num / 10);
// }
// // console.log(rev);

// if(num == rev ){
//   console.log("Yes")
// }
// else{
//   console.log("No")
// }

let A = parseInt(readLine()); //3 
// console.log(A)

for(i = 0 ; i <A ; i++){ 
  let arr1 = readLine().split(" ") //2 5 2
  let arr2 = readLine().split(" ") //4 2
  // console.log(arr1)
  // console.log(arr2)
  let i = 0
  let j = 0
  let sum = []
  let c = 0

  while(i < arr1.length || j < arr2.length ){  
   let temp = 0
    if(i < arr1.length){ 
      temp += parseInt(arr1[i])
    }
    if(j < arr2.length){
      temp += parseInt(arr2[j])
    }
    temp += c
    sum.push(temp%10)
    c = parseInt(temp / 10 )
    i++
    j++
  }
  if(c != 0 ){
    sum.push(c);
  }
  console.log(sum)
  
}






