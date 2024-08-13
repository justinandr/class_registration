import { useState } from "react"
import { Card, CardContent, Typography, CardActionArea } from "@mui/material"

function StudentCard({student, registrations}){

    const [showDetails, setShowDetails] = useState(false)

    const courses = student.registrations.map(reg => reg.courses.name)

    return (
        <Card sx={{minWidth: 250}}>
          <CardActionArea onClick={() => setShowDetails(!showDetails)}>
            <CardContent>
                <Typography gutterBottom variant="h5">{student.name}</Typography>
                <Typography variant="subtitle1">Major: {student.major}</Typography>
                <Typography variant="subtitle1">Year: {student.year}</Typography>
                {showDetails ? 
                  <>
                    <Typography variant='subtitle1'>Courses:</Typography>
                    {courses.map(course => {
                      return <Typography key={course} variant="subtitle1">{course}</Typography>
                    })}
                  </>
                : null}
            </CardContent>
          </CardActionArea>
        </Card>
    )
}

export default StudentCard