import { useState } from "react";

function CourseCard({course, handleDeleteCourse}){

    const [showMoreInfo, setShowMoreInfo] = useState(false)

    return (
        <div className="student-card">
            <h2>{course.name}</h2>
            <p>Location: {course.location}</p>
            {showMoreInfo ? 
            <>
            <p>Days: {course.days}</p>
            <p>{course.start_time} - {course.end_time}</p>
            </> 
            : null}
            <button onClick={() => setShowMoreInfo(!showMoreInfo)}>{showMoreInfo ? 'Hide Information' : 'More Information'}</button>
            <button>Edit Course</button>
            <button onClick={() => handleDeleteCourse(course)}>Delete Course</button>
        </div>
    )
}

export default CourseCard