import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import _ from 'lodash';
import './Footer.scss';
import logo from '../../assets/img/icon/Toi-White 1.svg';
import faceGray from '../../assets/img/icon/Face-gray.svg';
import twitterGray from '../../assets/img/icon/Twitter-gray.svg';
import youtubeGray from '../../assets/img/icon/Youtube-gray.svg';
import { NewsLetter } from '../../components';

const Footer = () => {
    const { pathname } = useLocation();
    const [visibleFooter, setVisibleFooter] = useState(false);

    useEffect(() => {
        if (_.includes(pathname, 'customize')) {
            setVisibleFooter(false);
        } else {
            setVisibleFooter(true);
        }
    }, [pathname]);

    return (
        <div>
            {visibleFooter ? (
                <div>
                    <div className="mt-120px">
                        <NewsLetter />
                    </div>
                    <div className="footer pt-110px pb-110px">
                        <div className="container">
                            <div className="footer-wrapper flex-wrap flex-lg-nowrap mb-120px d-flex justify-content-between align-items-start">
                                <div className="footer_logo d-flex flex-column justify-content-center">
                                    <img className="footer_logo-img mb-3" src={logo} alt="logo" />
                                    <div className="footer_logo-text text-center color-white size-12">
                                        Be Unique, Be Extraordinary, Be Sexy, Be Strong, Be TOI
                                    </div>
                                </div>
                                <div className="footer_nav">
                                    <div className="footer_nav-title mb-20px color-white size-14">NAVIGATION</div>
                                    <Link
                                        className="footer_nav-item  d-block text-decoration-none size-14 mb-3"
                                        to="#"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        className="footer_nav-item d-block text-decoration-none size-14 mb-3"
                                        to="#"
                                    >
                                        Design your own
                                    </Link>
                                    <Link
                                        className="footer_nav-item d-block text-decoration-none size-14 mb-3"
                                        to="#"
                                    >
                                        Collection
                                    </Link>
                                    <Link
                                        className="footer_nav-item d-block text-decoration-none size-14 mb-3"
                                        to="#"
                                    >
                                        Bags
                                    </Link>
                                    <Link
                                        className="footer_nav-item d-block text-decoration-none size-14 mb-3"
                                        to="#"
                                    >
                                        Our Story
                                    </Link>
                                    <Link
                                        className="footer_nav-item d-block text-decoration-none size-14 mb-3"
                                        to="#"
                                    >
                                        Blog
                                    </Link>
                                    <Link
                                        className="footer_nav-item d-block text-decoration-none size-14 mb-3"
                                        to="#"
                                    >
                                        Contact{' '}
                                    </Link>
                                </div>
                                <div className="footer_support">
                                    <div className="footer_support-title mb-20px color-white size-14">SUPPORT</div>
                                    <Link
                                        className="footer_support-item d-block text-decoration-none size-14 mb-3"
                                        to="#"
                                    >
                                        Store location
                                    </Link>
                                    <Link
                                        className="footer_support-item d-block text-decoration-none size-14 mb-3"
                                        to="#"
                                    >
                                        
                                        Terms &amp; Conditions
                                    </Link>
                                </div>
                                <div className="footer_social d-flex flex-column d-sm-block">
                                    <div className="footer_social-title mb-20px color-white size-14">SOCIAL</div>
                                    <Link
                                        className="footer_social-item mb-20px mb-sm-0 mr-20px text-decoration-none"
                                        to="#"
                                    >
                            
                                        <img src={faceGray} alt="facebook icon" />
                                    </Link>
                                    <Link
                                        className="footer_social-item mb-20px mb-sm-0 mr-20px text-decoration-none"
                                        to="#"
                                    >
                                        <img src={twitterGray} alt="twitter icon" />
                                    </Link>
                                    <Link className="footer_social-item text-decoration-none" to="#">
                                        <img src={youtubeGray} alt="youtube icon" />
                                    </Link>
                                </div>
                            </div>
                            <div className="footer_copy-right size-12 text-center">
                                All rights reserved — 2021 © MY KIEU
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default Footer;
