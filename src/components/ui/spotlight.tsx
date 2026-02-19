'use client';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import type React from 'react';
import { cn } from '../../lib/utils';

export const Spotlight = ({ className, fill }: { className?: string; fill?: string }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: decorative spotlight effect
    <div
      className={cn(
        'group/spotlight relative overflow-hidden rounded-md bg-transparent',
        className,
      )}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${fill || 'rgba(59, 130, 246, 0.15)'},
              transparent 80%
            )
          `,
        }}
      />
    </div>
  );
};

export const SpotlightCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: decorative spotlight effect
    <div
      className={cn(
        'group/spotlight relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8',
        className,
      )}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
};
