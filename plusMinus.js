

//https://www.hackerrank.com/challenges/one-month-preparation-kit-plus-minus/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

function plusMinus(arr) {
    let answerArray = [0,0,0]
    for (let i =0; i < arr.length; i++) {
        if (arr[i] > 0) {
            answerArray[0] += 1;
        }
        else if (arr[i] < 0) {
            answerArray[1] += 1;
        }
        else if (arr[i] == 0) {
            answerArray[2] += 1;
        }
    }
    
    for (let i =0; i < answerArray.length; i++) {
        answerArray[i] = answerArray[i]/arr.length;
        console.log(answerArray[i].toFixed(6))
    }
    
    return;

}