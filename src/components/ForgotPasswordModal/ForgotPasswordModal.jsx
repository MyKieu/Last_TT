import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';

import modalAction from '../../actions/modal.action';

import './ForgotPasswordModal.scss';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const ForgotPasswordModal = (props, ref) => {
  const {cacheEmail} = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  
  const handleShowLogIn = () => {
    dispatch(modalAction.logIn());
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    dispatch(modalAction.forgotPassword2());
  };

  return (
    <div className="fp d-flex flex-column align-items-center" ref={ref}>
      <p className="fp-title text-uppercase mb-16px color-nero size-16 text-center">forgot password</p>
      <p className="fp-subtitle color-dim-gray mb-50px size-14 text-center">Input your email, we will send you an instruction to reset your password.</p>
      <Formik
        initialValues={{ email: cacheEmail }}
        validationSchema={ForgotPasswordSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="fp-form text-center w-100">
            <label className="fp-label size-16 color-nero text-left w-100" htmlFor="login-email">EMAIL</label>
            <Field type="email" name="email" id="login-email" className="fp-input size-16 w-100" placeholder="Email" />
            <ErrorMessage className="fp-error color-contessa text-left mt-2" name="email" component="div" />
            <button type="submit" disabled={isSubmitting} className="fp-btn text-uppercase text-white">
              submit
            </button>
          </Form>
        )}
      </Formik>
      <p className="size-16 text-uppercase color-dark-gray-1">back to <span role="button" className="color-nero" onClick={handleShowLogIn}>LOG IN</span></p>
    </div>
  );
};

export default React.forwardRef(ForgotPasswordModal);