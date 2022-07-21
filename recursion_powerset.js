

const powerset = (word) => {
    // Write your code here
    const result = [];
    
    const findCombos = (build, depth) => {
        if (depth == word.length) {
            result.push(build);
            return;
        }
        //left
        findCombos(build, depth + 1);
        //right
        findCombos(build + word[depth], depth + 1)
        //ok, when this was [depth+1], it tacked in a undefined
    }
    
    findCombos("", 0);
    return result;
}

console.log(powerset("b"))