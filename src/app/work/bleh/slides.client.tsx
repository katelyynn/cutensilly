'use client';

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import style from "./slides.module.css";

export const Slides = ({

}: {}) => {
    return (
        <Slide indicators transitionDuration={350} arrows easing="cubic" canSwipe>
            <div className={style.slide}>
                <div className={style.image} style={{backgroundImage: `url('/bleh/preview.jpg')`}}></div>
            </div>
            <div className={style.slide}>
                <div className={style.image} style={{backgroundImage: `url('/bleh/preview.jpg')`}}></div>
            </div>
        </Slide>
    );
}