import { useState } from "react"

function RegistrationCard({course}) {

    const [showStudents, setShowStudents] = useState(false)

    return (
        <div className="card">
            <h2>{course.name}</h2>
            <p>Days: {course.days}</p>
            <p>Time: {course.start_time} - {course.end_time}</p>
            {showStudents ? course.registrations.length === 0 ? 
                <p>No students enrolled</p> :
                course.registrations.map(reg => {
                    return <p key={reg.students.id}>{reg.students.name}</p>
                }) : null}
            <button onClick={() => setShowStudents(!showStudents)}>
                {showStudents ? 'Hide Enrolled Students' : 'Show Enrolled Students'}
            </button>
        </div>
    )

}

export default RegistrationCard