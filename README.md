## Uber Kata

### Functional Spec:
- Using a web interface, users should be able to organize a list of their favorite locations.
- Give them the ability to add new ones and edit or delete any already saved.
- In addition to an editable list, saved locations should be displayed on a map.
- Use geocoding so that the user does not have to enter lat/lng.
 
### Technical Spec:
- Use Python to create the back-end, which consists in a JSON in/out RESTful API for managing favorite locations. 
- Use a microframework (Flask preferred) to create the views.
- Use JavaScript or CoffeeScript to build the frontend, as well as Backbone.js. 

### Database Model:
- id
- lat
- lng
- address (e.g. 405 Market Street, San Francisco, CA, 94105)
- name (e.g. Work)

=============

### RESTful API URLs
**GET /locations**
  + returns a list of all Location instances

**GET /locations/(int:id)**
  + returns a single Location instance with the given id

**DELETE /locations/(int:id)**
  + deletes the Location instance with the given id

**POST /locations**
  + creates a new Location and returns the id

**PUT /locations/(int:id)**
  + updates the Location with the given id
  
=============

### Technical Framework

* Back-end: Python, Flask, Flask-Restless
* Front-end: Backbone.js, Google Maps API
  
  
