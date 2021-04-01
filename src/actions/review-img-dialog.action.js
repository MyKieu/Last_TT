import DIALOG_CONST from '../constants/dialog.constant';
import { createAction } from 'redux-actions';
import COMMON_CONST from '../constants/common.constant';

const reviewImgDialogAction = {
    init: createAction(COMMON_CONST.INIT),

    openDialog: createAction(DIALOG_CONST.OPEN_DIALOG),
    closeDialog: createAction(DIALOG_CONST.CLOSE_DIALOG),

    setDataImg: createAction(DIALOG_CONST.SET_DATA_IMG, (img) => ({ img }))
};

export default reviewImgDialogAction;
