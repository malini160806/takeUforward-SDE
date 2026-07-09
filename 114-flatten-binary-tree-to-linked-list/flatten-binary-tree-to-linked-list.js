/**
 * @param {TreeNode} root
 * @return {void}
 */
var flatten = function(root) {

    let prev = null;

    function dfs(node) {
        if (!node) return;

        dfs(node.right);
        dfs(node.left);

        node.right = prev;
        node.left = null;
        prev = node;
    }

    dfs(root);
};