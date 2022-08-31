
//https://www.hackerrank.com/challenges/one-month-preparation-kit-sparse-arrays/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

function matchingStrings(strings, queries) {
    // Write your code here
    let answerArray = [];
    let count = 0;
    for (let i =0; i < queries.length; i++) {
        for (let j = 0; j < strings.length; j++) {
            if (strings[j] == queries[i]) {
                count++;
            }
        }
        answerArray.push(count);
        count = 0;
    }
    
    return answerArray;

}