/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {

    function isMirror(left, right) {
        if (!left && !right) return true;
        if (!left || !right) return false;
        if (left.val !== right.val) return false;

        return isMirror(left.left, right.right) &&
               isMirror(left.right, right.left);
    }

    return isMirror(root, root);
};