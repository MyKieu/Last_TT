import reviewImgDialogAction from '../actions/review-img-dialog.action';
import { handleActions } from 'redux-actions';

const initialState = {
    isOpen: false,
};

const reviewImgDialogReducer = handleActions(
    {
        [reviewImgDialogAction.openDialog]: (state) => ({ ...state, isOpen: true }),
        [reviewImgDialogAction.closeDialog]: (state) => ({ ...state, isOpen: false }),

        [reviewImgDialogAction.setDataImg]: (state, { payload }) => ({ ...state, img: payload.img })
    },
    initialState
);

export default reviewImgDialogReducer;
