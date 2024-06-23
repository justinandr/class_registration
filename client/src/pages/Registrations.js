import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import RegistrationForm from '../components/RegistrationForm'

function Registrations(){

    const [showRegForm, setShowRegForm] = useState(false)
    const {registrations, setRegistrations} = useOutletContext()

    return (
        <>
            <h1>Registrations</h1>
            <button onClick={() => setShowRegForm(!showRegForm)}>Create New Registration</button>
            {registrations.map(registration => {
                return <RegistrationForm />
            })}
        </>
    )
}

export default Registrations