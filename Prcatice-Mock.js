// sorting in --------------------------------------best way -------------------------------------------------

// // [0,0,0,0,1,1]
// // TC => O(n), SC => O(1).
// // 1 => sorting array, 2 => two pointers approach
//--------------------------------------------------------------------------------------------------------------------

// let arr = [ 1, 1, 0, 0, 1, 0];
// console.log(sorting(arr))

// function sorting(arr) {
//     let i = 0;
//     let j = arr.length - 1;
//     while(i < j){
//       if (arr[i] == 1 && arr[j] == 0) {
//           let temp = arr[i];
//           arr[i] = arr[j];
//           arr[j] = temp;
//           i++;
//           j--;
//         } else if (arr[i] == 0 && arr[j] == 1) {
//           i++;
//           j--;
//         } else {
//           j--;
//         }
//     }
//     console.log(arr)
//   }

//-----------------------------------------------------             ------------------------------------------------------------------
//-----------------------------------------------------  merged sort :-

// function mergedSort(array){

//     if(array.length <= 1){
//         return array;
//     }

//     let middle = Math.floor(array.length/2);
//     let left = array.slice(0 , middle);
//     let right = array.slice(middle)

//     return mergerTopSort(mergedSort(left) , mergedSort(right))

// }

// function mergerTopSort (left , right){

//     let array = []

//     while(left.length , right.length){
//         if(left[0] < right[0]){
//             array.push(left.shift())
//         }
//         else{
//             array.push(right.shift())
//         }
//     }

//     return array.concat(left.slice()).concat(right.slice())

// }

// let array = [10,8,99,4,888,4,3,77,8,0,6]
// console.log(mergedSort(array))

//--------------------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------Quick Sort :

// function quicksort(array) {
//     if (array.length <= 1) {
//       return array;
//     }

//     var pivot = array[0];

//     var left = [];
//     var right = [];

//     for (var i = 1; i < array.length; i++) {
//       array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
//     }

//     return quicksort(left).concat(pivot, quicksort(right));
//   };
// let array = [10,8,99,4,888,4,3,77,8,0,6]
// console.log(quicksort(array))

//=======================================================================================================

// Practice sorting // 2 pointer

function sorting(arr) {
  let i = 0;
  let j = arr.length - 1;
  while(i < j){
    if (arr[i] == 1 && arr[j] == 0) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
      } else if (arr[i] == 0 && arr[j] == 1) {
        i++;
        j--;
      } else {
        j--;
      }
  }
  console.log(arr)
}


let arr = [1, 1, 0, 0, 1, 0];
sorting(arr);
