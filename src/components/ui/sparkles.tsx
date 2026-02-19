'use client';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { cn } from '../../lib/utils';

type SparklesCoreProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
  speed?: number;
};

export const SparklesCore = ({
  className,
  background,
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 100,
  particleColor = '#FFF',
  speed = 1,
}: SparklesCoreProps) => {
  const particles = useMemo(() => {
    return Array.from({ length: particleDensity }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (maxSize - minSize) + minSize,
      duration: (Math.random() * 2 + 1) / speed,
      delay: Math.random() * 2,
    }));
  }, [particleDensity, minSize, maxSize, speed]);

  return (
    <div className={cn('h-full w-full', className)} style={{ background }}>
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {particles.map((particle) => (
          <motion.circle
            key={particle.id}
            cx={`${particle.x}%`}
            cy={`${particle.y}%`}
            r={particle.size}
            fill={particleColor}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>
    </div>
  );
};
