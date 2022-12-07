class Solution(object):
    def twoSum(self, nums, target):

        """
        ok, what's happening here?
        [2, 7, 11, 15]
        (upon first loop through)
        visited[2] = 0
        visited = {2: 0}

        second loop through
            if 9 - 7 in visited (it is)
                return [visited[9-7], i]
        """
        visited = {}

        for i, num in enumerate(nums):
            if target - num in visited:
                return [visited[target-num], i]
            visited[num] = i

    print (twoSum(0, [2, 7, 11], 9))

