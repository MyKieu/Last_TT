import React from 'react';
import {useDispatch} from 'react-redux';

import modalAction from '../../actions/modal.action';

import inboxImg from '../../assets/img/icon/Inbox.svg';
import './ForgotPasswordModal2.scss';


const ForgotPasswordModal2 = (props, ref) => {
  const dispatch = useDispatch();
  
  const handleShowLogIn = () => {
    dispatch(modalAction.logIn());
  };

  return (
    <div className="fp2 d-flex flex-column align-items-center" ref={ref}>
      <p className="fp2-title text-uppercase mb-16px color-nero size-16 text-center">check your inbox</p>
      <p className="fp2-subtitle color-dim-gray mb-50px size-14 text-center">Please check your email for the instructions on how to reset your password.</p>
      <img src={inboxImg} alt="Check your email" className="fp2-img" />
      <p className="size-16 text-uppercase color-dark-gray-1">back to <span role="button" className="color-nero" onClick={handleShowLogIn}>LOG IN</span></p>
    </div>
  );
};

export default React.forwardRef(ForgotPasswordModal2);