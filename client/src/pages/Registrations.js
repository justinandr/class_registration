import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import RegistrationForm from '../components/RegistrationForm'
import RegistrationCard from '../components/RegistrationCard'

function Registrations(){

    const [showRegForm, setShowRegForm] = useState(false)
    const {registrations, 
            setRegistrations,
            students,
            setStudents,
            courses,
            setCourses} = useOutletContext()

    return (
        <div className='container'>
            <h2>Registrations</h2>
            <button onClick={() => setShowRegForm(!showRegForm)}>{showRegForm ? 'Hide Registration Form' : 'Create New Registration'}</button>
            {showRegForm ? <RegistrationForm 
                courses={courses}
                students={students}
                setCourses={setCourses}
                /> 
                : null}
            <div className='card-container'>
            {courses.map(course => {
                return <RegistrationCard
                    key={course.id}
                    course={course}
                    />
            })}
            </div>
        </div>
    )
}

export default Registrations