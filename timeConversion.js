
//https://www.hackerrank.com/challenges/one-month-preparation-kit-time-conversion/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

function timeConversion(s) {
    let inputArray = s.split(":")
    let am = inputArray[2].includes("AM")
    inputArray[2] = inputArray[2].slice(0,2) 
    
    let answerArray = [0, inputArray[1], inputArray[2]]
    
    if (inputArray[0] == 12 && am == true) {
        answerArray[0] = "00"
    }
    else if (am == true || inputArray[0] == 12) {
        answerArray[0] = inputArray[0];
    }
    else {
        inputArray[0] = parseInt(inputArray[0]);
        answerArray[0] = (inputArray[0] + 12).toString();
    }
    return answerArray.join(":");
}