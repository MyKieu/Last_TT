import { createAction } from 'redux-actions';
import MODEL_3D_CONST from '../constants/model3d.constant';

const model3dAction = {
    pickTexture: createAction(MODEL_3D_CONST.PICK_TEXTURE, (partName, img) => ({ partName, img })),
    setListPartName: createAction(MODEL_3D_CONST.LIST_PART_NAME, (listPartName) => ({ listPartName })),
};

export default model3dAction;
