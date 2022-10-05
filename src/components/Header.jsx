import React from 'react';
import { Link } from "react-router-dom";
import {ReactComponent as LoginIcon} from '../assets/images/icons/login.svg'

const Header = () => {
    return (
        <header className="header">
            <div className="header__container container">
                <Link className="header__link text-uppercase" to="/">
                    Билеты и абонементы
                </Link>
                <nav className="header__menu menu">
                    <ul className="menu__list">
                        <li className="menu__item">
                            <Link className="menu__link" to="#">Как купить?</Link>
                        </li>
                        <li className="menu__item">
                            <Link className="menu__link" to="#">Правила</Link>
                        </li>
                        <li className="menu__item">
                            <Link className="menu__link" to="#">Возврат билетов</Link>
                        </li>
                    </ul>
                </nav>
                <div className="header__actions">
                    <button className="header__button" type="button">
                        <LoginIcon className="login-icon"/>
                        Войти
                    </button>
                    <button className="header__button burger-button" type="button">
                        <span />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;