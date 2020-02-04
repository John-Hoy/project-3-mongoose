import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const ContactForm = () => {
    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', message: '' }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                lastName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                message: Yup.string()
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
                <h2>Contact Us</h2>
                <div className="field">
                    <label htmlFor="firstName" className="label">First Name</label>
                    <div class="control">
                        <Field name="firstName" className="input" type="text" placeholder="First Name" />
                        <ErrorMessage name="firstName" />
                    </div>
                </div>

                <div className="field">
                    <label htmlFor="lastName" className="label">Last Name</label>
                    <div className="control">
                        <Field name="lastName" className="input" type="text" placeholder="Last Name" />
                        <ErrorMessage name="lastName" />
                    </div>
                </div>

                <div className="field">
                    <label htmlFor="message" className="label">Message</label>
                    <div className="control">
                        <Field name="message" className="input" type="textarea" placeholder="Your Message" />
                        <ErrorMessage name="message" />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;
