// Import the functions and class from your lca.js (make sure the path is correct)
const { lowestCommonAncestor, TreeNode } = require("./ica");

describe("LCA", function() {
  it("functions_exist", function() {
    // Test to check if the functions exist
    expect(typeof TreeNode === "function").toBe(true);
    expect(typeof lowestCommonAncestor === "function").toBe(true);
  });

  it("should return the correct lowest common ancestor", function() {
    // Create the tree
    const root = new TreeNode(3);
    const left = new TreeNode(5);
    root.left = left;
    const right = new TreeNode(1);
    root.right = right;

    // Test the function
    expect(lowestCommonAncestor(root, left, right)).toBe(root);  // root (3) is the LCA
  });

  it("should return the correct LCA for a more complex tree", function() {
    const root = new TreeNode(3);
    const left = new TreeNode(5);
    root.left = left;
    const leftLeft = new TreeNode(6);
    left.left = leftLeft;
    const leftRight = new TreeNode(2);
    left.right = leftRight;
    const leftRightLeft = new TreeNode(7);
    leftRight.left = leftRightLeft;
    const leftRightRight = new TreeNode(4);
    leftRight.right = leftRightRight;

    const right = new TreeNode(1);
    root.right = right;
    const rightLeft = new TreeNode(0);
    right.left = rightLeft;
    const rightRight = new TreeNode(8);
    right.right = rightRight;

    // Test example cases
    expect(lowestCommonAncestor(root, left, right)).toBe(root); // LCA is 3
    expect(lowestCommonAncestor(root, leftLeft, leftRightLeft)).toBe(left); // LCA is 5
    expect(lowestCommonAncestor(root, leftRightLeft, leftRightRight)).toBe(leftRight); // LCA is 2
  });
});
