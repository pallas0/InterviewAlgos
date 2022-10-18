//https://www.hackerrank.com/challenges/one-month-preparation-kit-two-arrays/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

function twoArrays(k, A, B) {
    // Write your code here
    A.sort((a,b) => a - b);
    B.sort((a,b) => b - a);
    
    for (let i =0; i < A.length; i++) {
        if (A[i] + B[i] < k) {
            return "NO";
        }
    }
    
    return "YES"
}