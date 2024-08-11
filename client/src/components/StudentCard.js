import { useEffect, useState } from "react"

function StudentCard({student, registrations}){

    const [showDetails, setShowDetails] = useState(false)
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch(`/students/${student.id}`)
        .then(res => res.json())
        .then((data) => {
            const c = data.registrations.map(reg => reg.courses.name)
            setCourses(c)
        })
    }, [registrations, student.id])

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