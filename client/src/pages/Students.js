import { useOutletContext } from "react-router-dom"
import StudentCard from "../components/StudentCard"
import AddStudentForm from "../components/AddStudentForm"
import { useState } from "react"
import { Typography, Button, Grid, Box } from "@mui/material"

function Students(){

    const [showAddStudentForm, setShowAddStudentForm] = useState(false)
    const {students, setStudents, registrations} = useOutletContext()

    function postNewStudent(studentObj){
        fetch('/students', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(studentObj)
        })
        .then(res => res.json())
        .then(data => {
            setStudents([...students, data])
        })
    }

    return (
        <Box sx={{width: '100%', mt: '10px'}}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 2, md: 3 }}>
            <Grid textAlign={'center'} item xs={12}>
              <Typography variant="h1">Students</Typography>
            </Grid>
            <Grid item xs={12} textAlign={'center'} sx={{mb: 3}}>
              <Button variant="text" onClick={() => setShowAddStudentForm(!showAddStudentForm)}>Add Student ➕</Button>
            </Grid>
              {showAddStudentForm ? 
                <Grid item textAlign={'center'} xs={12}>
                  <AddStudentForm postNewStudent={postNewStudent}/>
                </Grid>
              : null}
              <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 2, md: 3 }}>
              {students.map(student => {
                  return (
                    <Grid item textAlign={'center'} xs={4} key={student.id}>
                      <StudentCard 
                          key = {student.id}
                          student = {student}
                          registrations={registrations}
                      />
                    </Grid>
                  )
              })}
              </Grid>
          </Grid>
        </Box>
    )
}

export default Students