import React from 'react';
import {NavLink} from 'react-router-dom';
import './Collection.scss';

import OtherCollection from '../OtherCollection/OtherCollection';

import collectionOne from '../../assets/img/home/Rectangle_20.png';
import collectionTwo from '../../assets/img/collection/Rectangle_71.png';
import collectionThree from '../../assets/img/collection/Rectangle_72.png';

const Collection = () => {
  return <div className="collection pt-200px">
    <div className="container-fluid">
      <div className="row pb-80px">
        <div className="col-12 col-lg-6">
          <img src={collectionOne} className="w-100" alt=""/>
        </div>
        <div className="col-12 col-lg-6 col-xl-5 align-self-center offset-xl-1">
          <div className="collection-content collection-content--one position-relative">
            <p className="collection-title font-title size-48 color-nero mb-10px">Fall Winter 2021 Collection</p>
            <p className="collection-subtitle size-14 color-dim-gray mb-30px">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
            <NavLink to={`/collections/${1}/details`} className="collection-btn text-white text-uppercase text-center">discover more</NavLink>
          </div>
        </div>
      </div>
      <div className="row pb-80px">
        <div className="col-12 col-lg-6 col-xl-7 order-first order-lg-last">
          <img src={collectionTwo} className="w-100" alt=""/>
        </div>
        <div className="col-12 col-lg-6 col-xl-4 order-last order-lg-first offset-xl-1 align-self-center">
          <div className="collection-content collection-content--two position-relative">
            <p className="collection-title font-title size-48 color-nero mb-10px">Fall Winter 2021 Collection</p>
            <p className="collection-subtitle size-14 color-dim-gray mb-30px">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
            <NavLink to={`/collections/${1}/details`} className="collection-btn text-white text-uppercase text-center">discover more</NavLink>
          </div>
        </div>
      </div>
      <div className="row pb-80px">
        <div className="col-12 col-lg-6 offset-xl-1">
          <img src={collectionThree} className="w-100" alt=""/>
        </div>
        <div className="col-12 col-lg-6 col-xl-4 offset-xl-1 align-self-center">
          <div className="collection-content collection-content--three position-relative">
            <p className="collection-title font-title size-48 color-nero mb-10px">Fall Winter 2021 Collection</p>
            <p className="collection-subtitle size-14 color-dim-gray mb-30px">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
            <NavLink to={`/collections/${1}/details`} className="collection-btn text-white text-uppercase text-center">discover more</NavLink>
          </div>
        </div>
      </div>
    </div>
    <OtherCollection />
  </div>;
};

export default Collection;
