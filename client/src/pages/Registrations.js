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
        <>
            <h1>Registrations</h1>
            <button onClick={() => setShowRegForm(!showRegForm)}>{showRegForm ? 'Hide Registration Form' : 'Create New Registration'}</button>
            {showRegForm ? <RegistrationForm /> : null}
            {registrations.map(registration => {
                return <RegistrationCard
                    key={registration.id} 
                    />
            })}
        </>
    )
}

export default Registrations