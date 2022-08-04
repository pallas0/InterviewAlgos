
//find the number of islands -- islands being the 1's grouped together
//the zeros are water

function rectangleIsland(matrix) {
  let n = 0;

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] === 1 &&
        ((i - 1) < 0 || matrix[i - 1][j] === 0) &&
        ((j - 1) < 0 || matrix[i][j - 1] === 0)) {
        n++;

      }
    }
  }
  return n;
}

let islandOne = [[1, 1, 0, 1],
[1, 1, 0, 1],
[0, 0, 0, 0],
[0, 0, 1, 0]]

console.log(rectangleIsland(islandOne))