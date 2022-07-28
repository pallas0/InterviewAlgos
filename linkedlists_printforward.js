function printForward(node) {
    // Write your code here
    let current = node;
    
    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }

}



//definition below
class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  let head = new ListNode(1);
  head.next = new ListNode(5);
  head.next.next = new ListNode(7);
  head.next.next.next = new ListNode(10);
  head.next.next.next.next = new ListNode(7);
  head.next.next.next.next.next = new ListNode(5);
  head.next.next.next.next.next.next = new ListNode(1);