import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';

import './SignupModal.scss';
import modalAction from '../../actions/modal.action';


const SignUpSchema = Yup.object().shape({

  email: Yup.string().email('Email is not valid').required('Email is required'),
  password: Yup.string().required('Password is required'),
  
});

const SignupModal = (props, ref) => {
  const dispatch = useDispatch();

  const handleShowLogIn = () => {
    dispatch(modalAction.logIn());
  };

  return (<div className="signup d-flex flex-column align-items-center" ref={ref}>
  <p className="signup-title text-uppercase color-nero size-16 text-center">sign up</p>
  <p className="signup-greeting size-25 font-title text-center">Hello there, welcome to TOI!</p>
  <Formik
    initialValues={{ email: '', password: '' }}
    validationSchema={SignUpSchema}
    onSubmit={(values, { setSubmitting }) => {
      console.log(values);
      setSubmitting(true);
    }}
  >
    {({ isSubmitting }) => (
      <Form className="signup-form text-center w-100">
        

        <label className="signup-label text-uppercase size-16 color-nero text-left w-100" htmlFor="signup-email">email</label>
        <Field type="email" name="email" id="signup-email" className="signup-input size-16 w-100" placeholder="Email" />
        <ErrorMessage className="signup-error color-contessa text-left mt-2" name="email" component="div" />

        <label className="signup-label text-uppercase size-16 color-nero text-left w-100" htmlFor="signup-password">password</label>
        <Field type="password" name="password" id="signup-password" className="signup-input size-16 w-100" placeholder="Password" />
        <ErrorMessage className="signup-error color-contessa text-left mt-2" name="password" component="div" />

       

        <button type="submit" disabled={isSubmitting}  className="signup-btn text-white text-uppercase">
          sign up
        </button>
      </Form>
    )}
  </Formik>
  <p className="signup-login color-dark-gray-1 text-uppercase">had an account, <button className="signup-login-btn color-nero text-uppercase" onClick={handleShowLogIn}>log in here</button></p>
</div>);
  
};

export default React.forwardRef(SignupModal);