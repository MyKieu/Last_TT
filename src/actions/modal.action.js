import MODAL_CONST from '../constants/modal.constant';
import { createAction } from 'redux-actions';

const modalAction = {
    logIn: createAction(MODAL_CONST.LOG_IN),
    forgotPassword: createAction(MODAL_CONST.FORGOT_PASSWORD),
    forgotPassword2: createAction(MODAL_CONST.FORGOT_PASSWORD_2),
    signUp: createAction(MODAL_CONST.SIGN_UP),
    saveEmail: createAction(MODAL_CONST.SAVE_EMAIL),
};

export default modalAction;
