'use client';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { BackgroundBeams } from '../ui/background-beams';
import { MovingBorder } from '../ui/moving-border';
import { TextGenerateEffect } from '../ui/text-generate-effect';

export default function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-4"
    >
      <BackgroundBeams className="opacity-40" />

      <div className="relative z-10 flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-shrink-0"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-primary)] opacity-75 blur-lg" />
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-2 border-[var(--color-border)] bg-[var(--color-card)] sm:h-64 sm:w-64 lg:h-80 lg:w-80">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/images/profile-sm.webp 256w, /images/profile-md.webp 320w, /images/profile-lg.webp 480w, /images/profile-xl.webp 640w"
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 320px"
                />
                <img
                  src="/images/profile-optimized.jpg"
                  alt="Damien Dubernet - Développeur Full Stack"
                  className="h-full w-full object-cover"
                  width={320}
                  height={320}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </picture>
            </div>
          </div>
        </motion.div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-3 flex items-center justify-center gap-2"
          >
            <MapPin className="h-4 w-4 text-[var(--color-primary)]" />
            <span className="text-sm text-[var(--color-muted)]">
              {import.meta.env.PUBLIC_LOCATION}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-2 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
          >
            <span className="text-[var(--color-foreground)]">Damien</span>{' '}
            <span className="gradient-text">Dubernet</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-4"
          >
            <h2 className="text-lg font-medium text-[var(--color-primary)] sm:text-xl">
              Développeur Full Stack
            </h2>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              TypeScript • React / React Native • NestJS
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-6"
          >
            <TextGenerateEffect
              words="Je conçois et développe des applications web et mobiles performantes, de l'idée à la mise en production."
              className="mx-auto max-w-md text-sm leading-relaxed text-[var(--color-muted)] sm:text-base"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <MovingBorder as="a" href="/contact" duration={3000}>
              <Mail className="mr-2 h-4 w-4" />
              Me contacter
            </MovingBorder>

            <a
              href="/#projects"
              className="group flex h-12 items-center gap-2 rounded-full border border-[var(--color-border)] bg-transparent px-5 text-sm font-medium text-[var(--color-foreground)] transition-all hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-card)]"
            >
              Mes projets
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-6 flex items-center justify-center gap-3"
          >
            <a
              href={import.meta.env.PUBLIC_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--color-border)] p-2.5 text-[var(--color-muted)] transition-all hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-card)] hover:text-[var(--color-primary)]"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={import.meta.env.PUBLIC_GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--color-border)] p-2.5 text-[var(--color-muted)] transition-all hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-card)] hover:text-[var(--color-primary)]"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${import.meta.env.PUBLIC_EMAIL}`}
              className="rounded-full border border-[var(--color-border)] p-2.5 text-[var(--color-muted)] transition-all hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-card)] hover:text-[var(--color-primary)]"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-5 w-5 text-[var(--color-muted)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
