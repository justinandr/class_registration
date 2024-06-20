#!/usr/bin/env python3

from flask import request, make_response
from flask_restful import Resource

from config import app, db, api
from models import Student, Course, Registration

class Home(Resource):
    def get(self):
        return '<h1>Course Registration</h1>'
    
class Students(Resource):
    def get(self):
        students = Student.query.all()

        if students:
            students_response = [student.to_dict() for student in students]
            return students_response, 200
        
        return {"error": "404 Not Found"}, 404
    
    def post(self):
        data = request.get_json()

        new_student = Student(
            name = data['name'],
            year = data['year'],
            major = data['major']
        )

        db.session.add(new_student)
        db.session.commit()

        return make_response(new_student.to_dict(), 201)
        
class StudentsById(Resource):
    def get(self, id):
        student = Student.query.filter_by(id = id).first()
        
        if student:
            return student.to_dict(), 200
        return {"error": "404 Not Found"}, 404
    
    def patch(self, id):
        student = Student.query.filter_by(id = id).first()
        data = request.get_json()

        if student:
            for attr in data:
                setattr(student, attr, data[attr])

            db.session.add(student)
            db.session.commit()

            return make_response(student.to_dict(), 200)
        
        return {"error": "404 Not Found"}, 404
    
    def delete(self, id):
        student = Student.query.filter_by(id = id).first()

        if student:
            db.session.delete(student)
            db.session.commit()
        
        return {"error": "404 Not Found"}, 404

api.add_resource(Home, '/')
api.add_resource(Students, '/students')
api.add_resource(StudentsById, '/students/<int:id>')


if __name__ == '__main__':
    app.run(port=5555, debug=True)