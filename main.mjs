import { BinaryTreeNode } from "./BinaryTreeNode.mjs";

const data = new Map();

// Example for input as text
const string = "test";
// const string = "AAABCDEE";
const initialValue = string[0];
const stringArray = string.split(""); 
// O(n)
stringArray.reduce((accumulator, currentValue) => {
  if (data.has(currentValue)) {
    data.set(currentValue, data.get(currentValue) + 1);
  } else {
    data.set(currentValue, 1);
  }
}, initialValue);

// Example for input as Priority
// const data = new Map([['A',0.375],['B',0.125],['C',0.125],['D',0.125],['E',0.25]]);
// console.log(data);
// This code sort values in data O(n)
const sortResult = [...data].sort((a, b) => String(b[1]).localeCompare(a[1]));

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
      node.left = sortNodeResult[index - 1];
      node.right = sortNodeResult[index];
      sortNodeResult.pop();
      sortNodeResult.pop();
      sortNodeResult.push(node);
    }
  }
};

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

generateHuffmanTree(sortNodeResult);
printHuffmanTree(sortNodeResult);
