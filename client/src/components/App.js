import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

function App() {

    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch('/students')
        .then(res => res.json())
        .then((data) => setStudents(data))
    }, [])

    students.forEach(student => console.log(student.name))
}

export default App;
