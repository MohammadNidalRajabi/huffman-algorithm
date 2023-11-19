import { BinaryTreeNode } from "./BinaryTreeNode.mjs";

// const data = new Map();

// // Example for input as text
// const string = "mohammad";
// // const string = "AAABCDEE";
// const initialValue = string[0];
// const stringArray = string.split(""); 
// // O(n)
// stringArray.reduce((accumulator, currentValue) => {
//   if (data.has(currentValue)) {
//     data.set(currentValue, data.get(currentValue) + 1);
//   } else {
//     data.set(currentValue, 1);
//   }
// }, initialValue);

// Example for input as Priority
 const data = new Map([['A',0.375],['B',0.125],['C',0.125],['D',0.125],['E',0.25]]);
// console.log(data);
// This code sort values in data O(n)
const sortResult = [...data].sort((a, b) => String(b[1]).localeCompare(a[1]));
console.log(sortResult);
// Create BinaryTreeNode for values O(n)
const sortNodeResult = sortResult.map((element) => {
  return new BinaryTreeNode(element[0], element[1]);
});

// This method generate HuffmanTree O(n)
const generateHuffmanTree = (sortNodeResult) => {
  for (let index = sortNodeResult.length - 1; index >= 0; index--) {
    if (index > 0) {
      const node = new BinaryTreeNode(
        sortNodeResult[index].value + sortNodeResult[index - 1].value,
        sortNodeResult[index].value + sortNodeResult[index - 1].value
      );
      node.left = sortNodeResult[index -1];
      node.right = sortNodeResult[index];
      sortNodeResult.pop();
      sortNodeResult.pop();
      sortNodeResult.push(node);
      //sortNodeResult.sort((a, b) => b.value - a.value);
    }
};
}

// const generateHuffmanTree = (sortNodeResult) => {
//   while (sortNodeResult.length > 1) {
//     const node = new BinaryTreeNode(
//       sortNodeResult[sortNodeResult.length - 1].value + sortNodeResult[sortNodeResult.length - 2].value,
//       sortNodeResult[sortNodeResult.length - 1].frequency + sortNodeResult[sortNodeResult.length - 2].frequency
//     );
//     node.right = sortNodeResult.pop();
//     node.left = sortNodeResult.pop();
//     sortNodeResult.push(node);
//     sortNodeResult.sort((a, b) => b.frequency - a.frequency);
//   }
// };

// This method print HuffmanTree as table O(n)
function printHuffmanTree(nodes, path = "") {
  nodes.forEach((node) => {
    if (typeof node.key === "string") {
      console.log(
        `{ Char: ${node.key}, Priority: ${node.value}, path: ${path} }`
      );
    }
    if (node.left) {
      printHuffmanTree([node.left], path + "0");
    }
    if (node.right) {
      printHuffmanTree([node.right], path + "1");
    }
  });
}

function printTreeStructure(nodes, indent = 0) {
  nodes.forEach((node) => {
    console.log("  ".repeat(indent) + `{ key: ${node.key}, value: ${node.value} }`);
    if (node.left) {
      console.log("  ".repeat(indent + 1) + "Left:");
      printTreeStructure([node.left], indent + 2);
    }
    if (node.right) {
      console.log("  ".repeat(indent + 1) + "Right:");
      printTreeStructure([node.right], indent + 2);
    }
  });
}
generateHuffmanTree(sortNodeResult);
printHuffmanTree(sortNodeResult);
printTreeStructure(sortNodeResult);