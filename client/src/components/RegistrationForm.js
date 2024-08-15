import { useState } from 'react'
import { Box, Button, Typography, MenuItem, Select, InputLabel } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { useOutletContext } from 'react-router-dom'

function RegistrationForm(){

    const [term, setTerm] = useState('')
    const [studentId, setStudentId] = useState('')
    const [courseId, setCourseId] = useState('')
    const [termOpen, setTermOpen] = useState(false)
    const [studentIdOpen, setStudentIdOpen] = useState(false)
    const [courseIdOpen, setCourseIdOpen] = useState(false)
    const {registrations, setRegistrations, students, courses} = useOutletContext()

    function handleTermOpen(){
      setTermOpen(true)
    }

    function handleTermClose(){
      setTermOpen(false)
    }

    function handleStudentIdOpen(){
      setStudentIdOpen(true)
    }

    function handleStudentIdClose(){
      setStudentIdOpen(false)
    }

    function handleCourseIdOpen(){
      setCourseIdOpen(true)
    }

    function handleCourseIdClose(){
      setCourseIdOpen(false)
    }

    function postNewRegistration(registrationObj){
        fetch('/registrations', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(registrationObj)
        })
        .then(res => res.json())
        .then(data => setRegistrations([...registrations, data]))
    }

    function handleSubmit(){
        const registrationObj = {
            id: '',
            term: term,
            student_id: studentId,
            course_id: courseId
        }
        postNewRegistration(registrationObj)
    }

    const studentOptions = students.map(student => {
        return (
            <MenuItem key={student.id} value={student.id}>{student.name}</MenuItem>
        )
    })

    const courseOptions = courses.map(course => {
        return (
            <MenuItem key={course.id} value={course.id}>{course.name}</MenuItem>
        )
    })

    return (
      <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Typography textAlign={'center'} variant='h6'>Add Registration</Typography>
            <Box
                noValidate
                component='form'
                onSubmit={handleSubmit}
                sx={{mt: '10px', mb: '10px', alignItems: 'center', display: 'flex', flexDirection: 'column'}}
            >
                <Grid2 container spacing={2}>
                  <Grid2 xs={12}>
                    <InputLabel id='term'>Term</InputLabel>
                    <Select
                        labelId='term'
                        fullWidth
                        label='Term'
                        open={termOpen}
                        onClose={handleTermClose}
                        onOpen={handleTermOpen}
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    >
                        <MenuItem value={'Spring'}>Spring</MenuItem>
                        <MenuItem value={'Fall'}>Fall</MenuItem>
                    </Select>
                  </Grid2>
                  <Grid2 xs={12}>
                    <InputLabel id='student'>Student</InputLabel>
                    <Select
                        labelId='student'
                        fullWidth
                        label='Student'
                        open={studentIdOpen}
                        onClose={handleStudentIdClose}
                        onOpen={handleStudentIdOpen}
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                    >
                        {studentOptions}
                    </Select>
                  </Grid2>
                  <Grid2 xs={12}>
                    <InputLabel id='course'>Course</InputLabel>
                    <Select
                        labelId='course'
                        fullWidth
                        label='Course'
                        open={courseIdOpen}
                        onClose={handleCourseIdClose}
                        onOpen={handleCourseIdOpen}
                        value={courseId}
                        onChange={(e) => setCourseId(e.target.value)}
                    >
                        {courseOptions}
                    </Select>
                  </Grid2>
                    <Grid2 xs={12}>
                        <Button fullWidth type='submit' variant='contained' sx={{mb: '5px'}}>Submit</Button>
                    </Grid2>
                </Grid2>
            </Box>
        </Box>
    )

}

export default RegistrationForm