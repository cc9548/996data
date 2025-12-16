// ===== 1) 用一維陣列表示二元樹 =====
const nodes = [
    { val: "A", left: 1, right: 2 },   // 0
    { val: "B", left: -1, right: -1 }, // 1
    { val: "C", left: 3, right: 4 },   // 2
    { val: "D", left: 5, right: 6 },   // 3
    { val: "E", left: -1, right: -1 }, // 4
    { val: "F", left: -1, right: -1 }, // 5
    { val: "G", left: 7, right: 8 },   // 6
    { val: "H", left: -1, right: -1 }, // 7
    { val: "I", left: -1, right: -1 }  // 8
  ];
  const root = 0; // A
  
  // ===== 2) 迭代走訪（不遞迴） =====
  
  // 前序：Node -> Left -> Right
  function preorder(nodes, root) {
    if (root === -1) return [];
    const res = [];
    const stack = [root];
  
    while (stack.length) {
      const cur = stack.pop();
      res.push(nodes[cur].val);
  
      const r = nodes[cur].right;
      const l = nodes[cur].left;
      if (r !== -1) stack.push(r);
      if (l !== -1) stack.push(l);
    }
    return res;
  }
  
  // 中序：Left -> Node -> Right
  function inorder(nodes, root) {
    const res = [];
    const stack = [];
    let cur = root;
  
    while (cur !== -1 || stack.length) {
      while (cur !== -1) {
        stack.push(cur);
        cur = nodes[cur].left;
      }
      cur = stack.pop();
      res.push(nodes[cur].val);
      cur = nodes[cur].right;
    }
    return res;
  }
  
  // 後序：Left -> Right -> Node（單一 stack）
  function postorder(nodes, root) {
    const res = [];
    const stack = [];
    let cur = root;
    let lastVisited = -1;
  
    while (cur !== -1 || stack.length) {
      while (cur !== -1) {
        stack.push(cur);
        cur = nodes[cur].left;
      }
  
      const peek = stack[stack.length - 1];
      const r = nodes[peek].right;
  
      if (r === -1 || r === lastVisited) {
        res.push(nodes[peek].val);
        lastVisited = stack.pop();
      } else {
        cur = r;
      }
    }
    return res;
  }
  
  // ===== 3) 輸出結果 =====
  console.log("Preorder :", preorder(nodes, root).join(" "));
  console.log("Inorder  :", inorder(nodes, root).join(" "));
  console.log("Postorder:", postorder(nodes, root).join(" "));
  