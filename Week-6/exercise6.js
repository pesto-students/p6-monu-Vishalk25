A = [-1, 2, 3, 7, -4, 2];
B= 4;

// closestNumber(A,B);

// function closestNumber(a, b){

// }

function closestNumber(nums, target) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let closest = nums[0] + nums[1] + nums[n - 1];

    for (let i = 0; i < n - 2; i++) {
        let j = i + 1;
        let k = n - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum <= target) {
                j++;
            } else {
                k--;
            }
            if (Math.abs(closest - target) > Math.abs(sum - target)) {
                closest = sum;
            }
        }
    }
    return closest;
};

console.log(closestNumber(A,B));
