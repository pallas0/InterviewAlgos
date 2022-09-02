
//https://www.hackerrank.com/challenges/one-month-preparation-kit-lonely-integer/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one&h_r=next-challenge&h_v=zen

function lonelyinteger(a) {
    let numbers = {}
    for (let i =0; i < a.length; i++) {
        if (numbers[a[i]]) {
            numbers[a[i]] += 1;
        }
        else {
            numbers[a[i]] = 1;
        }
    }
    
    return Object.keys(numbers).find(key => numbers[key] == 1);
}