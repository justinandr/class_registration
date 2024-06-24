import { Formik, Field, Form } from 'formik'
import { useOutletContext } from 'react-router-dom'
import * as Yup from 'yup'

const RegistrationSchema = Yup.object().shape({
    student_id: Yup.string().required('Student is required'),
    course_id: Yup.string().required('Course is required'),
    term: Yup.string().required('Term is required')
})

function RegistrationForm(){

    const {registrations, setRegistrations, students, courses} = useOutletContext()

    function postNewRegistration(registrationObj){
        fetch('/registrations', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(registrationObj)
        })
        .then(res => res.json())
        .then(data => setRegistrations([...registrations, data]))
    }

    function handleSubmit(values){
        const registrationObj = {
            id: '',
            term: values.term,
            student_id: values.student_id,
            course_id: values.course_id
        }
        postNewRegistration(registrationObj)
    }

    const studentOptions = students.map(student => {
        return (
            <option key={student.id} value={student.id}>{student.name}</option>
        )
    })

    const courseOptions = courses.map(course => {
        return (
            <option key={course.id} value={course.id}>{course.name}</option>
        )
    })

    return (
        <Formik
            validateOnBlur = {false}
            validateOnChange = {false}
            initialValues={{
                term: '',
                student_id: '',
                course_id: ''
            }}
            validationSchema={RegistrationSchema}
            onSubmit={(values, props, initialValues) => {
                handleSubmit(values)
                props.resetForm(initialValues)
            }}
        >
            {({errors}) => (
                <Form>
                    <label htmlFor='term'>Term</label>
                    <Field
                        name='term'
                        as='select'
                        placeholder='Term'
                    >
                        <option defaultValue value={-1}>Select a term</option>
                        <option value={'Spring'}>Spring</option>
                        <option value={'Fall'}>Fall</option>
                    </Field>
                    {errors.term ? <p>{errors.term}</p> : null}

                    <label htmlFor='student_id'>Student</label>
                    <Field
                        name='student_id'
                        as='select'
                        placeholder='Student'
                    >
                        <option defaultValue value={-1}>Select a student</option>
                        {studentOptions}
                    </Field>
                    {errors.student_id ? <p>{errors.student_id}</p> : null}

                    <label htmlFor='course_id'>Course</label>
                    <Field
                        name='course_id'
                        as='select'
                        placeholder='Course'
                    >
                        <option defaultValue value={-1}>Select a course</option>
                        {courseOptions}
                    </Field>
                    {errors.course_id ? <p>{errors.course_id}</p> : null}
                    
                    <button type='submit'>Submit</button>
                </Form>
            )}
        </Formik>
    )

}

export default RegistrationForm