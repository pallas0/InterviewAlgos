//https://www.hackerrank.com/challenges/one-month-preparation-kit-the-birthday-bar/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

function birthday(s, d, m) {
    let counter = 0;
    let sum = 0;
    
    for (let i = 0; i < m; i++) {
        sum += s[i];
    }
    
    if (sum == d) {
        counter++;
    }
    for (let i=m; i < s.length; i++) {
        sum += s[i] - s[i - m];
        if (sum == d) {
            counter++;
        }
    }
    
    return counter;
}