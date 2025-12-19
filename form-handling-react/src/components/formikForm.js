import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Schema di validazione con Yup
const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

const FormikForm = () => {
    const initialValues = {
        username: '',
        email: '',
        password: ''
    };

    const handleSubmit = (values) => {
        // Simulazione API
        console.log('Formik Form submitted:', values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <div>
                    <label>Username:</label>
                    <Field type="text" name="username" />
                    <ErrorMessage name="username" component="div" style={{color: 'red'}} />
                </div>

                <div>
                    <label>Email:</label>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" style={{color: 'red'}} />
                </div>

                <div>
                    <label>Password:</label>
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" style={{color: 'red'}} />
                </div>

                <button type="submit">Register</button>
            </Form>
        </Formik>
    );
};

export default FormikForm;
