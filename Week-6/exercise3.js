function sortArray(arr){
    let sortedArray = [];
    let count = 0;
    for(let num of arr){
        if(num == 0){
            sortedArray.splice(0, 0, num);
                count++;
        } else if (num == 2){
            sortedArray.splice(sortedArray.length, 0, num);
        } else {
            sortedArray.splice(count, 0, num);
        }
    }
    console.log(sortedArray);
}

let arr = [0, 2, 0, 2, 1, 1];
// console.log(arr.sort());
sortArray(arr);