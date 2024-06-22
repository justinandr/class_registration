import { useOutletContext } from "react-router-dom"
import StudentCard from "../components/StudentCard"

function Students(){

    const [students] = useOutletContext()

    return (
        <>
            <h1>Students</h1>
            {students.map(student => {
                return <StudentCard 
                    key = {student.id}
                    student = {student}

                />
            })}
        </>
    )
}

export default Students