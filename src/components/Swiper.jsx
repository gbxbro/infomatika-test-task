import React from 'react';
import Hexagon from "./UI/Hexagon";

const Swiper = () => {
    return (
        <div className="swiper">
            <ul className="swiper__list">
                <li className="swiper__item">
                    <Hexagon size="sm" />
                </li>
                <li className="swiper__item">
                    <Hexagon size="md" />
                </li>
                <li className="swiper__item">
                    <Hexagon size="lg" />
                </li>
                <li className="swiper__item">
                    <Hexagon size="md" />
                </li>
                <li className="swiper__item">
                    <Hexagon size="sm" />
                </li>
            </ul>
        </div>
    );
};

export default Swiper;