import { useState } from "react";
import { Card, CardContent, Typography, CardActionArea, CardActions, Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditCourseForm from "./EditCourseForm";

function CourseCard({course, handleDeleteCourse}){

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
          <CardActions>
            <Button fullWidth onClick={() => handleDeleteCourse(course)} startIcon={<DeleteIcon />}>Delete</Button>
            <Button fullWidth startIcon={<EditIcon />} onClick={() => setShowEditCourseForm(!showEditCourseForm)}>Edit</Button>
          </CardActions>
        </CardActionArea>
        {showEditCourseForm ? <EditCourseForm course={course} /> : null}
      </Card>
  )
}

export default CourseCard