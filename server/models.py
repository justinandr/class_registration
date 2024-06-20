#HIT ALL CONSTRAINT REQUIREMENTS

from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from datetime import datetime

from config import db

class Student(db.Model, SerializerMixin):
    __tablename__ = 'students'

    serialize_rules = ('-registrations.cyclist', '-classes.cyclists')

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    year = db.Column(db.Integer, nullable = False)
    major = db.Column(db.String)

    registrations = db.relationship('Registration', back_populates = 'students', cascade = 'all, delete-orphan')

    classes = association_proxy('registrations', 'classes', creator = lambda class_obj: Registration(cl = class_obj))

    def __repr__(self):
        return f'Name: {self.name}, Year: {self.year}, Major: {self.major}'
    
class Class(db.Model, SerializerMixin):
    __tablename__ = 'classes'

    serialize_rules = ('-registrations.classes', '-students.classes')

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    location = db.Column(db.String, nullable = False)
    days = db.Column(db.String, nullable = False)
    start_time = db.Column(db.Time, nullable = False)
    end_time = db.Column(db.Time, nullable = False)

    registrations = db.relationship('Registration', back_populates = 'classes', cascade = 'all, delete-orphan')

    students = association_proxy('registrations', 'students', creator = lambda student_obj: Registration(student = student_obj))

    def __repr__(self):
        return f'Class: {self.name}, Location: {self.location}, Days: {self.days}, Time: {self.start_time} - {self.end_time}'
    
class Registration(db.Model, SerializerMixin):
    __tablename__ = 'regristrations'

    id = db.Column(db.Integer, primary_key = True)
    #Term must be user submittable
    term = db.Column(db.String, nullable = False)
    student_id = db.Column(db.Integer, db.ForeignKey('students.id'), nullable = False)
    class_id = db.Column(db.Integer, db.ForeignKey('classes.id'), nullable = False)

    students = db.relationship('Student', back_populates = 'registrations')
    classes = db.relationship('Class', back_populates = 'registrations')