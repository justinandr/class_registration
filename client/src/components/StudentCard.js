import { useOutletContext } from "react-router-dom"

function StudentCard({student}){
    return (
        <div>
            <h2>{student.name}</h2>
            <p>Year: {student.year}</p>
            <p>Major: {student.major}</p>
            <button>Show More</button>
            <button>Edit</button>
        </div>
    )
}

export default StudentCard