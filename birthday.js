//https://www.hackerrank.com/challenges/one-month-preparation-kit-the-birthday-bar/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

function birthday(s, d, m) {
    console.log(s, d, m)
    let counter = 0;
    let temp = [];
    for (let i =0; i <= s.length - m; i++) {
        temp = s.slice(i, i+m).reduce((a,b) => a+b, 0);
        if (temp == d) {
            counter += 1;
        }
    }
    return counter;
}