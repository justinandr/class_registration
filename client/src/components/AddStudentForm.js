import React, { useState } from 'react'
import { Box, TextField, Button, Typography } from '@mui/material'
import { useOutletContext } from 'react-router-dom'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

function AddTournamentForm() {

    const [name, setName] = useState('')
    const [year, setYear] = useState('')
    const [major, setMajor] = useState('')
    const {students, setStudents} = useOutletContext()

    function handleSubmit(event){
        event.preventDefault()
        const formData = {
            name: name, 
            year: year,
            major: major
        }

        fetch('/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => setStudents([...students, data]))

        setName('')
        setYear('')
        setMajor('')
    }

    return (
      <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
            }}
        >
              <Typography textAlign={'center'} variant='h6'>Add Student</Typography>
              <Box
                noValidate
                component='form'
                onSubmit={handleSubmit}
                sx={{mt: '10px', mb: '10px', alignItems:'center', display: 'flex', flexDirection: 'column'}}
            >
              <Grid2 container spacing={2}>
                  <Grid2 xs={12} sm={12}>
                      <TextField
                          fullWidth
                          label='Name'
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                      />
                  </Grid2>
                  <Grid2 xs={12} sm={12}>
                      <TextField
                          fullWidth
                          label='Year'
                          value={year}
                          onChange={(e) => setYear(e.target.value)}
                      />
                  </Grid2>
                  <Grid2 xs={12} sm={12}>
                      <TextField
                          fullWidth
                          label='Major'
                          value={major}
                          onChange={(e) => setMajor(e.target.value)}
                      />
                  </Grid2>
                  <Grid2 xs={12} sm={12}>
                      <Button fullWidth type='submit' variant='contained' sx={{mb: '5px'}}>Submit</Button>
                  </Grid2>
              </Grid2>
            </Box>
      </Box>
    )
}

export default AddTournamentForm