/*
Given a binary tree root node, invert the binary tree (mirror) and return back the root node.

Time Complexity: O(N)
Auxiliary Space Complexity: O(N)

Input: Node in a Binary Tree
Output: Node in a Binary Tree

Binary Tree Node has the following properties:

    value (Integer)
    left (Binary Tree Node, default null)
    right (Binary Tree Node, default null)
input:
          > 1
         /   \
        2      3                temp: 2
             /  \          
            5    4 

output:
           1
         /   \
        3     2
       / \
      5   4
[post order traversal -> parents after chidlren]
      [what's stored in the left is switched to the right]
      //depth first approach -> recursive

node_mirror(node):

      if null
        return null
      else if node.left && node.right == null
        return node

      left = node_mirror(node.left)
      right = node_mirror(node.right)

      node.right = left
      node.left = right

      return node

*/

class BinaryTree {
  constructor(val) {
    this.val = val;
    this.left = null
    this.right = null;
  }
}

let node = new BinaryTree(1)
let left_child = new BinaryTree(2)
let right_child = new BinaryTree(3)
node.left = left_child;
node.right = right_child;

let left_grandchild = new BinaryTree(4)
let right_grandchild = new BinaryTree(5)
right_child.left = left_grandchild;
right_child.right = right_grandchild;


function node_mirror(node) {

      if (node == null) {
        return null
      }
  
      else if (node.left == null && node.right == null) {
        return node
      }

      let left = node_mirror(node.left)
      //console.log(left)
      let right = node_mirror(node.right)

      node.right = left
      node.left = right

      return node

}

console.log(node_mirror(node))