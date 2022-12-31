function vowelCount(str){
    let count = 0;
    let vowels = ['a','e','i','o','u'];
    for(const st of str){
        let flag = vowels.includes(st);
        if(flag){
            count++
        }
    }
    return count;
}

const mapCount = new Map();
mapCount.set(1, vowelCount('abcdeiog'));

console.log(mapCount.get(1));