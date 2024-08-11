import { useOutletContext } from "react-router-dom"
import StudentCard from "../components/StudentCard"
import AddStudentForm from "../components/AddStudentForm"
import { useState } from "react"

function Students(){

    const [showAddStudentForm, setShowAddStudentForm] = useState(false)
    const {students, setStudents, registrations} = useOutletContext()

    function postNewStudent(studentObj){
        fetch('/students', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(studentObj)
        })
        .then(res => res.json())
        .then(data => {
            setStudents([...students, data])
        })
    }

    

    function logFallStudents(){

    }

    return (
        <div className="container">
            <h1>Students</h1>
            <button >Fall</button>
            <button onClick={() => setShowAddStudentForm(!showAddStudentForm)}>Add a Student</button>
            {showAddStudentForm ? <AddStudentForm postNewStudent={postNewStudent}/> : null}
            <div className="card-container">
            {students.map(student => {
                return <StudentCard 
                    key = {student.id}
                    student = {student}
                    registrations={registrations}
                />
            })}
            </div>
        </div>
    )
}

export default Students