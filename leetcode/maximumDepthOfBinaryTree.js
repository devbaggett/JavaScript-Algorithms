// 104. Maximum Depth of Binary Tree

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

// Construct example tree
left = new TreeNode(9, null, null);
right = new TreeNode(20, new TreeNode(15), new TreeNode(7));
let root = new TreeNode(3, left, right);

function maxDepth(root) {
    let maxDepth = 0;
    let BFS = (node, level) => {
        if (node === null) {
            return;
        }
        maxDepth = Math.max(level, maxDepth);
        BFS(node.left, level + 1);
        BFS(node.right, level + 1);
    };
    BFS(root, 1);
    return maxDepth;
}

console.log(maxDepth(root)); // 3
