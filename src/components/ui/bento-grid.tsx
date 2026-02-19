'use client';
import { motion } from 'framer-motion';
import type React from 'react';
import { cn } from '../../lib/utils';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3',
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  link?: string;
}) => {
  const Wrapper = link ? motion.a : motion.div;

  return (
    <Wrapper
      href={link}
      target={link ? '_blank' : undefined}
      rel={link ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'group/bento row-span-1 flex cursor-pointer flex-col justify-between space-y-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-4 shadow-lg transition duration-200 hover:border-[var(--color-primary)]/50 hover:shadow-xl',
        className,
      )}
    >
      {header && <div className="flex-1 overflow-hidden rounded-xl">{header}</div>}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon && <div className="mb-2 text-[var(--color-primary)]">{icon}</div>}
        <div className="mb-2 font-bold text-[var(--color-foreground)]">{title}</div>
        <div className="text-sm text-[var(--color-muted)]">{description}</div>
      </div>
    </Wrapper>
  );
};
