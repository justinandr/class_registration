import { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"

function RegistrationCard({course}) {

    const [showStudents, setShowStudents] = useState(false) 
    const [studentsToDisplay, setStudentsToDisplay] = useState([])
    const {registrations} = useOutletContext()

    useEffect(() => {
        fetch(`/courses/${course.id}/students`)
        .then(res => res.json())
        .then(data => setStudentsToDisplay(data))
    }, [registrations, course.id])

    return (
        <div className="card">
            <h3>{course.name}</h3>
            <p>Days: {course.days}</p>
            <p>Time: {course.start_time} - {course.end_time}</p>
            {showStudents ? studentsToDisplay.length === 0 ? 
                <p>No students enrolled</p> :
                studentsToDisplay.map(student => {
                    return <p key={student.id}>{student.name}</p>
                }) : null}
            <button onClick={() => setShowStudents(!showStudents)}>
                {showStudents ? 'Hide Enrolled Students' : 'Show Enrolled Students'}
            </button>
        </div>
    )

}

export default RegistrationCard