class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        ughhhhh alright how tf do we do this --
        well, first, convert each list into an integer
        then add
        then convert sum into reverse list format
        """
        l1_num = ""
        l2_num = ""
        while l1:
            l1_num = str(l1.val) + l1_num
            l1 = l1.next

        while l2:
            l2_num = str(l2.val) + l2_num
            l2 = l2.next
        
        answer_str = list(str(int(l1_num) + int(l2_num)))
        final_format = list(map(lambda n: int(n), answer_str))

        print(final_format)

        l3 = ListNode(final_format.pop())
        n = len(final_format)

        for i in range(0, n):
            x = final_format.pop()
            l3.next = ListNode(x)
            ##you're overwriting the next val

        

        print(l3)