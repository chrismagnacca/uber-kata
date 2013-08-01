import os
import uber
import unittest

class UberTestCase(unittest.TestCase):

  def setup(self):
    self.db_fd, uber.app.config['DATABASE'] = tempfile.mkstemp()
    uber.app.config['TESTING'] = True
    self.app = uber.app.test_client()
    uber.initialize()








if __name__ == '__main__':
  unittest.main()
