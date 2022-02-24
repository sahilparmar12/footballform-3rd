
# Football Registration Form Phase 2

A brief description of what this project does.


## Tech Stack

HTML, CSS, Javascript, AJAX, JAVA Servlets


## Documentation

This project contains 5 types files
- HTML FILE (footballform.html)
    
- CSS FILE (styling_of_page.css)

- JAVASCRIPT FILES (validations.js, data.js, datafetch.js)

- JAVA SERVLET FILES: (MainServlet.java)

- JAVA FILES: (User.java, footballDAO.java)







## Dependencies
For the smooth working of the project some external jar files
were added to class buildpath and then in the 
Tomcat => lib folder.

- json-simple-1.1.1.jar
- mssql-jdbc-8.4.1.jre11.jar 
- gson-2.8.2.jar
## JAVA SERVLET FILES

### MainServlet.java
this servlet contins 3 methods which are used to Insert,
fetch and update data from and to database. The methods used are doGet for fetching, 
doPost for insertion and doPut for updation.
## HTML FILE
### footballform.html
The first file footballform.html contains the basic html 
code for the form which includes various field for 
user input and submit button.

## CSS FILE
### styling_of_page.css
This file contains all the styling 
properties used for styling the page.


## JAVASCRIPT FILES
### validations.js
Tis file contains all the functions which are used
for validating the form. It includes flag variables
which are initially set as false and when a particular
field passes a validation the flag associated whith
that field is set true. The submit button is initially
disaled but when all the flags have value true and
some other fields have non empty value then the
submit button will be enabled.

### data.js
This file contains code for fetching
 interdependent data for Country city state lists
with the help of multiple API calls and then bind
the response of an API call with its particular list.

### datafetch.js
This file is used to send and get json data to and from MainServlet.java
for various functions when respective buttons are clicked.
## JAVA FILES
### User.java
It is a normal java class use to store the parameters
or entries from the form or from database. It contains getter and setter methods
to get and to set values of variables.

### footballDAO.java
This class contain functions which are used in doing
database functions like insertion, updation, and 
data retrieval