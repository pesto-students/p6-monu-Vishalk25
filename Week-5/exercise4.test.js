const mathOperations = {
  sum: function (a, b) {
    return a + b;
  },
  diff: function (a, b) {
    return a - b;
  },
  product: function (a, b) {
    return a * b;
  },
};

test('test mathOperator',() => {
    let addResult = mathOperations.sum(3,3);
    let diffResult = mathOperations.diff(4,3);
    let productResult = mathOperations.product(3,3);
        expect(addResult).toBe(6);
        expect(diffResult).toBe(1);
        expect(productResult).toBe(9);
})
