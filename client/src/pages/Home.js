import React from "react"
import { Typography, Container } from "@mui/material"

function Home(){
    
    return (
        <Container maxWidth={"sm"} sx={{pt: "150px"}}>
            <Typography gutterBottom textAlign={'left'} variant="h1">Course ✏ Registration</Typography>
            <Typography variant="h5" textAlign={'left'}>Use the navigation bar at the top of the page to view current students, courses and registrations. </Typography>
        </Container>
    )

}

export default Home