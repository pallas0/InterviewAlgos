//NOT checked w hackerrank, may be buggy

function robotPaths(matrix) {
    let result = 0;

    const traverse = (row, col) => {
        //let key = row + '-' (alt method I didn't get down in time)
        if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length) {
            //out of bounds
            return;
        }
        if (matrix[row][col] === 1) {
            //already visited
            return;
        }
        if (row === matrix.length - 1 && col === matrix[0].length - 1) {
            //reach destination
            result++;
            return;
        }

        matrix[row][col] = 1;

        traverse(row-1, col);
        traverse(row+1, col);
        traverse(row, col-1);
        traverse(row, col+1);

        matrix[row][col] = 0;
        //visited.delete(key); (same deal as above, didn't get this down in time)


    }
    traverse(0,0);

    return result;
}