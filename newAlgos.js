nums = [1, 2, 3, 6, 4]

function findNums(nums) {
    const posNums = nums.filter(num => num > 0);
    const set = newSet();
    let max = 0;
    for(const posNum of posNums) {
        set.add(posNum);
        if(posNum > max) max = posNum;
    }
    let a = 1;
    do {
        if(!set.has(a)) return a;

    } while (a <= max);
    return a;
}




