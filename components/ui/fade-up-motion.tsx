'use client'

import * as m from "motion/react-m"
import React from 'react'

type FadeUpMotionProps = {
    children: React.ReactNode;
};

function FadeUpMotion({ children }: FadeUpMotionProps) {
    return (
        <m.div
            initial={{ filter: "blur(5px)", y: 30, opacity: 0 }}
            whileInView={{
                filter: "blur(0)",
                y: 0,
                opacity: 1,

            }}
            transition={{ duration: 0.4, ease: "easeIn" }}
        >
            {children}
        </m.div>
    )
}

export default FadeUpMotion