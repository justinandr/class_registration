#!/usr/bin/env python3

from flask import request, make_response
from flask_restful import Resource
from datetime import time

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
        
class StudentById(Resource):
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

            return make_response('', 204)
        
        return {"error": "404 Not Found"}, 404
    
class StudentsByCourseId(Resource):
    def get(self, id):
        course = Course.query.filter_by(id = id).first()
        students = [student.to_dict(only = ('name', 'id')) for student in course.students]

        if course:
            if students:
                return students, 200
            return [], 200
        
        return {"error": "404 Not Found"}
    
class Courses(Resource):
    def get(self):
        courses = Course.query.all()

        if courses:
            courses_response = [course.to_dict() for course in courses]
            return courses_response, 200
        
        return {"error": "404 Not Found"}, 404
    
    def post(self):
        data = request.get_json()

        new_course = Course(
            name = data['name'],
            location = data['location'],
            days = data['days'],
            start_time = time(int(data['start_time'])),
            end_time = time(int(data['end_time']))
        )

        db.session.add(new_course)
        db.session.commit()

        return new_course.to_dict(), 201
    
class FallStudents(Resource):
    def get(self):
        students = Student.query.all()
        fall_students = []
        for student in students:
            for registration in student.registrations:

                if registration.term == 'Fall':
                    fall_students.append(student)
        # print(fall_students)
        if students:
            students_response = [student.to_dict() for student in fall_students]

            return make_response(students_response, 200)
        
        return {"error": "404 Not Found"}, 404
    
class CourseById(Resource):
    def get(self, id):
        course = Course.query.filter_by(id = id).first()

        if course:
            return course.to_dict(), 200
        
        return {"error": "404 Not Found"}, 404
    
    def patch(self, id):
        course = Course.query.filter_by(id = id).first()
        data = request.get_json()

        if course:

            for attr in data:
                if attr == 'start_time':
                    setattr(course, attr, time(int(data[attr])))
                elif attr == 'end_time':
                    setattr(course, attr, time(int(data[attr])))
                else:
                    setattr(course, attr, data[attr])

            db.session.add(course)
            db.session.commit()

            return course.to_dict(), 200
        
        return {"error": "404 Not Found"}, 404
    
    def delete(self, id):
        course = Course.query.filter_by(id = id).first()

        if course:
            db.session.delete(course)
            db.session.commit()

            return make_response('', 204)
        
        return {"error": "404 Not Found"}, 404
    
class Registrations(Resource):
    def get(self):
        registrations = Registration.query.all()

        if registrations:
            registrations_response = [registration.to_dict() for registration in registrations]

            return registrations_response, 200
        
        return {"error": "404 Not Found"}
    
    def post(self):
        data = request.get_json()

        new_registration = Registration(
            term = data['term'],
            student_id = data['student_id'],
            course_id = data['course_id']
        )

        db.session.add(new_registration)
        db.session.commit()

        return new_registration.to_dict(), 201
    
class RegistrationsById(Resource):
    def get(self, id):
        registration = Registration.query.filter_by(id = id).first()

        if registration:
            return registration.to_dict(), 200
        
        return {"error": "404 Not Found"}, 404
    
    def patch(self, id):
        registration = Registration.query.filter_by(id = id).first()
        data = request.get_json()

        if registration:
            for attr in data:
                setattr(registration, attr, data[attr])

            db.session.add(registration)
            db.session.commit()

            return registration.to_dict(), 200
        
        return {"error": "404 Not Found"}, 404
    
    def delete(self, id):
        registration = Registration.query.filter_by(id = id).first()

        if registration:
            db.session.delete(registration)
            db.session.commit()

            return '', 204
        
        return {"error": "404 Not Found"}, 404

api.add_resource(Home, '/')
api.add_resource(Students, '/students')
api.add_resource(StudentById, '/students/<int:id>')
api.add_resource(StudentsByCourseId, '/courses/<int:id>/students')
api.add_resource(Courses, '/courses')
api.add_resource(CourseById, '/courses/<int:id>')
api.add_resource(Registrations, '/registrations')
api.add_resource(RegistrationsById, '/registrations/<int:id>')
api.add_resource(FallStudents, '/students/fall')

if __name__ == '__main__':
    app.run(port=5555, debug=True)