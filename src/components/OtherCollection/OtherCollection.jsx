import React, {useRef} from 'react';
import OwlCarousel from 'react-owl-carousel';

import lastSeasonCollections from './mock-data';

import prevIcon from '../../assets/img/icon/prev.svg';
import nextIcon from '../../assets/img/icon/next.svg';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './OtherCollection.scss';

const OtherCollection = () => {
  const slideRef = useRef(null);

  return <div className="oclt">
    <div className="container-fluid">
      <p className="oclt-title text-uppercase color-dim-gray size-16 text-center">other collections</p>
      <p className="oclt-subtitle font-title color-nero size-48 text-center">Last season collections</p>
      <div className="position-relative">
        <OwlCarousel
            className="owl-theme octl-slide"
            loop
            margin={30}
            dots={false}
            ref={slideRef}
            responsive={{
              0: {
                  items: 1,
              },
              992: {
                  items: 2,
              },
              1200: {
                  items: 3,
              }
          }}
        >
            {lastSeasonCollections.map((item) => (<div className="octl-slide-item" key={item.id}>
              <div className="octl-slide-item-bg d-flex align-items-end justify-content-center" role="button">
                <img className="octl-slide-item-img" src={item.img} alt={item.title}/>
              </div>
              <p className="font-title size-25 color-nero mb-0 mt-30px" role="button">{item.title}</p>
            </div>))}
        </OwlCarousel>
        <div className="octl-nav octl-nav--prev position-absolute">
          <img src={prevIcon} alt="prev" role="button" onClick={() => {slideRef.current.prev();}} />
        </div>
        <div className="octl-nav octl-nav--next position-absolute">
          <img src={nextIcon} alt="next" role="button" onClick={() => {slideRef.current.next();}} />
        </div>
      </div>
    </div>
  </div>;
};

export default OtherCollection;