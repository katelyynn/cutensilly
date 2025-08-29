import React from 'react';
import style from "./avatar.module.css";
import { KathyLinkBlock } from '~/app/_components/link_block/link_block';
import Tip from '../tip/tip';

interface KathyAvatarProps {
    image?: string,
    size: 'sm' | 'md' | 'nm' | 'lg' | 'xl' | 'xxl',
    alt?: string,
    link?: string, link_type?: 'link' | 'a'
}

export const KathyAvatar = ({
    image,
    size,
    alt,
    link, link_type
}: KathyAvatarProps) => {
    return (
        <Tip content={alt || 'image'} follow>
            <div className={`avatar ${style.avatar} ${style[`size-${size}`]}`}>
                {(image) ? <img draggable="false" src={image} alt={alt} /> : ''}
                {(link) ? <KathyLinkBlock link={link} type={link_type} /> : ''}
            </div>
        </Tip>
    );
}