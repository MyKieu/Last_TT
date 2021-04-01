import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import banner from '../../assets/img/our-story/our-story_banner.png';
import img17 from '../../assets/img/our-story/image_17.png';
import img89 from '../../assets/img/our-story/Rectangle_89.png';
import img93 from '../../assets/img/our-story/Rectangle_93.png';

import './OurStory.scss';

const OurStory = () => {
  useEffect(() => {
    AOS.init({ disable: 'mobile' });
  }, []);

  return <div className="ourstory">
    <div className="pt-120px mb-110px">
      <img className="w-100" src={banner} alt="Our Story"/>
    </div>
    <div className="container-fluid" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000">
      <p className="text-uppercase color-dim-gray size-16 text-center">our story</p>
      <p className="ourstory-subtitle font-title color-nero size-48 text-center mb-60px">About TOI Atelier</p>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-xl-6" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000">
          <div className="os-img-container position-relative">
            <img className="position-absolute os-img" src={img17} alt=""/>
            <img className="position-absolute os-img" src={img89} alt=""/>
          </div>
        </div>
        <div className="col-12 col-xl-5 offset-xl-1 align-self-xl-center" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000">
          <div className="os-content">
            <p className="os-title font-title size-38 color-nero">Our Philosophy</p>
            <div className="os-desc">
              <p className="size-16 color-dim-gray mb-30px">Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <p className="size-16 color-dim-gray">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid white-smoke-bg mt-140px">
      <div className="row">
        <div className="order-last order-xl-first col-12 col-xl-5 offset-xl-1 align-self-xl-center" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000">
          <div className="os-content">
            <p className="os-title font-title size-38 color-nero text-capitalize">what we do</p>
            <div className="os-desc">
              <p className="size-16 color-dim-gray mb-30px">Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <p className="os-desc-tab size-16 color-dim-gray">Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into </p>
            </div>
          </div>
        </div>
        <div className="order-first order-xl-last col-12 col-xl-5" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000">
          <div className="position-relative d-flex justify-content-center">
            <img className="w-100" src={img93} alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default OurStory;
