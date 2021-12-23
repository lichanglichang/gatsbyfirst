exports.onCreateNode = ({ node }) => {
  // 每当创建新节点（或更新）时，Gatsby 都会调用 onCreateNode 函数。
  console.log(node.internal.type)
}
