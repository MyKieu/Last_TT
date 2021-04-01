import React from 'react';
import './NewsDetail.scss';
import calendarImg from '../../assets/img/icon/Calendar.png';
import heart from '../../assets/img/icon/heart.svg';
import share from '../../assets/img/icon/share.svg';
import intro from '../../assets/img/newsDetail/intro.png';
import newsDetail1 from '../../assets/img/newsDetail/news-detail-1.png';
import newsDetail2 from '../../assets/img/newsDetail/news-detail-2.png';
import { listBagInDaily } from './mock-data';


const NewsDetail = () => {
  return (
    <div className="news-detail pt-170px">
      <div className="container-fluid">
        <div className="news-detail_nav size-14 mb-50px">
          <span className="color-nero">HOME</span> - <span className="color-nero">NEWS</span> - <span className="color-dark-gray-1">FALL 2020 FASHION SHOW</span>
        </div>
      </div>
      <div className="container">
        <div className="news-detail-header w-50 mx-auto mb-50px">
            <div className="news-detail-header_title mb-20px color-black size-31 font-weight-bold font-title">Fall 2020 Fashion Show</div>
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-start">
                <img src={calendarImg} alt="calendar image"/>
                <div className="size-14 color-dark-gray-1 ml-2">OCT 15, 2020</div>
              </div>
              <div>
                <img src={heart} alt="heart icon"/>
                <span className="size-12 color-dim-gray ml-1 mr-26px">123 Likes</span>
                <img src={share} alt="share icon"/>
              </div>
            </div>
          </div>
      </div>
      <div className="news-detail_intro">
        <img src={intro} alt="intro image" className="w-100"/>
      </div>
      <div className="container">
        <div className="f-text color-dim-gray w-50 mx-auto size-16 pt-50px pb-50px">
          <p className="mb-20px">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. 
          </p>
          <p className="mb-0">
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        </div>
        <div className="row mt-20px mb-20px">
          <div className="col-12 mb-5 mb-md-0 col-md-6">
            <img src={newsDetail1} alt="news detail image" className="w-100"/>
          </div>
          <div className="col-12 col-md-6">
            <img src={newsDetail2} alt="news detail image" className="w-100"/>
          </div>
        </div>
        <div className="s-text color-dim-gray w-50 mx-auto size-16 pt-50px pb-40px">
          <div className="s-text_title font-title size-25 mb-16px color-nero">Header here: Hampden-Sydney College in Virginia</div>
          <p className="mb-0">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions have evolved over the years.
          </p>
        </div>
        <div className="s-text color-dim-gray w-50 mx-auto size-16 mb-40px">
          <div className="s-text_title font-title size-25 mb-16px color-nero">Header here: Hampden-Sydney College in Virginia</div>
          <p className="mb-20px">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. 
          </p>
          <p className="mb-0">
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        </div>
        <div className="pt-80px">
          <div className="size-16 color-dim-gray text-center">RELATED POSTS</div>
          <div className="bag-in-daily-list row mt-60px">
            {listBagInDaily.map((bag, index) => (
              <div key={index} className={`bag-in-daily-list_item cursor-pointer mb-5 mb-lg-0 col-12 ${index === listBagInDaily.length - 1 ? 'col-md-12' : 'col-md-6'} col-lg-4`}>
                <img src={bag.img} className="w-100" />
                <h3 className="size-18 font-weight-bold font-title mt-3">{bag.title}</h3>
                <div className="d-flex align-items-start mt-10px">
                  <img src={calendarImg} />
                  <div className="size-14 color-dim-gray ml-2">{bag.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;