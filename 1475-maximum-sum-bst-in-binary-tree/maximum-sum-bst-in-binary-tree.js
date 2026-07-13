/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxSumBST = function(root) {

    let maxSum = 0;

    function dfs(node) {

        if (!node) {
            return {
                isBST: true,
                min: Infinity,
                max: -Infinity,
                sum: 0
            };
        }

        const left = dfs(node.left);
        const right = dfs(node.right);

        if (
            left.isBST &&
            right.isBST &&
            node.val > left.max &&
            node.val < right.min
        ) {
            const sum = left.sum + right.sum + node.val;

            maxSum = Math.max(maxSum, sum);

            return {
                isBST: true,
                min: Math.min(node.val, left.min),
                max: Math.max(node.val, right.max),
                sum: sum
            };
        }

        return {
            isBST: false,
            min: -Infinity,
            max: Infinity,
            sum: 0
        };
    }

    dfs(root);

    return maxSum;
};