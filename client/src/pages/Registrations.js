import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { Grid, Box, Typography, Button } from "@mui/material"
import RegistrationForm from '../components/RegistrationForm'
import RegistrationCard from '../components/RegistrationCard'

function Registrations(){

    const [showRegForm, setShowRegForm] = useState(false)
    const {courses, registrations, setRegistrations} = useOutletContext()

    return (
      <Box sx={{width: '100%', mt: '10px', ml: 3}}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 2, md: 3 }}>
          <Grid item textAlign={'center'} xs={12}>
            <Typography variant='h1'>Registrations</Typography>
          </Grid>
          <Grid item textAlign={'center'} xs={12}>
            <Button sx={{mb: 3}} onClick={() => setShowRegForm(!showRegForm)}>{showRegForm ? 'Hide Registration Form' : 'Add Registration ➕'}</Button>
          </Grid>
          {showRegForm ? 
            <Grid item textAlign={'center'} xs={12}>
              <RegistrationForm 
              registrations={registrations}
              setRegistrations={setRegistrations}
              /> 
            </Grid>
          : null}
          <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 2, md: 3 }}>
            {courses.map(course => {
                return(
                  <Grid item textAlign={'center'} xs={4} key={course.id}>
                    <RegistrationCard key={course.id}  course={course}/>
                  </Grid>
                ) 
            })}
          </Grid>
        </Grid>
      </Box>
    )
}

export default Registrations