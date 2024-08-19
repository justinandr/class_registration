# Course Registration

This application is designed to track students, courses and registrations.

## Installation

Clone this repository and save it to your local environment. Navigate to the server directory and run the following command to install the back end dependencies:

```
pipenv install
```

Next, navigate to the client directory and run the following command to install the front end dependencies:

```
npm install
```

# Running the Program

## Database

Navigate to the server directory and run the following command to enter the virtual environment:

```
pipenv shell
```

 Next, run ```flask db migrate``` to initialize the database on your machine, followed by ```flask db upgrade head``` to complete the migration. Then run ```python seed.py``` to seed the database with test data.

## Server

While in the server directory, run ```python app.py``` to start the server.

## Client

Navigate to the client directory and run ```npm start``` to compile the react app which will automatically open a browser window with the app running in it.

# Usage

Navigate through the app using the nav bar.

The Students page will show current students, the courses that they are enrolled in as well as allow you to add a new student to the database. 

The Courses will show the current courses available. You may add a new course or edit or delete an existing course.

The Registrations page will show the current courses and the students who are enrolled in those courses. You may also enroll a student in a course.

# Acknowledgments

* Maureen Dempsey for always supporting me and pushing me to complete this program
* Eric Gaspar for always being willing to take a look at my code