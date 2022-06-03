# 20. Valid Parentheses
# Easy

# 13346

# 596

# Add to List

# Share
# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
 

# Example 1:

# Input: s = "()"
# Output: true
# Example 2:

# Input: s = "()[]{}"
# Output: true
# Example 3:

# Input: s = "(]"
# Output: false
 

# Constraints:

# 1 <= s.length <= 104
# s consists of parentheses only '()[]{}'.
# Accepted
# 2,288,291
# Submissions
# 5,600,735
# Seen this question in a real interview before?

# Yes

# No
# An interesting property about a valid parenthesis expression is that a sub-expression of a valid expression should also be a valid expression. (Not every sub-expression) e.g.
# { { } [ ] [ [ [ ] ] ] } is VALID expression
#           [ [ [ ] ] ]    is VALID sub-expression
#   { } [ ]                is VALID sub-expression
# Can we exploit this recursive structure somehow?
# What if whenever we encounter a matching pair of parenthesis in the expression, we simply remove it from the expression? This would keep on shortening the expression. e.g.
# { { ( { } ) } }
#       |_|

# { { (      ) } }
#     |______|

# { {          } }
#   |__________|

# {                }
# |________________|

# VALID EXPRESSION!
# The stack data structure can come in handy here in representing this recursive structure of the problem. We can't really process this from the inside out because we don't have an idea about the overall structure. But, the stack can help us process this recursively i.e. from outside to inwards.


s = "{{}[][[[]]]}"

class Solution(object):
    def isValid(self, s):
        stack = []
        hashMap = {
            ")":"(",
            "]":"[",
            "}":"{"
        }
        for char in s:
            if char in hashMap:
                if stack and stack[-1] == hashMap[char]:
                    stack.pop()
                else: 
                    return False
            else:
                stack.append(char)
                
        return True if not stack else False

print(Solution.isValid(Solution,s))