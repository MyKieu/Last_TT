import COMMON_CONST from '../constants/common.constant';
import { createAction } from 'redux-actions';

const scrollAction = {
    setIsTop: createAction(COMMON_CONST.SCROLL, (isTop) => ({ isTop })),
};

export default scrollAction;
