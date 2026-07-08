/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {

    const map = new Map();

    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }

    let postIndex = postorder.length - 1;

    function helper(left, right) {
        if (left > right) return null;

        const rootVal = postorder[postIndex--];
        const root = new TreeNode(rootVal);

        const mid = map.get(rootVal);

        root.right = helper(mid + 1, right);
        root.left = helper(left, mid - 1);

        return root;
    }

    return helper(0, inorder.length - 1);
};