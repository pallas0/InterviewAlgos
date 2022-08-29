//https://www.hackerrank.com/challenges/one-month-preparation-kit-mini-max-sum/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one&h_r=next-challenge&h_v=zen

function miniMaxSum(arr) {
    arr.sort((a, b) => a-b);
    let smallest = arr.slice(0, 4);
    let largest = arr.slice(1, 5);
    
    smallest = smallest.reduce((a, b) => a+b)
    largest = largest.reduce((a, b) => a+b)
    
    console.log(smallest + " " + largest)
    
    return;
}