import {BinaryTree} from './BinaryTree.mjs';

// const tree = new BinaryTree(1, 'AB');

// tree.insert(1, 11, 'AC');
// tree.insert(1, 12, 'BC');
// tree.insert(12, 121, 'BG', { right: true });

// [...tree.preOrderTraversal()].map(x => x.value);
// // ['AB', 'AC', 'BC', 'BCG']

// [...tree.inOrderTraversal()].map(x => x.value);
// // ['AC', 'AB', 'BC', 'BG']

// tree.root.value;                // 'AB'
// tree.root.hasChildren;          // true

// tree.find(12).isLeaf;           // false
// tree.find(121).isLeaf;          // true
// tree.find(121).parent.value;    // 'BC'
// tree.find(12).left;             // null
// tree.find(12).right.value;      // 'BG'

// tree.remove(12);
// console.log([...tree.postOrderTraversal()].map(x => x.value));

const map1 = new Map();
const string = "AAABCDEE";
const initialValue = string[0];
const array = string.split("");
array.reduce(
    (accumulator, currentValue) => {
        if(map1.has(currentValue)) {
            map1.set(currentValue, map1.get(currentValue) + 1)
            } else {
                map1.set(currentValue, 1);
            }
    },
    initialValue
  );
  console.log(map1);
  const sortResult = [...map1].sort((a, b) => String(b[1]).localeCompare(a[1]));
    console.log(sortResult);
    const tree = new BinaryTree(1, 'Start');
    
    let curentNode = 1;
let counter = 0;
// const rep = (sortResult) => {
//     console.log("hello"+ counter);
//     for (let index = sortResult.length - 1; index >= 0; index-- ) {
//         if((typeof curentNode === 'object' || curentNode === 1) && index >0) {
//             tree.insert(1, sortResult[index][0], sortResult[index][1]);
//             curentNode =tree.insert(1, sortResult[index - 1][0], sortResult[index - 1][1]);    
//             sortResult.pop();
//             sortResult.pop();
//             if(typeof curentNode == 'object') {
//                 sortResult.push(curentNode);
//                 console.log(sortResult);
//                 counter++;
//                 return rep(sortResult);
//             }
//         }
//       }
      
// }
let currentNode = tree;
console.log(currentNode);
const rep = (sortResult) => {
    console.log("hello" + counter);
    for (let index = sortResult.length - 1; index >= 0; index--) {
      if ((typeof currentNode === 'object' || currentNode === 1) && index > 0) {
        const newNode = tree.insert(1, sortResult[index][0], sortResult[index][1]);
        newNode.right = currentNode; // Set the right child to the current node
        newNode.left = tree.insert(1, sortResult[index - 1][0], sortResult[index - 1][1]); // Set the left child to the node inserted before it
  
        sortResult.pop();
        sortResult.pop();
  
        if (typeof newNode === 'object') {
          sortResult.push(newNode);
          
          currentNode = newNode; // Update the current node
          counter++;
          return rep(sortResult);
        }
      }
    }
  }
  
  
 //rep(sortResult);
  
  //console.log(tree);
  