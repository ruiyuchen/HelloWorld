import unittest
from HelloWorld import HelloWorld

class TestStringMethods(unittest.TestCase):

    def test_HelloWorld(self):
        helloworld = HelloWorld()
        result = helloworld.hello()
        self.assertEqual(result, 'Hello World!')

if __name__ == '__main__':
    unittest.main()
