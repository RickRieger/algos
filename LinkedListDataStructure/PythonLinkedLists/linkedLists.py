class ListNode:
  def __init__(self,val=None,next=None):
    self.val = val
    self.next = next

class LinkedList:
  def __init__(self):
    self.head = None
    self.length = 0
  def insert(self, val):
    newNode = ListNode(val)
    if(self.head):
      current = self.head
      while(current.next):
        current = current.next
      current.next = newNode
    else:
      self.head = newNode

  def printLinkedList(self):
    current = self.head
    while(current):
      print(current.val)
      current = current.next

  def fromList(self,list):
    for item in list:
      self.insert(item)



list1 = LinkedList()
list1.fromList([1, 2, 4])
list1 = list1.head

list2 = LinkedList()
list2.fromList([1, 3, 4])
list2 = list2.head


class Solution():
    def mergeTwoLists( list1, list2):
        newList = ListNode()
        headOfNewList = newList
        
        while list1 and list2:
            if list1.val < list2.val:
                newList.next = list1
                list1 = list1.next
            else:
                newList.next = list2
                list2 = list2.next
                
            newList = newList.next
        if list1 == None:
            newList.next = list2
        else:
            newList.next = list1
        return headOfNewList.next   


solution = Solution.mergeTwoLists(list1, list2)
while solution:
  print(solution.val)
  solution = solution.next