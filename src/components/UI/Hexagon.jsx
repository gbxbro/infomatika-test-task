import React from 'react';

const Hexagon = ({size, place, date, time}) => {
    const isLarge = (size === 'lg')
    const isMedium = (size === 'md')
    const isSmall = (size === 'sm')

    return (
        <div className={`hexagon ${isLarge ? 'hexagon_lg' : ''} ${isMedium ? 'hexagon_md' : ''} ${isSmall ? 'hexagon_sm' : ''}`}>
            <div className="hexagon__inner">
                <div className="hexagon__content">
                    {(isLarge && place) && (
                        <div className="hexagon__place">
                            {place}
                        </div>
                    )}
                    {date && (
                        <div className={`hexagon__date ${isLarge ? 'hexagon__date_lg' : ''}`}>
                            {date}
                        </div>
                    )}
                    {(isLarge && time) && (
                        <div className="hexagon__time">
                            {time}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Hexagon;