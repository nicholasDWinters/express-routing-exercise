function mean(str) {
    const arr = str.split(',');
    let total = 0;

    for (let num of arr) {
        total += parseInt(num);
    }

    let mean = total / arr.length;

    return mean;
}



function median(str) {
    const arr = str.split(',');
    const nums = [];
    for (let num of arr) {
        nums.push(parseInt(num));
    }

    nums.sort(function (a, b) {
        return a - b;
    })

    if (nums.length % 2 !== 0) {
        let idx = Math.round(nums.length / 2);
        return nums[idx - 1];
    } else {
        let idx = nums.length / 2;
        return (nums[idx - 1] + nums[idx]) / 2;
    }
}


function mode(str) {
    let mode = {}
    const arr = str.split(',');
    let highCount = 0;

    for (let num of arr) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (num === arr[i]) {
                count = count + 1;
            }
        }
        if (count > highCount) {
            mode = {};
            mode[num] = count;
            highCount = count;
        }
    }

    return Object.keys(mode)[0]

}

module.exports = { mean, median, mode };