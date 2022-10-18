const arr1 = [100, 2, 300, 400];
const k1 = 2;
const output = 700;

const arr2 = [1, 4, 2, 10, 23, 3, 1, 0, 20];
const k2 = 4;
const output2 = 39;

// [100, 2, 300, 400]
//           [ , ]


///loop through array
//      use arr.slice.reduce to get each sum, store in maxSum variable
//
function maxSum(arr, k) {

    let max = 0;
    let sum = 0;
    let arrLength = arr.length;

    for (let i = 0; i < k; i++) {
        sum += arr[i];
        max = sum;
    }


    for (let i = k; i < arrLength; i++) {
        sum += arr[i] - arr[i-k];
        if (sum > max) {
            max = sum;
        }
    }

    return max;

}

console.log(maxSum(arr2, k2))