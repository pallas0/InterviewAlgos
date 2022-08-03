/*
 * Complete the 'find_all_paths' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. Vertex origin
 *  2. String destination
 */

/*
 * For your reference:
 *
 * Vertex {
 *   char id;
 *   edges[Vertex];
 * }
 *
 */

function find_all_paths(origin, destination) {
    // Write your code here
    const visited = new Set();
    const result = [];
    
    const traverse = (current, path) => {
        if (visited.has(current)) {
            return;
        }
        if (current.id == destination) {
            result.push(path.join(''));
            return;
        }
        
        const edges = current.edges;
        
        //before traveling outwards
        visited.add(current);
        
        for (let edge of edges) {
            path.push(edge.id);
            traverse(edge, path);
            path.pop();
        }
        
        visited.delete(current);
    }
    traverse(origin, [origin.id]);
    
    result.sort();
    return result;

}