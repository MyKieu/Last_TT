import React, { useEffect, useState } from 'react';
import searchIcon from '../../assets/img/icon/Search.svg';
import cartIcon from '../../assets/img/icon/Cart.svg';
import logo from '../../assets/img/icon/Toi-Black 1.svg';
import './Header.scss';
import { useDispatch, useSelector } from 'react-redux';
import scrollAction from '../../actions/scroll.action';
import { NavLink } from 'react-router-dom';
import { Badge, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import addToCartAction from '../../actions/add-to-cart.action';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import { useAuthState } from 'react-firebase-hooks/auth';
 import  {auth}  from '../../firebase';

const Menu = () => {
    

    return (
        <ul className="nav size-14">
            <li>
                <NavLink to="/design-your-own" activeClassName="link-active">
                    Design your own
                    <div />
                </NavLink>
            </li>
            <li>
                <NavLink to="/collections" activeClassName="link-active">
                    Collection
                    <div />
                </NavLink>
            </li>
            <li>
                <NavLink to="/bags" activeClassName="link-active">
                    Bags
                    <div />
                </NavLink>
            </li>
            <li>
                <NavLink to="/our-story" activeClassName="link-active">
                    Our story
                    <div />
                </NavLink>
            </li>
            <li>
                <NavLink to="/news" activeClassName="link-active">
                    News
                    <div />
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact-us" activeClassName="link-active">
                    Contact
                    <div />
                </NavLink>
            </li>
        </ul>
    );
};

const Header = () => {
    const [use] = useAuthState(auth);
    console.log(use);

    const isTop = useSelector((state) => state.scroll.isTop);
    const listCart = useSelector(state => state.cart.listProduct);
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);

    if (window.scrollY >= 10) {
        dispatch(scrollAction.setIsTop(false));
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        if (localStorage.getItem('cart')) {
            dispatch(addToCartAction.init(JSON.parse(localStorage.getItem('cart'))));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(listCart));
    }, [listCart]);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const handleScroll = () => {
        if (window.scrollY >= 10) {
            dispatch(scrollAction.setIsTop(false));
        } else {
            dispatch(scrollAction.setIsTop(true));
        }
    };

    return (
        <div className={`header-session position-fixed w-100 ${!isTop ? 'not-at-top' : ''}`}>
            <div className="container-fluid d-flex align-items-center h-100">
                <div className="d-flex align-items-center left-nav">
                    <div className="d-none d-md-flex">
                        <div className="d-flex align-items-center left-nav-item">
                            
                            <HeaderContainer>
                
                <HeaderAvatar onClick={() => auth.signOut()} src={use?.photoURL} alt={use?.displayName} />
                
                  </HeaderContainer>
                        </div>
                       
                        <div className="d-flex align-items-center left-nav-item ml-3">
                            <NavLink to="/cart">
                                <Badge count={listCart.length} overflowCount={9}>
                                    <img src={cartIcon}  />
                                </Badge>
                            </NavLink>
                        </div>
                        <div className="d-flex align-items-center left-nav-item ml-3">
                            <img src={searchIcon} />
                        </div>
                    </div>
                </div>
                <div>
                    <NavLink to="/">
                        <img src={logo} />
                    </NavLink>
                </div>
                <div className="right-nav d-flex justify-content-end">
                    <div className="desktop-menu">
                        <Menu />
                    </div>
                    <MenuOutlined className="size-31 mobile-menu mr-md-5" onClick={showDrawer} />
                </div>
            </div>
            <Drawer
                title="Menu"
                placement="right"
                closable={true}
                visible={visible}
                onClose={onClose}
                className="side-bar"
            >
                <Menu />
            </Drawer>
        </div>
    );
};

export default Header;
const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
`;
const HeaderAvatar = styled(Avatar)`
    cursor: pointer;

    :hover {
        opacity: 0.8;
}
`;