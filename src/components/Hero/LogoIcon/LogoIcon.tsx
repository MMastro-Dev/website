import React from 'react';
import { LogoIconProps } from './LogoIcon.types.d';

export const LogoIcon: React.FC<LogoIconProps> = ({
    imageSrc = '/assets/Images/_DSC1311.jpg',
    imageAlt = 'cover',
    backgroundImage = '/assets/Images/dark-leather.png',
}) => {
    return (
        <div
            className="w-fit [flex:0.6] bg-sea-blue bg-[url('/assets/Images/dark-leather.png')]"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
        >
            <img
                className="w-fit h-screen object-cover"
                src={imageSrc}
                alt={imageAlt}
            />
        </div>
    );
};