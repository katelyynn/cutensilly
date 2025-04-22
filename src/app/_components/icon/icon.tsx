import React from 'react';
import style from "./icon.module.css";

export const KathyIcon = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className={style.icon}>
            {children}
        </div>
    );
}