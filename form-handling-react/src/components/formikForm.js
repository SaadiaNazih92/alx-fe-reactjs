import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Il nome utente è obbligatorio'),
  email: Yup.string().email('Email non valida').required('L\'email è obbligatoria'),
  password: Yup.string().required('La password è obbligatoria'),
});

const FormikForm = () => {
  // Valori iniziali
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  // Funzione di invioo
  const onSubmit = (values, { resetForm }) => {
    console.log('Dati modulo inviati (Formik):', values);
    alert('Registrazione Formik riuscita!');
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <h3>Registrazione (Formik)</h3>

          <div>
            <label htmlFor="username">Username:</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage name="username" component="p" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="p" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="p" style={{ color: 'red' }} />
          </div>

          <button type="submit">Registrati</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
