import React from 'react';
import './Reviews.scss';
import PerfectScrollbar from 'react-perfect-scrollbar';

import rate from '../../../../assets/img/icon/rate.svg';
import rateActive from '../../../../assets/img/icon/rate_active.svg';

const Reviews = ({ listReViews }) => {
    console.log(listReViews);
    return (
        <PerfectScrollbar>
            <div className="reviews-wrapper">
                <div className="size-31 font-weight-bold font-title cursor-pointer">
                    Reviews ({listReViews?.length || 0})
                </div>
                <div className="reviews-list">
                    {listReViews.map((item, index) => (
                        <div key={index} className="review-item mt-40px">
                            <div className="w-100 d-flex">
                                <div>
                                    <div className="img d-flex justify-content-center align-items-center size-18 text-white]">
                                        {item.name.split(' ').reduce((name, str) => name + str[0], '')}
                                    </div>
                                </div>
                                <div className="ml-3">
                                    <div className="d-flex align-items-center">
                                        <h3 className="size-16 color-nero font-weight-semi mb-0">{item.name}</h3>
                                        <div className="d-flex ml-4">
                                            {[...Array(5).keys()].map((i, index) => (
                                                <div key={index}>
                                                    {index < item.evaluate ? (
                                                        <img src={rateActive} alt="" />
                                                    ) : (
                                                        <img src={rate} alt="" />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <span className="size-12 color-dim-gray">{item.date}</span>
                                    <p className="size-14 mt-10px color-dim-gray">{item.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PerfectScrollbar>
    );
};

export default Reviews;
