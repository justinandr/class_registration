import { useOutletContext } from "react-router-dom"
import CourseCard from "../components/CourseCard"
import { useState } from "react"

function Courses(){

    const [showAddCourseForm, setShowAddCourseForm] = useState(false)
    const {courses, setCourses} = useOutletContext()

    function handleDeleteCourse(course){
        fetch(`/courses/${course.id}`, {
            method: 'DELETE'
        })
        .then(() => setCourses((courses) => 
            courses.filter((filterCourse) => filterCourse.id !== course.id)
        ))
    }

    function handlePatchCourse(courseObj, course){
        fetch(`/courses/${course.id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(courseObj)
        })
        .then(res => res.json())
        .then(data => setCourses(courses.map(course => {
            if (course.id !== data.id) {
                return course
            }
            else {
                return data
            }
        })))
    }
    
    return (
        <>
            <div className="container">
                <h1>Courses</h1>
                <button onClick={() => setShowAddCourseForm(!showAddCourseForm)}>Add a Course</button>
                <div className="card-container">
                {courses.map(course => {
                    return <CourseCard
                        key = {course.id}
                        course = {course} 
                        handleDeleteCourse = {handleDeleteCourse}
                        handlePatchCourse = {handlePatchCourse}
                    />
                })}
                </div>
            </div>
        </>
    )

}

export default Courses