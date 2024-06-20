#!/usr/bin/env python3

from random import randint, choice as rc

from faker import Faker

from app import app
from models import db, Student, Class, Registration

fake = Faker()

days = ['Monday, Wednesday, Friday', 'Tuesday, Thursday']
terms = ['Fall', 'Spring']

def create_students():
    students = []

    for s in range(20):
        student = Student(fake.name(), randint(1, 4), fake.job())
        students.append(student)
    
    return students

def create_classes():
    classes = []

    for c in range(20):
        cl = Class(
            fake.job(), 
            fake.street_address(),
            rc(days),
            fake.time(),
            fake.time() 
            )
        classes.append(cl)
    return classes

def create_registrations():
    registrations = []

    for r in range(20):
        registration = Registration(rc(terms), r + 1, randint(1, 20))
        registrations.append(registration)

    return registrations

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Clearing db...")
        Student.query.delete()
        Class.query.delte()
        Registration.query.delete()

        print('Seeding students...')
        students = create_students()
        db.session.add_all(students)
        db.session.commit()

        print('Seeding classes...')
        cl = create_classes()
        db.session.add_all(cl)
        db.session.commit()
        
        print('Seeding registrations...')
        registrations = create_registrations()
        db.session.add_all(registrations)
        db.session.commit()

        print("DB seeded successfully.")
