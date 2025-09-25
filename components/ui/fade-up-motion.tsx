'use client'
import { motion } from 'framer-motion';
import React from 'react'

type FadeUpMotionProps = {
    children: React.ReactNode;
};

function FadeUpMotion({ children }: FadeUpMotionProps) {
    return (
        <motion.div
            initial={{ filter: "blur(5px)", y: 30, opacity: 0 }}
            whileInView={{
                filter: "blur(0)",
                y: 0,
                opacity: 1,

            }}
            transition={{ duration: 0.7, ease: "easeIn" }}
        >
            {children}
        </motion.div>
    )
}

export default FadeUpMotion