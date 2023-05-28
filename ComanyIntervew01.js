// let n = "148";
// let k = 3
// function superDigit(n, k) {
//     // Write your code here
//     n = n.split('').map(i=>i*k).join('');
//     for(let i=0 ;i>-1;i++){
//         n = n.toString().split('').reduce((a,b)=>Number(a)+Number(b)).toString()
//         if(n.length==1){
//             break;
//         }
//     }
//    console.log(n);
// }
// superDigit(n, k)

// remove duplicate -----------------------------------------

// let array = [1,2,1,2,2,2,1,3,4]

// let newArray = new Set([...array])
// console.log(newArray)


//check argumns------------------------------------------------

// let str1 = "silent"
// let str2 = "listen1"

// function checkString(str1 , str2){
//     let len1 = str1.length;
//     let len2 = str2.length;
//     if(len1 !== len2){
//         console.log("Invalid Input")
//     }
//     let newSte1 = str1.split('').sort().join('');
//     let newSte2 = str2.split('').sort().join('');
//     if(newSte1 === newSte2){
//         console.log("True")
//     }
//     else{
//         console.log("false")
//     }
// }
// checkString(str1 , str2)

// find second largest ----------------------------------
function findSecondLargestElem(arr){
    let first = -1 , second = -1 ;
    for(let i = 0; i <= arr.length-1; i++){ //1 // 2 // 3
        if(arr[i] > first){ // 1 > -1 t // 2 > 1 t  // 3 > 2 // 4 >  3
            second = first; // -1 // 1 // 2 // 3
            first = arr[i]; // 1 // 2 // 3 // 2
        }
        else if( arr[i] > second && arr[i] != first){
            second = arr[i];
        }
    }
    console.log(second);
}
let arr = [1,2,3,4,9,8,7]
findSecondLargestElem(arr);