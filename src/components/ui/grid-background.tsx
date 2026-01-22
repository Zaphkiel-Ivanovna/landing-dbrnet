'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const GridBackground = ({ className }: { className?: string }) => {
    return (
        <div className={cn('absolute inset-0 overflow-hidden', className)}>
            <div
                className='absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[var(--color-primary)]/10 blur-3xl animate-float'
                style={{ animationDuration: '8s' }}
            />
            <div
                className='absolute right-1/4 top-1/2 h-80 w-80 rounded-full bg-[var(--color-accent)]/10 blur-3xl animate-float'
                style={{ animationDuration: '10s', animationDelay: '1s' }}
            />
            <div
                className='absolute bottom-1/4 left-1/3 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl animate-float'
                style={{ animationDuration: '12s', animationDelay: '2s' }}
            />
        </div>
    );
};

export const DotBackground = ({ className }: { className?: string }) => {
    return (
        <div className={cn('absolute inset-0 overflow-hidden', className)}>
            <div
                className='absolute inset-0'
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)`,
                    backgroundSize: '32px 32px',
                }}
            />

            <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-background)_70%)]' />
        </div>
    );
};

export const Particles = ({ className }: { className?: string }) => {
    const particles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
    }));

    return (
        <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className='absolute rounded-full bg-[var(--color-primary)]/30'
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: 'linear',
                    }}
                />
            ))}
        </div>
    );
};

export const GlowingStars = ({ className }: { className?: string }) => {
    const stars = [
        { x: 10, y: 15 },
        { x: 25, y: 8 },
        { x: 40, y: 22 },
        { x: 55, y: 5 },
        { x: 70, y: 18 },
        { x: 85, y: 12 },
        { x: 15, y: 45 },
        { x: 35, y: 55 },
        { x: 60, y: 42 },
        { x: 80, y: 50 },
        { x: 5, y: 75 },
        { x: 30, y: 82 },
        { x: 50, y: 70 },
        { x: 75, y: 85 },
        { x: 90, y: 68 },
    ];

    return (
        <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
            {stars.map((star, i) => (
                <div
                    key={i}
                    className='absolute h-1 w-1 rounded-full bg-white/60 animate-pulse'
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: `${2 + (i % 3)}s`,
                    }}
                />
            ))}
        </div>
    );
};
