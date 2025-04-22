"use client";

import React, { useState } from 'react';
import style from "./icon.module.css";

export const KathyIcon = ({
    state,
    hover
}: {
    state: string,
    hover?: string
}) => {
    const [hovering, setHovering] = useState(false);
    const onHover = () => {
        setHovering(!hovering);
    }

    return (
        <div className={style.icon} onMouseEnter={onHover} onMouseLeave={onHover}>
            {(hovering && hover) ? hover : state}
        </div>
    );
}