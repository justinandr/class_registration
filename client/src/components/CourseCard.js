import { useState } from "react";
import EditCourseForm from "./EditCourseForm";

function CourseCard({course, handleDeleteCourse, handlePatchCourse}){

    const [showMoreInfo, setShowMoreInfo] = useState(false)
    const [showEditCourseForm, setShowEditCourseForm] = useState(false)


    return (
        <div className="card">
            <div className="card-content">
            <h3>{course.name}</h3>
            <p>Location: {course.location}</p>
            {showMoreInfo ? 
                <>
                <p>Days: {course.days}</p>
                <p>Time: {course.start_time} - {course.end_time}</p>
                </> 
            : null}
            <button onClick={() => setShowMoreInfo(!showMoreInfo)}>{showMoreInfo ? 'Hide Information' : 'More Information'}</button>
            <button onClick={() => setShowEditCourseForm(!showEditCourseForm)}>Edit Course</button>
            <button onClick={() => handleDeleteCourse(course)}>Delete Course</button>
            {showEditCourseForm ? <EditCourseForm handlePatchCourse={handlePatchCourse} course={course} /> : null}
            </div>
        </div>
    )
}

export default CourseCard