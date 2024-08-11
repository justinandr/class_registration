import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import moment from 'moment'

const EditCourseSchema = Yup.object().shape({
    name: Yup.string().required('Course name is required'),
    location: Yup.string().required('Location is required'),
    days: Yup.string().required('Days is required'),
    start_time: Yup.number().required('Start time is required'),
    end_time: Yup
        .number()
        .required('End time is required')
        .test('is-greater', 'End time should be greater', function(value){
            const { start_time } = this.parent
            return moment(value, 'HH:mm').isSameOrAfter(moment(start_time, 'HH:mm'))
        })
})

function EditCourseForm({handlePatchCourse, course}){
    
    function handleSubmit(values) {
        const courseObj = {
            name: values.name,
            location: values.location,
            days: values.days,
            start_time: values.start_time,
            end_time: values.end_time
        }

        handlePatchCourse(courseObj, course)
    }

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
                        <option value={'Monday, Wednesday, Friday'}>Monday, Wednesday, Friday</option>
                        <option value={'Tuesday, Thursday'}>Tuesday, Thursday</option>
                    </Field>
                    {errors.days ? <p>{errors.days}</p> : null}

                    <label htmlFor='start_time'>Start Time</label>
                    <Field
                        name='start_time'
                        as='select'
                        placeholder='Start Time'
                    >
                        <option defaultValue value={-1}>Select start time</option>
                        <option value={'9'}>09:00</option>
                        <option value={'10'}>10:00</option>
                        <option value={'11'}>11:00</option>
                        <option value={'12'}>12:00</option>
                        <option value={'13'}>13:00</option>
                        <option value={'14'}>14:00</option>
                        <option value={'15'}>15:00</option>
                        <option value={'16'}>16:00</option>
                        <option value={'17'}>17:00</option>
                        <option value={'18'}>18:00</option>
                    </Field>
                    {errors.start_time ? <p>{errors.start_time}</p> : null}

                    <label htmlFor='end_time' >End Time</label>
                    <Field
                        name='end_time'
                        as='select'
                        placeholder='End Time'
                    >
                        <option defaultValue value={-1}>Select end time</option>
                        <option value={'09'}>09:00</option>
                        <option value={'10'}>10:00</option>
                        <option value={'11'}>11:00</option>
                        <option value={'12'}>12:00</option>
                        <option value={'13'}>13:00</option>
                        <option value={'14'}>14:00</option>
                        <option value={'15'}>15:00</option>
                        <option value={'16'}>16:00</option>
                        <option value={'17'}>17:00</option>
                        <option value={'18'}>18:00</option>
                    </Field>
                    {errors.end_time ? <p>{errors.end_time}</p> : null}

                    <button type='submit' >Submit</button>
                </Form>

            )}
        </Formik>
    )

}

export default EditCourseForm