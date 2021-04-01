import React, { useState, useEffect } from 'react';
import './Cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { listBagIconic } from '../Bags/mock-data';
import { Button, InputNumber } from 'antd';

import minusIcon from '../../assets/img/icon/minus.png';
import plusIcon from '../../assets/img/icon/plus.png';
import bgItem from '../../assets/img/cart/bg_item_cart.png';
import customizeIcon from '../../assets/img/icon/customize_black.svg';
import addToCartAction from '../../actions/add-to-cart.action';
import { NavLink } from 'react-router-dom';

const findBagById = (id) => listBagIconic.find((i) => i.id === id);

const CartItem = ({ item }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const bagItem = findBagById(item.bagId);

    useEffect(() => {
        setQuantity(item.quantity);
    }, [item]);

    useEffect(() => {
        dispatch(addToCartAction.addToCart(item.bagId, quantity - item.quantity));
    }, [quantity]);

    const inc = () => {
        setQuantity(quantity + 1);
    };

    const dec = () => {
        setQuantity(quantity - 1);
    };

    const removeCartItem = (bagId) => dispatch(addToCartAction.removeCartItem(bagId));

    return (
        <div className="row pt-30px pb-30px cart-item">
            <div className="col-12 col-sm-4">
                <div className="position-relative">
                    <img src={bgItem} className="w-100" alt="" />
                    <div className="position-absolute w-100 h-100 cart-item-img d-flex justify-content-center align-items-center">
                        <img src={bagItem?.img} alt="" />
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-8">
                <h3 className="font-title size-18 font-weight-bold mt-20px">{bagItem?.title}</h3>
                <div className="mt-20px d-flex align-items-center">
                    <span className="font-title size-18 font-weight-bold">{bagItem?.cost}</span>
                    <div className="d-flex ml-4">
                        <Button
                            icon={<img src={minusIcon} alt="" />}
                            className={`btn-control d-flex align-items-center justify-content-center mr-2 ${
                                quantity <= 1 && 'disabled-half'
                            }`}
                            onClick={() => quantity > 1 && dec()}
                        />
                        <InputNumber className="input-quantity size-16 text-center" min={1} value={quantity} />
                        <Button
                            icon={<img src={plusIcon} alt="" />}
                            className="btn-control d-flex align-items-center justify-content-center ml-2"
                            onClick={inc}
                        />
                    </div>
                </div>
                <div className="mt-80px btn-wrapper d-flex">
                    <div className="size-14 btn-delete cursor-pointer" onClick={() => removeCartItem(item.bagId)}>
                        DELETE
                    </div>
                    <NavLink to={`/design-your-own/${item.bagId}/customize`} className="ml-20px">
                        <div className="btn-customize d-flex align-items-center cursor-pointer">
                            <img src={customizeIcon} alt="" />
                            <span className="size-14 ml-2 color-nero">BACK TO CUSTOMIZE</span>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

const Cart = () => {
    const [total, setTotal] = useState(0);
    const listCart = useSelector((state) => state.cart.listProduct);
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    });

    useEffect(() => {
        setTotal(
            listCart.reduce((result, item) => {
                return result + Number(findBagById(item.bagId)['cost'].replace(/[^0-9.-]+/g, '')) * item.quantity;
            }, 0)
        );
    }, [listCart]);
    

    return (
        <div className="page-container cart">
            <div className="container-fluid pt-80px">
                <div className="size-16 color-dim-gray text-center mb-30px">YOUR CART</div>
                <div className="contact-title size-48 color-nero text-center font-title font-weight-bold mb-80px">
                    View your items and check out
                </div>
                <div className="row mt-80px">
                    <div className="col-12 col-lg-8">
                        {listCart.map((item, index) => (
                            <div key={index} className="cart-item-wrapper">
                                <CartItem item={item} />
                            </div>
                        ))}
                    </div>
                    <div className="col-12 col-lg-4 mt-30px">
                        <div className="resume-cart">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="size-16 text-uppercase color-nero">total</div>
                                <div className="size-24 color-nero">{formatter.format(total)}</div>
                            </div>
                            <div className="size-14 color-nero mt-10px">{listCart.length} items</div>
                            <NavLink to="/checkout">
                                <Button className="banner-btn w-100 mt-80px btn-checkout d-flex align-items-center text-white">
                                    <div className="size-14 d-flex justify-content-center align-items-center w-100 h-100 text-white text-uppercase">
                                        PROCEED TO CHECKOUT
                                    </div>
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
