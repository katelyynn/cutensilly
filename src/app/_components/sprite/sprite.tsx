import React from 'react';
import style from "./sprite.module.css";

export const KathySprite = ({
    name
}: {name: string}) => {
    return (
        <span className={`${style.sprite} ${style[name]}`} />
    );
}
