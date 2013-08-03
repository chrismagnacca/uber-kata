import flask
import flask.ext.sqlalchemy
import flask.ext.restless

from flask.ext.sqlalchemy import SQLAlchemy
from flask import Flask, g, jsonify, render_template, request, abort

# Create the Flask Application & the Flask-SQLAlchemy Object.
app = flask.Flask(__name__)
app.config['DEBUG'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = flask.ext.sqlalchemy.SQLAlchemy(app)

# Create Flask-SQLALchemy Models
class Location(db.Model):
  __tablename__ = 'locations'
  id = db.Column(db.Integer, primary_key=True, nullable=False)
  lat = db.Column(db.Float, nullable=False)
  lng = db.Column(db.Float, nullable=False)
  address = db.Column(db.Float, nullable=False)
  nickname = db.Column(db.VARCHAR, nullable=False)

# Create the Database Tables
db.create_all()

# Create the Application Index
@app.route('/')
def hello_world():
  return render_template('index.html')

# Create the Flask-Restless API manager.
manager = flask.ext.restless.APIManager(app, flask_sqlalchemy_db=db)

# Create API Endpoints, Available at /<tablename> by Default
manager.create_api(Location, methods=['GET', 'POST', 'PUT', 'DELETE'], url_prefix='')

# start the flask loop
app.run()
