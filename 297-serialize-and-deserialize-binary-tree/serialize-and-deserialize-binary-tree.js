/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {

    let res = [];

    function dfs(node) {
        if (!node) {
            res.push("#");
            return;
        }

        res.push(node.val);

        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    return res.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {

    let arr = data.split(",");
    let index = 0;

    function build() {

        if (arr[index] === "#") {
            index++;
            return null;
        }

        let node = new TreeNode(Number(arr[index]));
        index++;

        node.left = build();
        node.right = build();

        return node;
    }

    return build();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */