import { handleActions } from 'redux-actions';
import model3dAction from '../actions/model-3d.action';

const initialState = {
    model: {},
    listPartName: [],
};

const model3dReducer = handleActions(
    {
        [model3dAction.pickTexture]: (state, { payload }) => ({
            ...state,
            model: { ...state.model, [payload.partName]: payload.img },
        }),
        [model3dAction.setListPartName]: (state, { payload }) => ({
            ...state,
            listPartName: payload.listPartName,
        }),
    },
    initialState
);

export default model3dReducer;
