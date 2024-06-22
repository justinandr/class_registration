import { useOutletContext } from "react-router-dom"
import StudentCard from "../components/StudentCard"

function Students(){

    const [students] = useOutletContext()

    return (
        <>
            <div className="student_card_container">
            <h1>Students</h1>
            {students.map(student => {
                return <StudentCard 
                    key = {student.id}
                    student = {student}

                />
            })}
            </div>
        </>
    )
}

export default Students