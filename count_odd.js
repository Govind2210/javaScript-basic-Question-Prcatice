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

let iterations= parseInt(readLine())
// console.log(iterations)
let odd_Count =0
let even_Count=0
for(i=0;i<iterations; i++){
  const temp= parseInt(readLine())
  if(temp%2==0){
    even_Count= even_Count+1
  }
  else{
    odd_Count= odd_Count+1
  }
}
console.log(odd_Count)
console.log(even_Count)