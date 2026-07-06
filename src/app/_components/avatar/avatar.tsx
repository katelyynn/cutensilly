import React from 'react';
import style from "./avatar.module.css";
import { KathyLinkBlock } from '~/app/_components/link_block/link_block';
import Tip from '../tip/tip';

interface KathyAvatarProps {
    className?: string,
    image?: string,
    size: 'sm' | 'md' | 'nm' | 'lg' | 'xl' | 'xxl',
    alt?: string,
    link?: string, link_type?: 'link' | 'a',
    lazy?: boolean
}

export const KathyAvatar = ({
    className,
    image,
    size,
    alt,
    link, link_type,
    lazy
}: KathyAvatarProps) => {
    return (
        <Tip content={alt || 'image'}>
            <div className={`avatar ${style.avatar} ${style[`size-${size}`]} ${className}`}>
                {(image) ? <img draggable="false" src={image} alt={alt} loading={lazy ? 'lazy' : 'eager'} /> : ''}
                {(link) ? <KathyLinkBlock link={link} type={link_type} /> : ''}
            </div>
        </Tip>
    );
}
