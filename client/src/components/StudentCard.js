import { useState } from "react"

function StudentCard({student}){

    const [showDetails, setShowDetails] = useState(false)

    const courses = student.registrations.map(reg => reg.courses.name)

    return (
        <div className="card">
            <div className="card-content">
                <h3>{student.name}</h3>
                <p>Year: {student.year}</p>
                <p>Major: {student.major}</p>
                {showDetails ? <p>{courses}</p> : null}
                <button onClick={() => setShowDetails(!showDetails)}>{showDetails ? 'Hide Courses' : 'Show Courses'}</button>
            </div>
        </div>
    )
}

export default StudentCard