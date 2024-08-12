import { useState } from "react"

function RegistrationCard({course}) {

    const [showStudents, setShowStudents] = useState(false)

    const studentsToDisplay = course.registrations.map(reg => reg.students.name)

    return (
        <div className="card">
            <div className="card-content">
            <h3>{course.name}</h3>
            <p>Days: {course.days}</p>
            <p>Time: {course.start_time} - {course.end_time}</p>
            {showStudents ? studentsToDisplay.length === 0 ? 
                <p>No students enrolled</p> :
                studentsToDisplay.map(student => {
                    return <p key={student}>{student}</p>
                }) : null}
            <button onClick={() => setShowStudents(!showStudents)}>
                {showStudents ? 'Hide Enrolled Students' : 'Show Enrolled Students'}
            </button>
            </div>
        </div>
    )

}

export default RegistrationCard