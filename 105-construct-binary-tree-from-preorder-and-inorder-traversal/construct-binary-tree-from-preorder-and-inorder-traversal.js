/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

    const map = new Map();

    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }

    let preIndex = 0;

    function helper(left, right) {
        if (left > right) return null;

        const rootVal = preorder[preIndex++];
        const root = new TreeNode(rootVal);

        const mid = map.get(rootVal);

        root.left = helper(left, mid - 1);
        root.right = helper(mid + 1, right);

        return root;
    }

    return helper(0, inorder.length - 1);
};