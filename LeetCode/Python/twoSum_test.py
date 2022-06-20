from ast import Or
import unittest
from twoSum import twoSum, twoSum2, twoSum3

class TestTwoSum(unittest.TestCase):
  def test_twoSum(self):
    # return indices of two numbers that add up to target number
    self.assertEqual(twoSum([2, 7, 11, 15], 9), [0, 1])
    self.assertEqual(twoSum2([2, 7, 11, 15], 9), [0, 1])
    self.assertEqual(twoSum3([2, 7, 11, 15], 9), [0, 1])
