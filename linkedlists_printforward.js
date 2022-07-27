function printForward(node) {
    // Write your code here
    let current = node;
    
    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }

}


