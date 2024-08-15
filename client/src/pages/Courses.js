import { useOutletContext } from "react-router-dom"
import CourseCard from "../components/CourseCard"
import { useState } from "react"
import AddCourseForm from "../components/AddCourseForm"
import { Grid, Box, Typography, Button } from "@mui/material"

function Courses(){

    const [showAddCourseForm, setShowAddCourseForm] = useState(false)
    const {courses, setCourses} = useOutletContext()

    function handleDeleteCourse(course){
        fetch(`/courses/${course.id}`, {
            method: 'DELETE'
        })
        .then(() => setCourses((courses) => 
            courses.filter((filterCourse) => filterCourse.id !== course.id)
        ))
    }
    
    return (
      <Box sx={{width: '100%', mt: '10px', ml: 3}}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 2, md: 3 }}>
          <Grid textAlign={'center'} item xs={12}>
            <Typography variant="h1">Courses</Typography>
          </Grid>
          <Grid item xs={12} textAlign={'center'} sx={{mb: 3}}>
            <Button variant="text" onClick={() => setShowAddCourseForm(!showAddCourseForm)}>Add Course ➕</Button>
          </Grid>
            {showAddCourseForm ? 
              <Grid item textAlign={'center'} xs={12}>
                <AddCourseForm />
              </Grid>
            : null}
            <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 2, md: 3 }}>
            {courses.map(course => {
                return (
                  <Grid item textAlign={'center'} xs={4} key={course.id}>
                    <CourseCard course={course} handleDeleteCourse={handleDeleteCourse} />
                  </Grid>
                )
            })}
            </Grid>
        </Grid>
      </Box>
    )

}

export default Courses