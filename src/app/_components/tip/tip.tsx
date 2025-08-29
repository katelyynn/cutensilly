'use client';

import Tippy from '@tippyjs/react';
import React, { cloneElement } from 'react';

import { followCursor } from 'tippy.js';
import 'tippy.js/dist/tippy.css';

export default function Tip({
    content,
    children,
    follow
}: {
    content: React.ReactNode,
    children: React.ReactElement,
    follow?: boolean
}) {
    return (
        <Tippy content={content} followCursor={follow} plugins={[followCursor]} placement={follow ? 'right' : 'auto'} offset={follow ? [30, 36] : [0, 0]}>
            {cloneElement(children, { ref: (children as any).ref })}
        </Tippy>
    );
}