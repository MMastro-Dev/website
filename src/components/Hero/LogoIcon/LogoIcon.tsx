import React from 'react';
import { LogoIconProps } from './LogoIcon.types.d';

export const LogoIcon: React.FC<LogoIconProps> = ({
    imageSrc = '/assets/Images/logo.png',
    imageAlt = 'logo',
}) => {
    return (
        <img
            className="md:size-[256px] size-[128px]  object-cover rounded-full border-4 border-white"
            src={imageSrc}
            alt={imageAlt}
        />
    );
};