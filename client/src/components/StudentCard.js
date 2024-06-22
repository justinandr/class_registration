import { useState } from "react"

function StudentCard({student}){

    return (
        <div className="student_card">
            <h2>{student.name}</h2>
            <p>Year: {student.year}</p>
            <p>Major: {student.major}</p>
            <button>Show More</button>
        </div>
    )
}

export default StudentCard