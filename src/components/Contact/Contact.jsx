import React from 'react';
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
import './Contact.scss';
import contact1 from '../../assets/img/contact/contact-1.png';

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Email is not valid').required('Email is required'),
  comment: Yup.string().min(2, 'Too Short!').required('Comment is required'),
});

const Contact = () => {
  return (
    <div className="contact pt-200px">
      <div className="container">
        <div className="size-16 color-dim-gray text-center mb-30px">CONTACT US</div>
        <div className="contact-title size-48 color-nero text-center font-title font-weight-bold mb-80px">Thanks for reaching out!</div>
        <div className="row">
          <div className="col-12 mb-5 mb-md-0 col-md-6">
            <div className="p-3 contact-info" style={{backgroundColor: '#fafafa'}}>
              <img src={contact1} alt="contact image" className="w-100 mb-40px" />
              <div className="size-24 color-nero text-center mb-30px">huynhthimykieu9999@gmail.com</div>
              <div className="size-24 color-nero text-center">+84 345411942</div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <Formik  
              initialValues={{
                name: '',
                email: '',
                comment: '',
              }}
              validationSchema={ContactSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setSubmitting(true);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="contact-form p-3">
                  <div className="contact-form-group mb-35px">
                    <div className="size-16 color-nero mb-12px">NAME</div>
                    <Field placeholder="NAME" name="name" className="size-16 color-nero pb-18px w-100"/>
                    <ErrorMessage className="color-contessa text-left mt-2" name="name" component="div" />
                  </div>
                  <div className="contact-form-group mb-35px">
                    <div className="size-16 color-nero mb-12px">EMAIL</div>
                    <Field placeholder="EMAIL" name="email" className="size-16 color-nero pb-18px w-100"/>
                    <ErrorMessage className="color-contessa text-left mt-2" name="email" component="div" />
                  </div>
                  <div className="contact-form-group mb-35px">
                    <div className="size-16 color-nero mb-12px">YOUR COMMENT</div>
                    <Field rows={8} name="comment" placeholder="Your comment" className="w-100" component="textarea"/>
                    <ErrorMessage className="color-contessa text-left mt-2" name="comment" component="div" />
                  </div>
                  <button className="contact-btn text size-14 text color-white text-uppercase" disabled={isSubmitting} type="submit">SEND COMMENT</button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;