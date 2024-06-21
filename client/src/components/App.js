import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function App() {

    const [students, setStudents] = useState([])
    const [courses, setCourses] = useState([])
    const [registrations, setRegistrations] = useState([])

    useEffect(() => {
        fetch('/students')
        .then(res => res.json())
        .then(data => setStudents(data))
    }, [])

    useEffect(() => {
        fetch('/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    useEffect(() => {
        fetch('/registrations')
        .then(res => res.json())
        .then(data => setRegistrations(data))
    }, [])

    return (
        <>
            <NavBar />
            <h1>Course Registration</h1>
            <Outlet context={[students, setStudents, courses, setCourses, registrations, setRegistrations]} />
        </>
    )

}

export default App;
