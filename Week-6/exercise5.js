A = [5, 10, 3, 1, 50, 80];
B = 78;
C = [-10, 20];
D = 30;
console.log(expectedPair(C, D));

function expectedPair(a , b){
    for(let i = 0; i < a.length -1; i++){
        for (let j = i + 1; j < a.length; j++){
            if(a[i] - a[j] == b || a[j] - a[i] == b){
                return 1;
            }
        }
    }
    return 0;
}