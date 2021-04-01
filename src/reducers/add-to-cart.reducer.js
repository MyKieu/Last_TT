import { handleActions } from 'redux-actions';
import addToCartAction from '../actions/add-to-cart.action';

const initialState = {
    listProduct: [],
};

const addToCartReducer = handleActions(
    {
        [addToCartAction.init]: (state, { payload }) => ({ ...state, listProduct: payload['initData'] }),
        [addToCartAction.addToCart]: (state, { payload }) => {
            const list = [...state['listProduct']];
            const item = list.find((i) => i.bagId === payload.bagId);

            if (item) {
                item.quantity += payload.quantity;
            } else {
                list.push(payload);
            }

            return {
                ...state,
                listProduct: [...list],
            };
        },
        [addToCartAction.removeCartItem]: (state, { payload }) => ({
            ...state,
            listProduct: [...state['listProduct'].filter((i) => i.bagId !== payload.bagId)],
        }),
    },
    initialState
);

export default addToCartReducer;
