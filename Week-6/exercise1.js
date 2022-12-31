let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
maxSum(arr);

function maxSum (A){
    let max = 0;
    let sum = 0;
    for (let i = 0; i < A.length; i++){
        if(A[i] > 0){
            sum = sum + A[i];
        }else if(sum + A[i] > 0){
            sum = sum + A[i];
        } else {
            sum = 0;            
        };

        if(sum > max){
            max = sum;
        };
    }
    console.log("MAX ",max);
}