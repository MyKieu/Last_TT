import { combineReducers } from 'redux';
import sampleReducer from './sample.reducer';
import scrollReducer from './scroll.reducer';
import reviewImgDialogReducer from './review-img-dialog.reducer';
import modalReducer from './modal.reducer';
import model3dReducer from './model-3d.reducer';
import addToCartReducer from './add-to-cart.reducer';

const rootReducer = combineReducers({
    sample: sampleReducer,
    scroll: scrollReducer,
    dialog: combineReducers({
        reviewImg: reviewImgDialogReducer,
    }),
    model3d: model3dReducer,
    modal: modalReducer,
    cart: addToCartReducer,
});

export default rootReducer;
