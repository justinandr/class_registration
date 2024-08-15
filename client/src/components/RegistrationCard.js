import { useState } from "react"
import { Card, CardContent, Typography, CardActionArea, Button } from "@mui/material"

function RegistrationCard({course}) {

    const [showStudents, setShowStudents] = useState(false)

    const studentsToDisplay = course.registrations.map(reg => reg.students.name)

    return (
        <Card>
            <CardActionArea className="card-content">
              <CardContent>
                <Typography gutterBottom variant="h5">{course.name}</Typography>
                <Typography variant="subtitle1">Days: {course.days}</Typography>
                <Typography variant="subtitle1">Time: {course.start_time} - {course.end_time}</Typography>
                {showStudents ? studentsToDisplay.length === 0 ? 
                    <Typography variant="subtitle1">No students enrolled</Typography> :
                    studentsToDisplay.map(student => {
                        return <Typography key={student} variant="subtitle1">{student}</Typography>
                    }) : null}
                <Button onClick={() => setShowStudents(!showStudents)}>
                    {showStudents ? 'Hide Enrolled Students' : 'Show Enrolled Students'}
                </Button>
              </CardContent>
            </CardActionArea>
        </Card>
    )

}

export default RegistrationCard