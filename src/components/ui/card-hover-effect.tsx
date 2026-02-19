'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '../../lib/utils';

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    icon?: React.ReactNode;
    link?: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn('grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3', className)}>
      {items.map((item, idx) => {
        const Wrapper = item.link ? 'a' : 'div';
        return (
          <Wrapper
            href={item.link}
            key={item.title}
            className="group relative block h-full w-full p-2"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 block h-full w-full rounded-3xl bg-[var(--color-primary)]/10"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <div className="flex items-center gap-4">
                {item.icon && (
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    {item.icon}
                  </div>
                )}
                <CardTitle>{item.title}</CardTitle>
              </div>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </Wrapper>
        );
      })}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'relative z-20 h-full w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-colors group-hover:border-[var(--color-primary)]/50',
        className,
      )}
    >
      <div className="relative z-50">{children}</div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn('font-semibold tracking-wide text-[var(--color-foreground)]', className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn('mt-4 text-sm leading-relaxed text-[var(--color-muted)]', className)}>
      {children}
    </p>
  );
};
