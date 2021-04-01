import MODAL_CONST from '../constants/modal.constant';
import modalAction from '../actions/modal.action';
import { handleActions } from 'redux-actions';

const initialState = {
    currentModal: null,
    cacheEmail: '',
};

const modalReducer = handleActions(
    {
        [modalAction.logIn]: (state) => ({ ...state, currentModal: MODAL_CONST.LOG_IN }),
        [modalAction.forgotPassword]: (state) => ({ ...state, currentModal: MODAL_CONST.FORGOT_PASSWORD }),
        [modalAction.forgotPassword2]: (state) => ({ ...state, currentModal: MODAL_CONST.FORGOT_PASSWORD_2 }),
        [modalAction.signUp]: (state) => ({ ...state, currentModal: MODAL_CONST.SIGN_UP }),
        [modalAction.saveEmail]: (state, action) => ({ ...state, cacheEmail: action.payload }),
    },
    initialState
);

export default modalReducer;
