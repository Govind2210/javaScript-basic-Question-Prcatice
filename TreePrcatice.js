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


// symmetic tree

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinaryTree {
//   constructor() {
//     this.root = null;
//   }
//   insertLevelOrder(arr, i, n) {
//     if (i >= n) {
//       return null;
//     }
//     if (arr[i] === null) {
//       return null;
//     }

//     let tree = new Node(arr[i]);
//     tree.left = this.insertLevelOrder(arr, 2 * i + 1, n);
//     tree.right = this.insertLevelOrder(arr, 2 * i + 2, n);
//     return tree;
//   }
// }

// function isSymmetric(left,right) {
//     //write code here
//    if(left == null && right == null){
//     return true
//    }
//    if(left != null && right != null){
//         return isSymmetric(left.left , right.right) && isSymmetric(left.right , right.left)
//     }
// }

// function convertToNumber(arr){
    
//     for(i = 0 ; i < arr.length ; i++){
//         if(arr[i] !== "N"){
//             arr[i] = parseInt(arr[i])
//         }
//         else{
//             arr[i] = null
//         }
//     }
// }

// let T = parseInt(readLine());
// while (T--) {
//   let arr = readLine().split(" ");
//   convertToNumber(arr);
//   let tree = new BinaryTree();
//   tree.root = tree.insertLevelOrder(arr, 0, arr.length);
//   if (isSymmetric(tree.root,tree.root)) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// }

//-----------------------------------------------------------------------------------------------

// identical tree


class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insertLevelOrder(arr, i, n) {
      if (i >= n) {
        return null;
      }
      let tree = new Node(arr[i]);
      tree.left = this.insertLevelOrder(arr, 2 * i + 1, n);
      tree.right = this.insertLevelOrder(arr, 2 * i + 2, n);
      return tree;
    }
  }
  
  function isIdentical(tree1,tree2) {
        // write your code here
     if(tree1 == null && tree2 == null){ //if both are empty
        return true
     }

     if(tree1 != null && tree2 != null){ // if both are not empty
        return (tree1.data == tree2.data && isIdentical(tree1.left , tree2.left) 
        && isIdentical(tree1.right , tree2.right))
     }
     return false;
  }
  
  
  function convertToNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== "N") {
        arr[i] = parseInt(arr[i]);
      } else {
        arr[i] = null;
      }
    }
  }
  
  let arr1 = readLine().split(" ");
  let arr2 = readLine().split(" ");
  convertToNumber(arr1);
  convertToNumber(arr2);
  let tree1 = new BinaryTree();
  tree1.root = tree1.insertLevelOrder(arr1, 0, arr1.length);
  let tree2 = new BinaryTree();
  tree2.root = tree2.insertLevelOrder(arr2, 0, arr2.length);
  
  
  if (isIdentical(tree1.root, tree2.root)) {
    console.log("True");
  } else {
    console.log("False");
  }