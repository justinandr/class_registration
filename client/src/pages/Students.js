import { useOutletContext } from "react-router-dom"

function Students(){

    const [students] = useOutletContext()

    console.log(students)

    return <h1>Students Page</h1>
}

export default Students