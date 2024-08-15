import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

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
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
            <NavBar />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Outlet context={{students, setStudents, courses, setCourses, registrations, setRegistrations}} />
            </LocalizationProvider>
        </ThemeProvider>
    )

}

export default App;
