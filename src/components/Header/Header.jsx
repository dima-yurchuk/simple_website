import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './Header.scss'
import { useCookies } from 'react-cookie';
import {useEffect} from "react";
import { v4 as uuid } from 'uuid';
import {sendData} from "../../Api";

const Header = () => {
    const [isLogin, setIsLogin] = useState(localStorage.getItem('is_user_login') === 'true')
    const [cookies, setCookie, removeCookie] = useCookies(['end_user_id']);
    useEffect(()=>{
        isLogin && sendData(cookies)
    });
    function handleLogin(){
        localStorage.setItem('is_user_login', true);
        setIsLogin(true);
        setCookie('end_user_id', uuid().slice(0,10), { path: '/' });
    }
    function handleLogout(){
        localStorage.setItem('is_user_login', false);
        setIsLogin(false);
        removeCookie('end_user_id', { path: '/' })
    }
    return (
        <div className={'header'}>
            <Link to={'/'}>
                <div>Головна</div>
            </Link>
            <Link to={'/info'}>
                <div>Коротка інформація</div>
            </Link>
            <Link to={'/contacts'}>
                <div>Контакти</div>
            </Link>
            {isLogin ? <button onClick={handleLogout}>Вихід</button> :
            <button onClick={handleLogin}>Вхід</button>}

        </div>
    );
};

export default Header;