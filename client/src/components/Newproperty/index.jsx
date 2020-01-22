import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Newproperty = () => {
    return (
        <Formik
            intialValues={{ unit_no: '', bedrooms: '', baths: '', sqft: '', occupied: '', date_available: '', rent: '' }}
            validationSchema={Yup.object({
                unit_no: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                bedrooms: Yup.string()
                    .max(20, 'Must be 20 characters of less')
                    .required('Required'),
                baths: Yup.string()
                    .max(20, 'Must be 20 characters of less')
                    .required('Required'),
                sqft: Yup.string()
                    .max(20, 'Must be 20 characters of less')
                    .required('Required'),
                occupied: Yup.string()
                    .max(20, 'Must be 20 characters of less')
                    .required('Required'),
                date_available: Yup.string()
                    .max(20, 'Must be 20 characters of less')
                    .required('Required'),
                rent: Yup.string()
                    .max(20, 'Must be 20 characters of less')
                    .required('Required')
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form>
                <label htmlFor="unit_no">Unit Number</label>
                <Field name="unit_no" type="text" />
                <ErrorMessage name="unit_no" />
                <br />
                <label htmlFor="bedrooms">Number of Bedrooms</label>
                <Field name="bedrooms" type="text" />
                <ErrorMessage name="bedrooms" />
                <br />
                <label htmlFor="sqft">Square Footage of Unit:</label>
                <Field name="sqft" type="number" />
                <ErrorMessage name="sqft" />
                <br />
                <label htmlFor="occupied">Occupied?</label>
                <Field name="occupied" type="boolean" />
                <ErrorMessage name="occupied" />
                <br />
                <label htmlFor="date_available">Date Available:</label>
                <Field name="date_available" type="text" />
                <ErrorMessage name="date_available" />
                <br />
                <label htmlFor="rent">Rent</label>
                <Field name="rent" type="text" />
                <ErrorMessage name="rent" />
                <br />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default Newproperty;





















