import React from 'react';
import _ from 'lodash';
import { listBag } from '../mock-data';
import PerfectScrollbar from 'react-perfect-scrollbar';
import './DesignDetails.scss';
import { Button } from 'antd';
import customizeIcon from '../../../assets/img/icon/customize.svg';
import { NavLink } from 'react-router-dom';

const DesignDetails = (props) => {
    const bagId = _.get(props, 'match.params.bagName');
    const bag = listBag.find((bag) => bag.id === bagId);

    return (
        <div className="page-container design-details">
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
                            <div key={index} className="text-center review-img-item">
                                <img src={img} alt="" />
                            </div>
                        ))}
                    </PerfectScrollbar>
                    <div className="col-12 col-md-6 col-7 d-flex flex-column align-items-center align-items-md-end">
                        <div className="right-col">
                            <div className="mt-md-0 mt-50px">
                                <h3 className="size-31 font-title font-weight-bold text-center">{bag.title}</h3>
                                <p className="size-16 color-dim-gray mb-20px mt-40px">{bag.details.des}</p>
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
                                <div className="d-flex justify-content-center mt-50px">
                                    <NavLink to={`/design-your-own/${bagId}/customize`}>
                                        <Button className="banner-btn btn-continue d-flex align-items-center">
                                            <div className="d-flex">
                                                <img src={customizeIcon} alt="" />
                                                <div className="size-14 d-flex justify-content-center align-items-center h-100 color-yuma text-uppercase ml-10px">
                                                    CONTINUE TO CUSTOMIZE
                                                </div>
                                            </div>
                                        </Button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignDetails;
