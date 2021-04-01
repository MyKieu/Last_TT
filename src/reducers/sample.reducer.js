import { handleActions } from 'redux-actions';
import sampleAction from '../actions/sample.action';

const initialState = {};

const sampleReducer = handleActions(
    {
        [sampleAction.init]: (state, { payload }) => ({ ...state, ...payload }),
    },
    initialState
);

export default sampleReducer;
