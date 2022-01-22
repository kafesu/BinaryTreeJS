const nodes = [{ left: -1, value: 10, right: -1 }];

function insert(value, nodePointer = 0) {
    // Creating a root node if absent
    if (nodes.length === 0) {
        nodes.push({ left: -1, value, right: -1 });
        return;
    }

    // Creating a reference to the original node in the nodes array
    const node = nodes[nodePointer];

    // Deciding on whether to follow the left or right branch
    const branch = value >= node.value ? "right" : "left";

    if (node[branch] === -1) {
        const newNode = { left: -1, value: value, right: -1 };
        const indexOfNewNode = nodes.push(newNode) - 1;
        node[branch] = indexOfNewNode;
    } else {
        insert(value, node[branch]);
    }
}

function inorderTraversal(nodePointer = 0) {
    const node = nodes[nodePointer];

    if (node.left !== -1) inorderTraversal(node.left);

    console.log(node.value);

    if (node.right !== -1) inorderTraversal(node.right);
}
