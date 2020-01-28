import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./newproperty.css";



const Newproperty = () => {

    const validationSchema = Yup.object({
        unit_no: Yup.string().max(20, 'Must be 20 characters or less!!!').required('Required'),
        bedrooms: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        baths: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        sqft: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        occupied: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        date_available: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        rent: Yup.string().max(20, 'Must be 20 characters or less').required('Required')
    })

    return (
        // console.log(Yup.string().max(20).required('required'))
        <Formik
            initialValues={{ unit_no: "", bedrooms: "", baths: "", sqft: "", occupied: "", date_available: "", rent: "" }}
            validationSchema={validationSchema}

            onSubmit={(values) => {
                console.log(values);

                axios.post('/api/units', values)
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
  
                // axios({
                //     method: 'post',
                //     url: '/api/units',
                //     data: values
                // });
            }}

        >

            {props => (

                <form onSubmit={props.handleSubmit}>
    
                    <label htmlFor="unit_no">Unit Number</label>
                    <input
                        type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.unit_no}
                        name="unit_no"
                    />
                    <ErrorMessage className="errMsg" name="unit_no" />

                    <label htmlFor="bedrooms">Number of Bedrooms</label>
                    <input
                        type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.bedrooms}
                        name="bedrooms"
                    />
                    <ErrorMessage name="bedrooms" />

                    <label htmlFor="baths">Number of Baths</label>
                    <input
                        type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.baths}
                        name="baths"
                    />
                    <ErrorMessage name="baths" />

                    <label htmlFor="sqft">Square Footage</label>
                    <input
                        type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.sqft}
                        name="sqft"
                    />
                    <ErrorMessage name="sqft" />

                    <label htmlFor="occupied">Occupied?</label>
                    <input
                        type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.occupied}
                        name="occupied"
                    />
                    <ErrorMessage name="occupied" />

                    <label htmlFor="date_available">Date Available</label>
                    <input
                        type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.date_available}
                        name="date_available"
                    />
                    <ErrorMessage name="date_available" />

                    <label htmlFor="rent">Rent</label>
                    <input
                        type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.rent}
                        name="rent"
                    />
                    <ErrorMessage name="rent" />

                    {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                    <button type="submit">Submit</button>
                </form>
            )}
        </Formik>
    );
};

export default Newproperty;





















