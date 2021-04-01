import React, { useRef, useState } from 'react';
import _ from 'lodash';
import './BagDetails.scss';
import { listBagIconic } from '../mock-data';
import ReviewImg from './ReviewImg/ReviewImg';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useDispatch } from 'react-redux';
import reviewImgDialogAction from '../../../actions/review-img-dialog.action';
import { Button, Collapse, Drawer, InputNumber, notification } from 'antd';

import minusIcon from '../../../assets/img/icon/minus.png';
import plusIcon from '../../../assets/img/icon/plus.png';
import cartIcon from '../../../assets/img/icon/cart_white.svg';
import customizeIcon from '../../../assets/img/icon/customize.svg';
import collapseIcon from '../../../assets/img/icon/collapse.svg';
import prevIcon from '../../../assets/img/icon/prev.svg';
import nextIcon from '../../../assets/img/icon/next.svg';
import closeIcon from '../../../assets/img/icon/close_icon.svg';
import toastCloseIcon from '../../../assets/img/icon/toast-close.svg';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Reviews from './Revews/Reviews';
import { NavLink } from 'react-router-dom';
import addToCartAction from '../../../actions/add-to-cart.action';

const BagDetails = (props) => {
    const [selectedId, setSelectedId] = useState(0);
    const [quality, setQuality] = useState(1);
    const bagId = _.get(props, 'match.params.bagName');
    const [visible, setVisible] = useState(false);
    const bag = listBagIconic.find((bag) => bag.id === bagId);
    const dispatch = useDispatch();
    const owl = useRef();

    const openReviewImg = (img = null) => {
        dispatch(reviewImgDialogAction.openDialog());
        dispatch(reviewImgDialogAction.setDataImg(img));
    };

    const showReviews = () => {
        setVisible(true);
    };

    const closeReviews = () => {
        setVisible(false);
    };

    const pushNotifyAddToCart = () => {
        notification.open({
            description: 'Successfully added to cart. View cart and check out.',
            className: 'alert-add-to-cart-success text-white size-14',
            style: {
                width: 600,
            },
            duration: 3,
            top: 120,
            closeIcon: <img src={toastCloseIcon} alt="" />,
        });
        dispatch(addToCartAction.addToCart(bagId, quality));
        setSelectedId(0);
        setQuality(1);
    };

    return (
        <div className="page-container bag-details">
            <div className="container-fluid">
                <div className="mt-50px mb-50px">
                    <div className="text-uppercase size-14 color-nero d-flex">
                        <span className="mr-2">HOME</span>-<span className="mr-2 ml-2">BAGS</span>-
                        <span className="mr-2 ml-2">ANCOTEMEE DELA</span>-
                        <span className="color-dim-gray ml-2">CONVERTIBLE MINI MERINAL</span>
                    </div>
                </div>
                <div className="d-flex row">
                    <PerfectScrollbar className="col-md-6 col-lg-5 review-img">
                        {_.map(_.get(bag, 'img_reviews'), (img, index) => (
                            <div key={index} className="text-center review-img-item" onClick={() => openReviewImg(img)}>
                                <img src={img} alt="" />
                            </div>
                        ))}
                    </PerfectScrollbar>
                    <div className="col-12 col-md-6 col-7 d-flex flex-column align-items-center align-items-md-end">
                        <div className="right-col">
                            <div className="mt-50px mt-md-0">
                                <h3 className="size-31 font-title font-weight-bold text-center">{bag.title}</h3>
                                <div className="text-center mt-30px">
                                    <span className="size-18 font-weight-semi">{bag.cost}</span>
                                    <del className="size-14 ml-3 color-dim-gray">{bag.originalCost}</del>
                                </div>
                                <p className="size-16 color-dim-gray text-center mt-30px">{bag.des}</p>
                                <div className="d-flex flex-column align-items-center mt-40px choose-style">
                                    <div>
                                        <div className="d-flex align-items-center">
                                            <div className="size-16 text-uppercase color-dim-gray label">color</div>
                                            <div className="color-list d-flex">
                                                {_.map(bag.colors, (color, index) => (
                                                    <div
                                                        key={index}
                                                        className={`color-item-wrapper d-flex justify-content-center align-items-center ${
                                                            index === selectedId && 'active'
                                                        }`}
                                                        onClick={() => setSelectedId(index)}
                                                    >
                                                        <div
                                                            className="color-item"
                                                            style={{ backgroundColor: `${color}` }}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center mt-60px">
                                            <div className="size-16 text-uppercase color-dim-gray label">quantity</div>
                                            <div className="color-list d-flex">
                                                <Button
                                                    icon={<img src={minusIcon} alt="" />}
                                                    className={`btn-control d-flex align-items-center justify-content-center mr-2 ${
                                                        quality <= 1 && 'disabled-half'
                                                    }`}
                                                    onClick={() => quality > 1 && setQuality(quality - 1)}
                                                />
                                                <InputNumber
                                                    className="input-quantity size-16 text-center"
                                                    min={1}
                                                    value={quality}
                                                    va
                                                />
                                                <Button
                                                    icon={<img src={plusIcon} alt="" />}
                                                    className="btn-control d-flex align-items-center justify-content-center ml-2"
                                                    onClick={() => setQuality(quality + 1)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-wrap mt-60px justify-content-center w-100">
                                        <NavLink to={`/design-your-own/${bagId}/details`}>
                                            <Button
                                                icon={<img src={customizeIcon} alt="" />}
                                                className="d-flex align-items-center justify-content-center btn-open-more default mt-3 ml-2 mr-2"
                                            >
                                                <span className="color-yuma size-14 ml-10px">CUSTOMIZE THIS</span>
                                            </Button>
                                        </NavLink>
                                        <Button
                                            icon={<img src={cartIcon} alt="" />}
                                            className="d-flex align-items-center justify-content-center mt-3 ml-2 mr-2 btn-open-more"
                                            onClick={pushNotifyAddToCart}
                                        >
                                            <span className="text-white size-14 ml-10px">ADD TO CART</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="details mt-80px">
                                <Collapse ghost>
                                    <Collapse.Panel
                                        header={
                                            <div className="d-flex">
                                                <div className="size-18 font-weight-bold">PRODUCT DETAILS</div>
                                                <img src={collapseIcon} alt="" className="collapse-icon ml-3" />
                                            </div>
                                        }
                                        key="1"
                                        showArrow={false}
                                    >
                                        <p className="size-16 color-dim-gray mb-20px mt-3">{bag.details.des}</p>
                                        <div>
                                            <h4 className="size-16 font-weight-bold">Measurements</h4>
                                            <p className="size-16 color-dim-gray">{bag.details.measurements}</p>
                                        </div>
                                        <div>
                                            <h4 className="size-16 font-weight-bold">Composition</h4>
                                            <p className="size-16 color-dim-gray">{bag.details.composition}</p>
                                        </div>
                                        <div>
                                            <h4 className="size-16 font-weight-bold">Washing Instructions</h4>
                                            <p className="size-16 color-dim-gray">{bag.details.washing_instructions}</p>
                                        </div>
                                        <div>
                                            <h4 className="size-16 font-weight-bold">Made In</h4>
                                            <p className="size-16 color-dim-gray">{bag.details.made_in}</p>
                                        </div>
                                    </Collapse.Panel>
                                </Collapse>
                                <div className="d-flex mt-60px">
                                    <div className="size-18 font-weight-bold cursor-pointer" onClick={showReviews}>
                                        REVIEWS ({bag?.reviews?.length})
                                    </div>
                                    <img src={collapseIcon} alt="" className="collapse-icon ml-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <ReviewImg />
                </div>
            </div>
            <div className="banner-session d-flex align-items-center mt-120px">
                <div className="container-fluid row">
                    <div className="col-6" />
                    <div className="col-12 col-md-6 h-100">
                        <h3 className="size-48 font-weight-bold font-title">Fall Winter 2021 Collection</h3>
                        <Button className="banner-btn">
                            <div className="size-14 d-flex justify-content-center align-items-center h-100 text-uppercase">
                                discover more
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <h4 className="size-16 color-dim-gray text-center text-uppercase mt-120px">RELATED PRODUCTS</h4>
                <h3 className="size-48 font-title font-weight-bold text-center mt-30px">
                    There’s more that is waiting for you
                </h3>
                <div className="mt-80px position-relative">
                    <OwlCarousel
                        ref={owl}
                        className="owl-theme bag-slide"
                        loop
                        margin={10}
                        dots={false}
                        responsive={{
                            0: {
                                items: 1,
                            },
                            768: {
                                items: 2,
                            },
                            1024: {
                                items: 3,
                            },
                            1280: {
                                items: 4,
                            },
                        }}
                    >
                        {listBagIconic.map((item, index) => (
                            <div className="item" key={index}>
                                <div className="bag-slide-item d-flex justify-content-center align-items-end">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="content">
                                    <h3 className="size-18 font-title mt-3 font-weight-normal">{bag.title}</h3>
                                    <p className="size-14 color-dim-gray">{bag.cost}</p>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                    <div className="btn-prev-wrapper d-flex align-items-center position-absolute">
                        <img src={prevIcon} onClick={() => owl.current.prev()} className="cursor-pointer" />
                    </div>
                    <div className="btn-next-wrapper d-flex align-items-center position-absolute">
                        <img src={nextIcon} onClick={() => owl.current.next()} className="cursor-pointer" />
                    </div>
                </div>
            </div>
            <Drawer
                placement="left"
                closable={true}
                visible={visible}
                onClose={closeReviews}
                closeIcon={<img src={closeIcon} alt="" />}
                className="side-bar"
                width="50%"
            >
                <Reviews listReViews={bag?.reviews} />
            </Drawer>
        </div>
    );
};

export default BagDetails;
