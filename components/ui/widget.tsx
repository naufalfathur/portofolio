import { motion } from 'framer-motion';
import React from 'react'

export const WidgetCard = ({
    title,
    subtitle,
    bgImage,
    className = '',
    heightClass = 'h-56',
    offset = { x: 0, y: 0 },
    strength = 0.6,
    children,
}: {
    title: string;
    subtitle?: string;
    bgImage?: string;
    className?: string;
    heightClass?: string;
    offset?: { x: number; y: number };
    strength?: number;
    children?: React.ReactNode;
}) => {
    return (
        <motion.div
            className={`relative ${heightClass} overflow-visible rounded-2xl bg-cover bg-center ${className}`}
            style={bgImage ? { backgroundImage: `url('${bgImage}')` } : { backgroundColor: '#DCDCDC' }}
            animate={{ x: offset.x * strength, y: offset.y * strength }}
            transition={{ type: 'spring', stiffness: 100, damping: 12 }}
        >
            <motion.div
                className="absolute -top-4 right-4 z-30"
                animate={{ x: offset.x * (strength * 0.7), y: offset.y * (strength * 0.7) }}
                transition={{ type: 'spring', stiffness: 100, damping: 12 }}
            >
                <div className="glass-new text-xs">{title}</div>
            </motion.div>

            <div className="absolute inset-0 z-20 rounded-2xl overflow-hidden">
                {subtitle ? (
                    <div className="absolute bottom-4 right-4 text-white/90 text-xs font-semibold drop-shadow">
                        {subtitle}
                    </div>
                ) : null}
                {children}
            </div>
        </motion.div>
    );
};