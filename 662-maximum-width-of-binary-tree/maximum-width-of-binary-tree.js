var widthOfBinaryTree = function(root) {
    if (!root) return 0;

    let maxWidth = 0;
    const queue = [[root, 0n]]; 

    while (queue.length > 0) {
        const size = queue.length;
        const minIndex = queue[0][1];

        let first = 0n;
        let last = 0n;

        for (let i = 0; i < size; i++) {
            const [node, index] = queue.shift();

            const curIndex = index - minIndex;

            if (i === 0) first = curIndex;
            if (i === size - 1) last = curIndex;

            if (node.left) {
                queue.push([node.left, 2n * curIndex + 1n]);
            }

            if (node.right) {
                queue.push([node.right, 2n * curIndex + 2n]);
            }
        }

        maxWidth = Math.max(maxWidth, Number(last - first + 1n));
    }

    return maxWidth;
};