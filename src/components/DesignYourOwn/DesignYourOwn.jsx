import React from 'react';
import './DesignYourOwn.scss';
import { listBag } from './mock-data';
import ListBag from '../Bags/ListBag/ListBag';

const DesignYourOwn = () => {
    return (
        <div className="page-container design-your-own">
            <div className="banner" />
            <div className="mt-120px">
                <div className="container-fluid">
                    <h4 className="size-16 color-dim-gray text-center text-uppercase">DESIGN YOUR OWN</h4>
                    <h3 className="size-48 font-title font-weight-bold text-center mt-30px">
                        Customize any bags as the way you want
                    </h3>
                    <div className="mt-80px">
                        <ListBag listBag={listBag} highlightIndex={4} col={3} path="design-your-own" hover="custom" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignYourOwn;
