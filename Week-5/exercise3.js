// const arry = [1, 2, 1, 3, 4, 3, 5];

// const duplicates = arry => arry.filter((item, index) => arry.indexOf(item) != index);
// const duplicateElementa = duplicates(arry);
// console.log(duplicateElementa.length == 0);

const array = [1, 2, 1, 3, 4, 3, 5];
const dup = arr => new Set(arr).size !== array.length;
console.log(dup(array));