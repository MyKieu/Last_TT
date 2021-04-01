import { handleActions } from 'redux-actions';
import scrollAction from '../actions/scroll.action';

const initialState = {
    isTop: true,
};

const scrollReducer = handleActions(
    {
        [scrollAction.setIsTop]: (state, { payload }) => ({ ...state, isTop: payload.isTop }),
    },
    initialState
);

export default scrollReducer;
