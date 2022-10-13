function countingSort(arr) {
    // let answerArray = Array(arr.length)
    // for (let i =0; i < arr.length; i++) {
    //     if (!answerArray[i]) {
    //         answerArray[i] = 0
    //     }
    //     if (!answerArray[arr[i]]) {
    //         answerArray[arr[i]] = 1
    //     }
    //     else {
    //         answerArray[arr[i]] += 1;
    //     }
    // }
    let answerArray = Array(100).fill(0)
    for (let i = 0; i < arr.length; i++) {
        answerArray[arr[i]] += 1;
    }
    return answerArray;
}