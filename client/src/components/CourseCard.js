import { useState } from "react";
import { Card, CardContent, Typography, CardActionArea } from "@mui/material"
import EditCourseForm from "./EditCourseForm";

function CourseCard({course, handleDeleteCourse, handlePatchCourse}){

    const [showMoreInfo, setShowMoreInfo] = useState(false)
    const [showEditCourseForm, setShowEditCourseForm] = useState(false)


    return (
      <Card sx={{minWidth: 250}}>
        <CardActionArea onClick={() => setShowMoreInfo(!showMoreInfo)}>
          <CardContent>
              <Typography gutterBottom variant="h5">{course.name}</Typography>
              <Typography variant="subtitle1">Location: {course.location}</Typography>
              <Typography variant="subtitle1">Days: {course.days}</Typography>
              <Typography variant="subtitle1">Time: {course.start_time} - {course.end_time}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  )
}

export default CourseCard