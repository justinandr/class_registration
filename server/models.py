from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from datetime import datetime

from config import db

class Student(db.Model, SerializerMixin):
    __tablename__ = 'students'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    year = db.Column(db.Integer, nullable = False)
    major = db.Column(db.String)

    def __repr__(self):
        return f'Name: {self.name}, Year: {self.year}, Major: {self.major}'
    
class Class(db.Model, SerializerMixin):
    __tablename__ = 'classes'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    location = db.Column(db.String, nullable = False)
    days = db.Column(db.String, nullable = False)
    start_time = db.Column(db.Time, nullable = False)
    end_time = db.Column(db.Time, nullable = False)

    def __repr__(self):
        return f'Class: {self.name}, Location: {self.location}, Days: {self.days}, Time: {self.start_time} - {self.end_time}'
    
class Registration(db.Model, SerializerMixin):
    __tablename__ = 'regristrations'

    id = db.Column(db.Integer, primary_key = True)
    term = db.Column(db.String, nullable = False)
    student_id = db.Column(db.Integer, db.ForeignKey('students.id'), nullable = False)
    class_id = db.Column(db.Integer, db.ForeignKey('classes.id'), nullable = False)