#!/usr/bin/env python3

from flask import request, make_response
from flask_restful import Resource

from config import app, db, api
from models import Student, Class, Registration

class Home(Resource):
    def get(self):
        return '<h1>Class Registration</h1>'
    
class Students(Resource):
    def get(self):
        students = Student.query.all()

        if students:
            students_response = [student.to_dict() for student in students]
            return students_response, 200
        
        return {"error": "404 Not Found"}, 404
    
    def post(self):
        data = request.get_json()

        try:
            new_student = Student(
                name = data['name'],
                year = data['year'],
                major = data['major']
            )

            db.session.add(new_student)
            db.session.commit()

            return make_response(new_student.to_dict(), 200)
        except ValueError as ve:
            return {"error": f"{ve}"}, 400

api.add_resource(Home, '/')
api.add_resource(Students, '/students')


if __name__ == '__main__':
    app.run(port=5555, debug=True)
