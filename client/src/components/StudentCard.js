import { useState } from "react"

function StudentCard({student}){

    const [showDetails, setShowDetails] = useState(false)

    const courses = student.registrations.map(reg => reg.courses.name)

    return (
        <div className="student_card">
            <h2>{student.name}</h2>
            <p>Year: {student.year}</p>
            <p>Major: {student.major}</p>
            {showDetails ? <p>{courses}</p> : null}
            <button onClick={() => setShowDetails(!showDetails)}>{showDetails ? 'Hide Courses' : 'Show Courses'}</button>
        </div>
    )
}

export default StudentCard