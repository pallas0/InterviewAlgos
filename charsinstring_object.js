// counting the number of characters in string
// Example: aaabbbbcccc
// count('aaabbbbccccc') => 'a3b4c5'
// count ('abc') => 'a1b1c1'

function count(string) {
    let stringObject = {}

    for (let i = 0; i < string.length; i++) {
        if (string[i] in stringObject) {
            stringObject[string[i]] += 1;
        }
        else {
            stringObject[string[i]] = 1;
        }
    }

    stringObject = JSON.stringify(stringObject).replace(/[^a-z0-9]/gi, '');

    return stringObject;
}

console.log(count('abc'))