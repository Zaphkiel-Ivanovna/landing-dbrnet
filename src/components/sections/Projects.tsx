'use client';
import { motion } from 'framer-motion';
import { Code2, ExternalLink, Globe, Rocket, ShoppingCart, Smartphone, Users } from 'lucide-react';
import type React from 'react';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';

const projects = [
  {
    title: 'Application E-commerce',
    description:
      'Plateforme e-commerce complète avec gestion des commandes, paiements Stripe et dashboard admin.',
    icon: <ShoppingCart className="h-5 w-5" />,
    className: 'md:col-span-2',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL'],
    image: '/images/projects/ecommerce.png',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'App Mobile React Native',
    description:
      'Application mobile cross-platform pour la gestion de tâches avec synchronisation cloud.',
    icon: <Smartphone className="h-5 w-5" />,
    className: 'md:col-span-1',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Firebase'],
    image: '/images/projects/mobile.png',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Plateforme SaaS',
    description:
      'Solution SaaS de gestion pour les restaurants avec tableau de bord analytique en temps réel.',
    icon: <Users className="h-5 w-5" />,
    className: 'md:col-span-1',
    technologies: ['React', 'NestJS', 'PostgreSQL', 'Docker'],
    image: '/images/projects/saas.png',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Site Vitrine Moderne',
    description:
      'Sites web performants et optimisés SEO avec animations fluides et design responsive.',
    icon: <Globe className="h-5 w-5" />,
    className: 'md:col-span-2',
    technologies: ['Astro', 'React', 'TailwindCSS', 'Framer Motion'],
    image: '/images/projects/website.png',
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    title: 'API REST & Microservices',
    description:
      'Architecture backend scalable avec authentification JWT, rate limiting et documentation Swagger.',
    icon: <Code2 className="h-5 w-5" />,
    className: 'md:col-span-1',
    technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis'],
    image: '/images/projects/api.png',
    color: 'from-indigo-500/20 to-violet-500/20',
  },
  {
    title: 'MVP Startup',
    description:
      'Développement rapide de MVP pour startups avec itérations agiles et mise en production.',
    icon: <Rocket className="h-5 w-5" />,
    className: 'md:col-span-2',
    technologies: ['React', 'Node.js', 'MongoDB', 'Vercel'],
    image: '/images/projects/mvp.png',
    color: 'from-rose-500/20 to-red-500/20',
  },
];

const ProjectHeader = ({
  icon,
  technologies,
  color,
}: {
  icon: React.ReactNode;
  technologies: string[];
  color: string;
}) => (
  <div
    className={`flex h-full min-h-[8rem] w-full flex-col justify-between rounded-xl bg-gradient-to-br ${color} p-4`}
  >
    <div className="flex items-center justify-between">
      <div className="rounded-lg bg-[var(--color-background)]/50 p-2 backdrop-blur-sm">{icon}</div>
    </div>
    <div className="flex flex-wrap gap-2">
      {technologies.slice(0, 3).map((tech) => (
        <span
          key={tech}
          className="rounded-full bg-[var(--color-background)]/50 px-2 py-1 text-xs font-medium text-[var(--color-foreground)] backdrop-blur-sm"
        >
          {tech}
        </span>
      ))}
      {technologies.length > 3 && (
        <span className="rounded-full bg-[var(--color-background)]/50 px-2 py-1 text-xs font-medium text-[var(--color-muted)] backdrop-blur-sm">
          +{technologies.length - 3}
        </span>
      )}
    </div>
  </div>
);

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Mes <span className="gradient-text">Projets</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[var(--color-muted)]">
            Une sélection de projets réalisés, des applications web aux solutions mobiles en passant
            par les APIs.
          </p>
        </motion.div>

        <BentoGrid className="mx-auto">
          {projects.map((project) => (
            <BentoGridItem
              key={project.title}
              title={project.title}
              description={project.description}
              header={
                <ProjectHeader
                  icon={project.icon}
                  technologies={project.technologies}
                  color={project.color}
                />
              }
              icon={project.icon}
              className={project.className}
            />
          ))}
        </BentoGrid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-[var(--color-muted)]">
            Vous avez un projet en tête ? Discutons-en !
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-4 font-medium text-white transition-all hover:bg-[var(--color-primary)]/90 hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
          >
            Démarrer un projet
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
