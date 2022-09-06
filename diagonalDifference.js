//https://www.hackerrank.com/challenges/one-month-preparation-kit-diagonal-difference/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

function diagonalDifference(arr) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i =0; i < arr.length; i++) {
        sum1 += arr[i][i];
        sum2 += arr[i][(arr.length-1)-i];
    }
    
    return Math.abs(sum1-sum2);

}