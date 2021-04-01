import { createAction } from 'redux-actions';
import CART_CONST from '../constants/cart.constant';
import COMMON_CONST from '../constants/common.constant';

const addToCartAction = {
    init: createAction(COMMON_CONST.INIT, (initData) => ({ initData })),
    addToCart: createAction(CART_CONST.ADD_TO_CART, (bagId, quantity) => ({ bagId, quantity })),
    removeCartItem: createAction(CART_CONST.REMOVE_CART_ITEM, (bagId) => ({ bagId })),
};

export default addToCartAction;
