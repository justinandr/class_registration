import React, { useState } from 'react'
import { Box, TextField, Button, Typography, Grid } from '@mui/material'
import { useOutletContext } from 'react-router-dom'

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
                marginTop: 8,
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
                sx={{mt: '10px', display: 'flex', flexDirection: 'column'}}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            label='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            label='Year'
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            label='Major'
                            value={major}
                            onChange={(e) => setMajor(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth type='submit' variant='contained' sx={{mb: '5px'}}>Submit</Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default AddTournamentForm