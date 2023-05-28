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
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let m = parseInt(readLine());
let arr = []
for(i = 0 ; i < m ; i++)
arr[i] = parseInt(readLine())

let n = parseInt(readLine())
let icon = []
for(i = 0 ; i < icon ; i++)
icon[i] = parseInt(readLine())

count = 0
for(i = 0 ; i < n ; i++){
    if(arr[i]!=icon[0]){
        continue;
    }
    else{
        if(i+n<=n){
            let k = i
            for(let j = 0 ; j < n ; j++){
                if(arr[i]!=icon[0])
                break;
            }
            k++
            if(j==n-1){
                count = count+1
            }

        }
    }

}
console.log(count)

