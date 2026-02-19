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
    <div className={cn('mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3', className)}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
  technologies,
  links,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
  technologies?: string[];
  links?: { label: string; href: string; icon: React.ReactNode }[];
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-lg transition duration-200 hover:border-[var(--color-primary)]/50 hover:shadow-xl',
        className,
      )}
    >
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon && <div className="mb-2 text-[var(--color-primary)]">{icon}</div>}
        <div className="mb-2 font-bold text-[var(--color-foreground)]">{title}</div>
        <div className="text-sm text-[var(--color-muted)]">{description}</div>
      </div>

      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-card-hover)] px-2.5 py-1 text-xs text-[var(--color-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {links && links.length > 0 && (
        <div className="flex gap-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3 py-1.5 text-xs font-medium text-[var(--color-muted)] transition-all hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );
};
