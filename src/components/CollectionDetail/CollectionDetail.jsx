import React from 'react';
import {Tabs, Carousel} from 'antd';

import img14 from '../../assets/img/collection/image_14.png';
import img16 from '../../assets/img/collection/image_16.png';
import img79 from '../../assets/img/collection/Rectangle_79.png';
import img81 from '../../assets/img/collection/Rectangle_81.png';
import img82 from '../../assets/img/collection/Rectangle_82.png';
import img84 from '../../assets/img/collection/Rectangle_84.png';
import img85 from '../../assets/img/collection/Rectangle_85.png';
import img86 from '../../assets/img/collection/Rectangle_86.png';
import img87 from '../../assets/img/collection/Rectangle_87.png';
import img88 from '../../assets/img/collection/Rectangle_88.png';
import img89 from '../../assets/img/collection/Rectangle_89.png';
import './CollectionDetail.scss';

const { TabPane } = Tabs;

const CollectionDetail = () => {
  return <div className="cltd pt-200px">
      <div className="container-fluid">
        <p className="text-uppercase size-14 color-nero mb-50px">home - collection - <span className="color-dark-gray-1">fall winter 2020</span></p>
      </div>    
      <div className="cltd-hero">
        <div className="container-fluid cltd-banner-container">
            <div className="row">
              <div className="col-12 col-xl-6 order-last order-xl-first">
                <div className="cltd-banner-img-container position-relative">
                  <img src={img14} alt="" className="cltd-banner-img position-absolute" />
                  <img src={img16} alt="" className="cltd-banner-img position-absolute" />
                </div>
              </div>
              <div className="col-12 col-xl-6 align-self-xl-center order-first order-xl-last">
                <p className="cltd-title size-16 color-dim-gray text-uppercase align-self-center">color of the year</p>
                <p className="cltd-subtitle font-title size-48 color-nero text-capitalize">fall winter 2020 collection</p>
              </div>
            </div>
        </div>
        <div className="cltd-letter-container container-fluid">
          <div className="cltd-letter">
            <p className="cltd-letter-content color-nero size-18">
              Meet Les Miniatures Cocorico. Three mini Brillant handbags, they perfectly embody la Maison’s love affair with Paris and pay homage to its many iconic emblems. Continuing Delvaux’s much-loved tradition of playful decorative charms, they are made for wearing, carrying and collecting.
            </p>
            <p className="cltd-letter-content color-nero size-18">
              Not only a celebration of the French capital’s legendary beauty, refinement and savoir-vivre, Les Miniatures Cocorico also herald the opening of Delvaux’s fourth boutique in Paris. Situated on the renowned Rue St Honoré, it’s a stone’s throw from the exquisite Jardin des Tuileries and the exclusive Place Vendôme. Warm and welcoming, the boutique is an appealing mix of Parisian style and Belgian whimsy.
            </p>
            <p className="cltd-letter-content color-nero size-18">
              Tiny ambassadors of French joie de vivre, Accordéon, St Honoré and French Cancan beautifully capture the charm and elegance of Parisian life. Masterpieces of fine leather and artisanal savoir-faire, they are hand-crafted using complex molding and printing techniques and make innovative use of moving parts and metal hardware.
            </p>
          </div>
        </div>
      </div>
      <div className="cltd-tabs">
        <Tabs defaultActiveKey="1" centered={true} tabBarGutter={60} tabBarStyle={{ 
          color: '#616161',
          marginBottom: '0px'
        }}>
          <TabPane className="pt-80px" tab="PRINCESS VOVITAA" key="1">
            <div className="container-fluid">
              <div className="cltd-tab-item row">
                <div className="col-12 col-xl-5 order-first">
                  <img className="w-100" src={img79} alt=""/>
                </div>
                <div className="cltd-tab-content col-12 col-xl-6 offset-xl-1 align-self-center position-relative order-last">
                  <p className="cltd-tab-title text-capitalize color-nero font-title size-31">princess vovitaa</p>
                  <p className="cltd-tab-desc size-16 color-dim-gray">Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
              </div>
              <Carousel autoplay={true} className="pb-220px">
                <div className="cltd-slide-item">
                  <div className="d-flex align-items-start justify-content-around">
                    <img src={img81} alt="" />
                    <img src={img89} alt="" />
                  </div>
                </div>
                <div className="cltd-slide-item">
                  <div className="d-flex align-items-start justify-content-around">
                    <img src={img81} alt="" />
                    <img src={img89} alt="" />
                  </div>
                </div>
                <div className="cltd-slide-item">
                  <div className="d-flex align-items-start justify-content-around">
                    <img src={img81} alt="" />
                    <img src={img89} alt="" />
                  </div>
                </div>
              </Carousel>
            </div>
          </TabPane>
          <TabPane className="pt-80px" tab="MY BEAUTYFUL" key="2" style={{ backgroundColor: '#fafafa' }}>
          <div className="container-fluid">
              <div className="cltd-tab-item row">
                <div className="col-12 col-xl-6 order-first">
                  <img className="w-100" src={img82} alt=""/>
                </div>
                <div className="cltd-tab-content col-12 col-xl-5 offset-xl-1 align-self-center position-relative order-last">
                  <p className="cltd-tab-title text-capitalize color-nero font-title size-31">my beautiful</p>
                  <p className="cltd-tab-desc size-16 color-dim-gray">Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
              </div>
              <Carousel autoplay={true} className="pb-220px">
                <div className="cltd-slide-item">
                  <div className="d-flex align-items-start justify-content-around">
                    <img src={img84} alt=""/>
                    <img src={img85} alt=""/>
                  </div>
                </div>
                <div className="cltd-slide-item">
                  <div className="d-flex align-items-start justify-content-around">
                    <img src={img84} alt=""/>
                    <img src={img85} alt=""/>
                  </div>
                </div>
                <div className="cltd-slide-item">
                  <div className="d-flex align-items-start justify-content-around">
                    <img src={img84} alt=""/>
                    <img src={img85} alt=""/>
                  </div>
                </div>
              </Carousel>
            </div>
          </TabPane>
          <TabPane className="pt-80px" tab="ITALIAN GIRLS" key="3">
            <div className="container-fluid">
              <div className="cltd-tab-item row">
                <div className="col-12 col-xl-5 order-first order-xl-last">
                  <img className="w-100" src={img86} alt=""/>
                </div>
                <div className="cltd-tab-content col-12 col-xl-6 offset-xl-1 align-self-center position-relative order-last order-xl-first">
                  <p className="cltd-tab-title text-capitalize color-nero font-title size-31">italian girls</p>
                  <p className="cltd-tab-desc size-16 color-dim-gray">Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
              </div>
              <Carousel autoplay={true} className="pb-220px">
                <div className="cltd-slide-item">
                  <div className="d-flex align-items-start justify-content-around">
                    <img src={img87} alt=""/>
                    <img src={img88} alt=""/>
                  </div>
                </div>
                <div className="cltd-slide-item">
                  <div className="d-flex align-items-start justify-content-around">
                    <img src={img87} alt=""/>
                    <img src={img88} alt=""/>
                  </div>
                </div>
                <div className="cltd-slide-item">
                  <div className="d-flex align-items-start justify-content-around">
                    <img src={img87} alt=""/>
                    <img src={img88} alt=""/>
                  </div>
                </div>
              </Carousel>
            </div>
          </TabPane>
        </Tabs>
      </div>
  </div>;
};

export default CollectionDetail;