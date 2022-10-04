import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <nav className="header__menu menu">
                <Link className="menu__link" to="/">
                    Билеты и абонементы
                </Link>
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
                <button className="header__button">
                    Войти
                </button>
                <button className="burger-menu">
                    burger-menu
                </button>
            </nav>
            Header
        </header>
    );
};

export default Header;