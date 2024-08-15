import React, { useState } from 'react'
import { Box, TextField, Button, Typography, MenuItem, InputLabel, Select } from '@mui/material'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import dayjs from 'dayjs'
import { useOutletContext } from 'react-router-dom'

function AddCourseForm() {

    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [days, setDays] = useState('')
    const [daysOpen, setDaysOpen] = useState(false)
    const [startTime, setStartTime] = useState(dayjs())
    const [endTime, setEndTime] = useState(dayjs())
    const {courses, setCourses} = useOutletContext()

    function handleDaysOpen(){
      setDaysOpen(true)
    }
    
    function handleDaysClose(){
      setDaysOpen(false)
    }

    function handleSubmit(event){
        event.preventDefault()
        const formData = {
            name: name, 
            location: location, 
            days: days,
            startHour: startTime.$H,
            startMinute: startTime.$m,
            endHour: endTime.$H,
            endMinute: endTime.$m
        }

        fetch('/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => setCourses([...courses, data]))

        setName('')
        setLocation('')
        setDays('')
        setStartTime(dayjs())
        setEndTime(dayjs())
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
            <Typography textAlign={'center'} variant='h6'>Add Course</Typography>
            <Box
                noValidate
                component='form'
                onSubmit={handleSubmit}
                sx={{mt: '10px', alignItems: 'center', display: 'flex', flexDirection: 'column'}}
            >
                <Grid2 container spacing={2}>
                    <Grid2 xs={12}>
                        <TextField
                            fullWidth
                            label='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Grid2>
                    <Grid2 xs={12}>
                        <TextField
                            fullWidth
                            label='Location'
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </Grid2>
                    <Grid2 xs={12}>
                    <InputLabel id='days'>Days</InputLabel>
                        <Select
                            labelId='Days'
                            fullWidth
                            label='Days'
                            open={daysOpen}
                            onClose={handleDaysClose}
                            onOpen={handleDaysOpen}
                            value={days}
                            onChange={(e) => setDays(e.target.value)}
                        >
                            <MenuItem value={'Monday, Wednesday, Friday'}>Monday, Wednesday, Friday</MenuItem>
                            <MenuItem value={'Tuesday, Thursday'}>Tuesday, Thursday</MenuItem>
                        </Select>
                    </Grid2>
                    <Grid2 xs={12}>
                      <TimePicker fullWidth label='Start Time' 
                        ampm={false} 
                        value={startTime}
                        onChange={(newValue) => setStartTime(newValue)}
                      />
                    </Grid2>
                    <Grid2 xs={12}>
                      <TimePicker label='End Time' 
                        ampm={false} 
                        value={endTime}
                        onChange={(newValue) => setEndTime(newValue)}
                      />
                    </Grid2>
                    <Grid2 xs={12}>
                        <Button fullWidth type='submit' variant='contained' sx={{mb: '5px'}}>Submit</Button>
                    </Grid2>
                </Grid2>
            </Box>
        </Box>
    )
}

export default AddCourseForm