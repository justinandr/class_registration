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

    function postNewRegistration(registrationObj){
        fetch('/registrations', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(registrationObj)
        })
        .then(res => res.json())
        .then(data => setCourses([...courses, data]))
    }

    return (
        <>
            <h1>Registrations</h1>
            <button onClick={() => setShowRegForm(!showRegForm)}>{showRegForm ? 'Hide Registration Form' : 'Create New Registration'}</button>
            {showRegForm ? <RegistrationForm 
                courses={courses}
                students={students}
                postNewRegistration={postNewRegistration}/> 
                : null}
            {courses.map(course => {
                return <RegistrationCard
                    key={course.id}
                    course={course}
                    />
            })}
        </>
    )
}

export default Registrations