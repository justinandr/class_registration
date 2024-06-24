import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import RegistrationForm from '../components/RegistrationForm'
import RegistrationCard from '../components/RegistrationCard'

function Registrations(){

    const [showRegForm, setShowRegForm] = useState(false)
    const {courses, registrations, setRegistrations} = useOutletContext()

    return (
        <div className='container'>
            <h2>Registrations</h2>
            <button onClick={() => setShowRegForm(!showRegForm)}>{showRegForm ? 'Hide Registration Form' : 'Create New Registration'}</button>
            {showRegForm ? <RegistrationForm 
                registrations={registrations}
                setRegistrations={setRegistrations}
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