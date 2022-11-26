let arr = [7,1,5,3,6,4];
maxProfit(arr);

function maxProfit(arr){
    let max = 0;
    let buy = Number.MAX_VALUE;
    let sell = 0;
    for (let i = 1; i < arr.length; i++){
        if(arr[i] < arr[i -1] && arr[i] < buy){
            buy = arr[i];
            sell = 0;
        } else if(arr[i] > sell) {
            sell = arr[i];            
        };

        if(sell - buy > max){
            max = sell - buy;
        };
    }
    console.log("MAX ",max);
}