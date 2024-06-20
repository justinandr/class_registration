#!/usr/bin/env python3

from random import randint, choice as rc
from datetime import time

from faker import Faker

from app import app
from models import db, Student, Course, Registration

fake = Faker()

days = ['Monday, Wednesday, Friday', 'Tuesday, Thursday']
terms = ['Fall', 'Spring']

def create_students():
    students = []

    for s in range(20):
        student = Student(name = fake.name(), year = randint(1, 4), major = fake.job())
        students.append(student)
    
    return students

def create_courses():
    courses = []

    for c in range(20):
        cl = Course(
            name = fake.job(), 
            location = fake.street_address(),
            days = rc(days),
            start_time = time(9),
            end_time = time(12) 
            )
        courses.append(cl)
    return courses

def create_registrations():
    registrations = []

    for r in range(20):
        registration = Registration(term = rc(terms), student_id = r + 1, course_id = randint(1, 20))
        registrations.append(registration)

    return registrations

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Clearing db...")
        Student.query.delete()
        Course.query.delete()
        Registration.query.delete()

        print('Seeding students...')
        students = create_students()
        db.session.add_all(students)
        db.session.commit()

        print('Seeding courses...')
        courses = create_courses()
        db.session.add_all(courses)
        db.session.commit()
        
        print('Seeding registrations...')
        registrations = create_registrations()
        db.session.add_all(registrations)
        db.session.commit()

        print("DB seeded successfully.")
