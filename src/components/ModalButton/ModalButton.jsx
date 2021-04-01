import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import { Modal } from 'antd';

import LoginModal from '../LoginModal/LoginModal';
import ForgotPasswordModal from '../ForgotPasswordModal/ForgotPasswordModal';
import ForgotPasswordModal2 from '../ForgotPasswordModal2/ForgotPasswordModal2';
import SignupModal from '../SignupModal/SignupModal';
import MODAL_CONST from '../../constants/modal.constant';

import profileIcon from '../../assets/img/icon/Profile.svg';
import closeIcon from '../../assets/img/icon/Close.svg';

import './ModalButton.scss';

const ModalButton = ({className, initialModalAction}) => {
  const modalRef = useRef(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {currentModal} = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialModalAction);
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    dispatch(initialModalAction);
  };

  const handleCurrentModal = () => {
    switch (currentModal) {
      case MODAL_CONST.LOG_IN:
        return <LoginModal ref={modalRef} />;
      case MODAL_CONST.FORGOT_PASSWORD:
        return <ForgotPasswordModal ref={modalRef} />;
      case MODAL_CONST.FORGOT_PASSWORD_2:
        return <ForgotPasswordModal2 ref={modalRef} />;
      case MODAL_CONST.SIGN_UP:
        return <SignupModal ref={modalRef} />;
      default:
        return null;
    }
  };
  
  return (
    <>
      <div className={`modal-btn ${className}`} onClick={showModal}>
          <img src={profileIcon} />
          <div className="ml-1 size-12">Log In</div>
      </div>
      <Modal
        className="auth-modal"
        visible={isModalVisible} 
        onCancel={handleCancel} 
        footer={null} 
        closeIcon={<img alt="close" src={closeIcon} />} 
        centered={true} 
        zIndex={9999}
        bodyStyle={{
          'padding': '0px'
        }}
      >
        {handleCurrentModal()}
      </Modal>
    </>
  );
};

ModalButton.propTypes = {
  className: PropTypes.string,
  initialModalAction: PropTypes.object,
};

export default ModalButton;
