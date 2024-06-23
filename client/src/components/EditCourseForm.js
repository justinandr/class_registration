import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import moment from 'moment'

const EditCourseSchema = Yup.object().shape({
    name: Yup.string().required('Course name is required'),
    location: Yup.string().required('Location is required'),
    days: Yup.string().required('Days is required'),
    start_time: Yup.string().required('Start time is required'),
    end_time: Yup
        .string()
        .required('End time is required')
        .test('is-greater', 'End time should be greater', function(value){
            const { start_time } = this.parent
            return moment(value, 'HH:mm').isSameOrAfter(moment(start_time, 'HH:mm'))
        })
})

function EditCourseForm({handlePatchCourse}){
    
    function handleSubmit(values) {
        const courseObj = {
            id: '',
            name: values.name,
            location: values.location,
            days: values.days,
            start_time: values.start_time,
            end_time: values.end_time
        }

        handlePatchCourse(courseObj)
    }

    const dayOptions = ['Monday, Wednesday, Friday', 'Tuesday, Thursday']
    const timeOptions = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
                        '15:00', '16:00', '17:00', '18:00']

    return (
        <Formik
            validateOnChange = {false}
            validateOnBlur = {false}
            initialValues={{
                name: '',
                location: '',
                days: '',
                start_time: '',
                end_time: ''
            }} 
            validationSchema = {EditCourseSchema}
            onSubmit = {(values, props, initialValues) => {
                handleSubmit(values)
                props.resetForm(initialValues)
            }}
        >
            {({errors}) => (
                <Form>
                    <label htmlFor='name'>Name</label>
                    <Field name='name' type='text' />
                    {errors.name ? <p>{errors.name}</p> : null}

                    <label htmlFor='location' >Location</label>
                    <Field name='location' type='text' />
                    {errors.location ? <p>{errors.location}</p> : null}

                    <label htmlFor='days' >Days</label>
                    <Field 
                        name='days' 
                        as='select'
                        placeholder='Days'
                    >
                        <option defaultValue value={-1}>Select days</option>
                    </Field>
                    {errors.days ? <p>{errors.days}</p> : null}

                    <label htmlFor='start_time'>Start Time</label>
                    <Field
                        name='start_time'
                        as='select'
                        placeholder='Start Time'
                    >
                        <option defaultValue value={-1}>Select start time</option>
                    </Field>
                    {errors.start_time ? <p>{errors.start_time}</p> : null}

                    <label htmlFor='end_time' >End Time</label>
                    <Field
                        name='end_time'
                        as='select'
                        placeholder='End Time'
                    >
                        <option defaultValue value={-1}>Select end time</option>
                    </Field>
                    {errors.end_time ? <p>{errors.end_time}</p> : null}
                </Form>

            )}
        </Formik>
    )

}

export default EditCourseForm