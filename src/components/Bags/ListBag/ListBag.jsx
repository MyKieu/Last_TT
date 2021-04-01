import React from 'react';
import './ListBag.scss';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';

import customizeIcon from '../../../assets/img/icon/customize_black.svg';

const ListBag = ({ listBag = [], highlightIndex = null, col = 4, path, hover = null }) => {
    const customThisOnHover = (link) => (
        <div className="position-absolute hover w-100 h-100 d-flex justify-content-center align-items-center">
            <NavLink to={link}>
                <Button className="banner-btn d-flex align-items-center">
                    <div className="d-flex">
                        <img src={customizeIcon} alt="" />
                        <div className="size-14 d-flex justify-content-center align-items-center h-100 text-uppercase ml-10px">
                            customize this
                        </div>
                    </div>
                </Button>
            </NavLink>
        </div>
    );

    const renderItem = (bag, index) => (
        <div className={`content-wrapper ${highlightIndex === index && 'position-relative'}`}>
            <div
                className={`img-wrapper d-flex justify-content-center align-items-end ${
                    highlightIndex !== index && 'position-relative'
                }`}
            >
                <img src={bag.img} />
                {hover === 'custom' && customThisOnHover(`/${path}/${bag.id}/details`)}
            </div>
            <div className="content">
                <h3
                    className={`size-18 font-title mt-3 font-weight-normal ${highlightIndex === index && 'text-black'}`}
                >
                    {bag.title}
                </h3>
                <p className={`{size-14 color-dim-gray ${highlightIndex === index && 'text-black'}`}>{bag.cost}</p>
            </div>
        </div>
    );

    return (
        <div className="row list-bag">
            {listBag.map((bag, index) => (
                <div
                    key={index}
                    className={`bag-item col-12 ${
                        highlightIndex !== index
                            ? `col-lg-${12 / col} col-md-4`
                            : `col-md-3 col-lg-${(8 / col) * 2  }`
                    }`}
                >
                    {!hover ? (
                        <NavLink to={`/${path}/${bag.id}/details`}>{renderItem(bag, index)}</NavLink>
                    ) : (
                        renderItem(bag, index)
                    )}
                </div>
            ))}
        </div>
    );
};

export default ListBag;
