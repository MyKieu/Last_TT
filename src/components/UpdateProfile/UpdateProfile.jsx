import React, {useState} from 'react';
import './UpdateProfile.scss';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import avatar from '../../assets/img/icon/Avatar.svg';
import updateAvatar from '../../assets/img/icon/Update-Avatar.png';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const UpdateProfileSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  email: Yup.string().email('Email is not valid'),
  currentPassword: Yup.string().min(6, 'Password must have at least 6 character'),
  newPassword: Yup.string().min(6, 'Password must have at least 6 character'),
  confirmNewPassword: Yup.string().min(6, 'Password must have at least 6 character'),
});

const nonShowPasswordInitialValues = { 
  name: '', 
  phone: '', 
  email: '',
};
const showPasswordInitialValues = { 
  name: '', 
  phone: '', 
  email: '', 
  currentPassword: '',
  newPassword: '', 
  confirmNewPassword: '' 
};

const UpdateProfile = () => {
  const [showChangePassword, setShowChangePassword] = useState(false);

  const handleShowChangePassword = () => {
    setShowChangePassword(true);
  };

  return <div className="updateprofile">
    <div className="container">
      <div className="updateprofile-container d-flex flex-column align-items-center">
        <p className="updateprofile-title text-uppercase color-dim-gray size-16">profile</p>
        <p className="updateprofile-subtitle font-title text-center font-weight-bold color-nero size-48">Your profile information</p>
        <div className="up-main d-flex flex-column flex-md-row align-items-center align-items-md-start">
          <div className="up-img-container position-relative mr-0 mr-md-5">
            <img src={avatar} alt="avatar" className="up-img w-100"/>
            <img src={updateAvatar} alt="update" className="up-update-btn position-absolute" />
          </div>
          <div className="up-form-container">
            <Formik
              initialValues={!showChangePassword ? nonShowPasswordInitialValues : showPasswordInitialValues}
              validationSchema={UpdateProfileSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setSubmitting(true);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="up-form d-flex flex-column align-items-start">
                  <div className="up-field-container w-100">
                    <label className="up-label w-100 text-uppercase size-16 color-nero" htmlFor="name">name</label>
                    <Field className="up-input w-100 size-16 color-nero" type="text" name="name" placeholder="name" id="name" />
                    <ErrorMessage className="color-contessa mt-2" name="name" component="div" />
                  </div>
                  <div className="up-field-container w-100">
                    <label className="up-label w-100 text-uppercase size-16 color-nero" htmlFor="phone">phone</label>
                    <Field className="up-input w-100 size-16 color-nero" type="text" name="phone" placeholder="phone number" id="phone" />
                    <ErrorMessage className="color-contessa mt-2" name="phone" component="div" />
                  </div>
                  <div className="up-field-container w-100">
                    <label className="up-label w-100 text-uppercase size-16 color-nero" htmlFor="email">email</label>
                    <Field className="up-input w-100 size-16 color-nero" type="email" name="email" placeholder="email" id="email" />
                    <ErrorMessage className="color-contessa mt-2" name="email" component="div" />
                  </div>
                  {!showChangePassword ? 
                    <div className="up-field-container w-100 position-relative mb-0">
                      <label className="up-label w-100 text-uppercase size-16 color-nero" htmlFor="password">password</label>
                      <input className="up-input w-100 size-16 color-nero" type="password" id="password" name="password" value="********" readOnly={true} />
                      <ErrorMessage className="color-contessa mt-2" name="password" component="div" />
                      <div 
                        className="up-change-pw-btn text-capitalize size-14 position-absolute" 
                        onClick={handleShowChangePassword}
                      >change password</div>
                    </div> : 
                    <div className="up-field-container w-100 d-flex flex-column mb-0">
                      <label className="up-label w-100 text-uppercase size-16 color-nero">change password</label>  
                      <Field className="up-input w-100 size-16 color-nero" type="password" name="currentPassword" placeholder="current password" />
                      <ErrorMessage className="color-contessa mt-2" name="currentPassword" component="div" />
                      <Field className="up-input w-100 size-16 color-nero" type="password" name="newPassword" placeholder="new password" />
                      <ErrorMessage className="color-contessa mt-2" name="newPassword" component="div" />
                      <Field className="up-input w-100 size-16 color-nero" type="password" name="confirmNewPassword" placeholder="confirm new password" />
                      <ErrorMessage className="color-contessa mt-2" name="confirmNewPassword" component="div" />
                    </div>}
                  <div className="up-btn-container w-100 text-center color-nero">
                  <button type="submit" disabled={isSubmitting} className="up-btn text-white text-uppercase size-14">
                    update profile
                  </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default UpdateProfile;