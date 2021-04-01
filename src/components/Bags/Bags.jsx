import React from 'react';
import bannerImg1 from '../../assets/img/bag-page/4404426_1.png';
import bannerImg2 from '../../assets/img/bag-page/image_18.png';
import './Bags.scss';
import ListBag from './ListBag/ListBag';
import { listBagIconic } from './mock-data';
import { Button } from 'antd';

const Bags = () => {
    return (
        <div className="page-container">
            <div>
                <img src={bannerImg1} className="w-100" />
            </div>
            <div className="container-fluid">
                <h4 className="size-16 color-dim-gray text-center text-uppercase mt-120px">ANCOTEMEE DELA</h4>
                <h3 className="size-48 font-title font-weight-bold text-center mt-30px">Artisan Hands, Your Iconic</h3>
                <div className="mt-120px">
                    <ListBag listBag={listBagIconic} highlightIndex={6} path="bags" />
                    <div className="text-center">
                        <Button type="primary" size="large" className="btn-open-more">
                            <div className="size-14 text-white text-uppercase text">more</div>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-80px">
                <div>
                    <img src={bannerImg2} className="w-100" />
                </div>
                <h4 className="size-16 color-dim-gray text-center text-uppercase mt-120px">MILANO AT LENTICO</h4>
                <h3 className="size-48 font-title font-weight-bold text-center mt-30px">
                    Lorem Ipsum is not random text
                </h3>
                <div className="mt-120px">
                    <ListBag listBag={listBagIconic} highlightIndex={4} path="bags" />
                    
                </div>
            </div>
        </div>
    );
};

export default Bags;
