import { useState } from "react"
import { Card, CardContent, Typography, Button, CardActions, CardActionArea } from "@mui/material"

function StudentCard({student, registrations}){

    const [showDetails, setShowDetails] = useState(false)

    const courses = student.registrations.map(reg => reg.courses.name)

    return (
        <Card sx={{minWidth: 275}}>
          <CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5">{student.name}</Typography>
                <Typography variant="subtitle1">Major: {student.major}</Typography>
                <Typography variant="subtitle1">Year: {student.year}</Typography>
                {showDetails ? <Typography variant="subtitle1">{courses}</Typography> : null}
                <CardActions>
                  <Button fullWidth onClick={() => setShowDetails(!showDetails)}>{showDetails ? 'Hide Courses' : 'Show Courses'}</Button>
                </CardActions>
            </CardContent>
          </CardActionArea>
        </Card>
    )
}

export default StudentCard