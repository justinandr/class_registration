import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'

const AddStudentSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    year: Yup.number().required('Year is required'),
    major: Yup.string()
})

function AddStudentForm({postNewStudent}){

    function handleSubmit(values){
        const studentObj = {
            id: '',
            name: values.name,
            year: values.year,
            major: values.major
        }

        postNewStudent(studentObj)
    }
    return (
        <Formik 
            validateOnChange = {false}
            validateOnBlur = {false}
            initialValues={{
                name: '',
                year: '',
                major: ''
            }}
            validationSchema={AddStudentSchema}
            onSubmit={(values, props, initialValues) => {
                handleSubmit(values)
                props.resetForm(initialValues)
            }}
        >
            {({errors}) => (
                <Form>
                <label htmlFor='name'>Name</label>
                <Field name='name' type='text' />
                {errors.name ? <p>{errors.name}</p> : null}

                <label htmlFor='year'>Year</label>
                <Field name='year' type='number' />
                {errors.year ? <p>{errors.year}</p> : null}

                <label htmlFor='major'>Major</label>
                <Field name='major' type='text' />
                {errors.year ? <p>{errors.year}</p> : null}

                <button type='submit'>Submit</button>
            </Form>
            )}
        </Formik>
    )
}

export default AddStudentForm