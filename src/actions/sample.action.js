import COMMON_CONST from '../constants/common.constant';
import { createAction } from 'redux-actions';

const sampleAction = {
    init: createAction(COMMON_CONST.INIT),
};

export default sampleAction;
