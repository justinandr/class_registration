import { useOutletContext } from "react-router-dom"
import CourseCard from "../components/CourseCard"
import { useState } from "react"

function Courses(){

    const [showAddCourseForm, setShowAddCourseForm] = useState(false)
    const {courses, setCourses} = useOutletContext()
    
    return (
        <>
            <div className="card-container">
                <h1>Courses</h1>
                <button onClick={() => setShowAddCourseForm(!showAddCourseForm)}>Add a Course</button>
                {courses.map(course => {
                    return <CourseCard
                        key = {course.id}
                        course = {course} 
                    />
                })}
            </div>
        </>
    )

}

export default Courses