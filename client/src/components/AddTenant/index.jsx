import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddTenant = () => {
  return (
    <Formik
      initialValues={{ first_name: '', last_name: '', unit_no: '', rent_current: '', rent_starting: '', rent_last_paid: '', rent_status: '', issues: ''}}
      validationSchema={Yup.object({
        first_name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        last_name: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        unit_no: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        rent_current: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        rent_starting: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        rent_last_paid: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        rent_status: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        issues: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        mgr_comments: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="first_name">First Name</label>
        <Field name="first_name" type="text" />
        <ErrorMessage name="first_name" />
        <br />
        <label htmlFor="last_name">Last Name</label>
        <Field name="last_name" type="text" />
        <ErrorMessage name="last_name" />
        <br />
        <label htmlFor="unit_no">Unit Number:</label>
        <Field name="unit_no" type="number" />
        <ErrorMessage name="unit_no" />
        <br />
        <label htmlFor="rent_current">Current Rent:</label>
        <Field name="rent_current" type="number" />
        <ErrorMessage name="unit_no" />
        <br />
        <label htmlFor="rent_starting">Starting Rent:</label>
        <Field name="rent_starting" type="number" />
        <ErrorMessage name="rent_starting" />
        <br />
        <label htmlFor="rent_last_paid">Rent Last Paid?</label>
        <Field name="rent_last_paid" type="text" />
        <ErrorMessage name="rent_last_paid" />
        <br />
        <label htmlFor="rent_status">Rent Status:</label>
        <Field name="rent_status" type="text" />
        <ErrorMessage name="rent_status" />
        <br />
        <label htmlFor="issues">Issues:</label>
        <Field name="issues" type="text" />
        <ErrorMessage name="issues" />
        <br />
        <label htmlFor="mgr_comments">Manager Comments:</label>
        <Field name="mgr_comments" type="textarea" />
        <ErrorMessage name="mgr_comments" />
        <br />
        
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default AddTenant;
