import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import ImgLogo from '../../assets/img/logo.png';
import ImgSearch from '../../assets/img/search.svg';
import ImgArrowDown from '../../assets/img/arrowdown.svg';
import ImgHeart from '../../assets/img/heart.svg';
import Imgmenu from '../../assets/img/menu.svg';

const Header = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState();
    const inputSearch = event => {
        setSearch(event.target.value);
    };
    const submitAction = () => {
        dispatch(push('?search=' + search));
    };

    return (
        <div>
            <header>
                <div class="navbar row space-between">
                    <img class="sp-menu" src={Imgmenu} alt="" />
                    <img src={ImgLogo} class="sp-logo" alt="" />
                    <img src={ImgSearch} class="sp-search" alt="" />
                    <div class="logo">
                        <img src={ImgLogo} alt="" class="logoimg" onClick={() => dispatch(push('/'))} />
                    </div>
                    <div class="menus row">
                        <form onSubmit={submitAction} class="searchbox">
                            <div class="searchbox m-15">
                                <input type="text" onChange={inputSearch} name="search" />
                                <img src={ImgSearch} alt="" />
                            </div>
                        </form>
                        <div class="category m-15 row">
                            <div class="p-10">Category</div>
                            <img src={ImgArrowDown} alt="" />
                        </div>
                        <div class="favourites m-15 row" onClick={() => dispatch(push('/favourites '))}>
                            <div class="p-10">Favourites</div>
                            <img src={ImgHeart} alt="" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};
export default Header;
