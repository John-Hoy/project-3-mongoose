import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddTenant = () => {
  return (
    <Formik
      initialValues={{ first_name: '', last_name: '', unit_no: '', rent_current: '', rent_starting: '', rent_last_paid: '', rent_status: '', issues: '' }}
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
        <h2>Add Tenant</h2>
        <div className="field">
          <label htmlFor="first_name" className="label">First Name</label>
          <div class="control">
            <Field name="first_name" className="input" type="text" placeholder="First Name" />
            <ErrorMessage name="first_name" />
          </div>
        </div>
      
        <div className="field">
          <label htmlFor="last_name" className="label">Last Name</label>
          <div className="control">
            <Field name="last_name" className="input" type="text" placeholder="Last Name" />
            <ErrorMessage name="last_name" />
          </div>
        </div>
       
        <div className="field">
          <label htmlFor="unit_no" className="label">Unit Number</label>
          <div className="control">
            <Field name="unit_no" className="input" type="text" placeholder="Unit Number" />
            <ErrorMessage name="unit_no" />
          </div>
        </div>
        
        <div className="field">
          <label htmlFor="current_rent" className="label">Current Rent</label>
          <div className="control">
            <Field name="current_rent" className="input" type="text" placeholder="Current Rent" />
            <ErrorMessage name="current_rent" />
          </div>
        </div>
    
        <div className="field">
          <label htmlFor="starting_rent" className="label">Starting Rent</label>
          <div className="control">
            <Field name="starting_rent" className="input" type="text" placeholder="Starting Rent" />
            <ErrorMessage name="starting_rent" />
          </div>
        </div>
        
        <div className="field">
          <label htmlFor="rent_last_paid" className="label">Rent Last Paid</label>
          <div className="control">
            <Field name="rent_last_paid" className="input" type="text" placeholder="Rent Last Paid?" />
            <ErrorMessage name="rent_last_paid" />
          </div>
        </div>
        
        <div class="field">
          <label htmlFor="rent_status" className="label">Rent Status</label>
          <div class="control">
            <Field name="rent_status" className="input" type="text" placeholder="Rent Status" />
            <ErrorMessage name="rent_status" />
          </div>
        </div>
        
        <div class="field">
          <label htmlFor="issues" className="label">Issues</label>
          <div class="control">
            <Field name="issues" className="input" type="textarea" placeholder="Issues" />
            <ErrorMessage name="issues" />
          </div>
        </div>
        
        <div class="field">
          <label htmlFor="mgr_comments" className="label">Manager Comments</label>
          <div class="control">
            <Field name="mgr_comments" className="input" type="text" placeholder="Manager Comments" />
            <ErrorMessage name="mgr_comments" />
          </div>
        </div>
        

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default AddTenant;
