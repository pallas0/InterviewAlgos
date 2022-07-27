function coinSum(coinsInput, totalInput) {
    const cache = {};

    const findWays = (total, coins) => {
        let key = total + "_" + coins;
        if (key in cache) {
            return cache[key];
        }
        if (total < 0) {
            return 0;
        }

        if (coins.length === 0) {
            if (total > 0) {
                return 0;
            }
            return 1;
        }

        let left = findWays(total - coins[coins.length - 1], coins);
        let popped = coins.pop();
        let right = findWays(total, coins);
        coins.push(popped);

        cache[key] = left + right;
        return left + right;
    }

    return findWays(totalInput, coinsInput)


}

////^this fails time-constrained tests w/o cache

//--------
/////below: table method
const coinSum = (coinsInput, totalInput) => {
    const table = new Array(totalInput + 1).fill(0);
    table[0] = 1;

    for (let coin of coinsInput) {
        for (let i = coin; i < table.length; i++) {
            table[i] = table[i] + table[i - coin];

        }
    }
}


//if can  be solved w cache, can also be solved w tabulation