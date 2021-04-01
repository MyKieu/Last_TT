import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './NewsLetter.scss';

const NewsLetterSchema = Yup.object().shape({
    email: Yup.string().email('Email is not valid').required(''),
});

const NewsLetter = () => {
    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);
        console.log('akakak');
        setSubmitting(true);
    };

    return (
        <div className="news-letter pt-80px pb-80px">
            <div className="container-fluid">
                <h4 className="size-16 color-dim-gray text-center text-uppercase">NEWSLETTER</h4>
                <h3 className="news-letter-subtitle size-48 font-title font-weight-bold text-center mt-30px">Subscribe now & get 15% off</h3>
                <div className="d-flex justify-content-center mt-5">
                    <Formik
                        initialValues={{ email: '', }}
                        validationSchema={NewsLetterSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="news-letter-form position-relative">
                                <Field type="text" name="email" placeholder="Your email" className="w-100 size-16" />
                                <ErrorMessage name="email" component="div" className="color-contessa mt-2" />
                                <button type="submit" disabled={isSubmitting} className="news-letter-btn text-white text-uppercase size-14 position-absolute">
                                    subscribe
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;

