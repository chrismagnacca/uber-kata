import sqlite3

from flask import Flask, request, session, g, redirect, url_for, \
    abort, render_template, flash

from contextlib import closing

# configuration
DATABASE = '/tmp/uber.db'
DEBUG = True
SECRET_KEY = 'development key'
USERNAME = 'admin'
PASSWORD = 'default'

# application
app = Flask(__name__)
app.config.from_object(__name__)
app.config.from_envvar('UBER_SETTINGS', silent = True)

def initialize():
    with closing(connect()) as db:

        with app.open_resource('schema.sql', mode = 'r') as f:
            db.cursor().executescript(f.read())
        db.commit()

def connect():
  return sqlite3.connect(app.config['DATABASE'])

@app.before_request
def before_request():
  g.db = connect()

@app.teardown_request
def teardown_request(exception):
  db = getattr(g, 'db', None)
  if db is not None:
    db.close()


@app.route('/')
def show():
  return None





if __name__ == '__main__':
  initialize()
  app.run()
