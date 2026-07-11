/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {

    function validate(node, low, high) {
        if (node === null) return true;

        if (node.val <= low || node.val >= high)
            return false;

        return validate(node.left, low, node.val) &&
               validate(node.right, node.val, high);
    }

    return validate(root, -Infinity, Infinity);
};