'use client';
import { motion } from 'framer-motion';
import {
  Code2,
  Download,
  ExternalLink,
  Github,
  Glasses,
  Globe,
  Monitor,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';

const projects = [
  {
    title: 'ADB Studio',
    description:
      "Une app macOS native pour gérer vos appareils Android sans toucher au terminal. Connexion USB ou WiFi, installation d'APK en drag & drop, screenshots en un clic.",
    icon: <Smartphone className='h-5 w-5' />,
    className: 'md:col-span-1',
    technologies: ['Swift', 'SwiftUI', 'ADB', 'mDNS'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Zaphkiel-Ivanovna/adb-studio',
        icon: <Github className='h-3.5 w-3.5' />,
      },
    ],
  },
  {
    title: 'Google Auth Extractor',
    description:
      "Marre de Google Authenticator ? Cet outil extrait vos codes 2FA depuis un QR code d'export et les convertit pour Bitwarden, Authy, 1Password ou KeePass. Tout se passe en local.",
    icon: <ShieldCheck className='h-5 w-5' />,
    className: 'md:col-span-2',
    technologies: ['Go', 'Protobuf', 'Docker', 'CI/CD'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Zaphkiel-Ivanovna/GoogleAuthExtractor',
        icon: <Github className='h-3.5 w-3.5' />,
      },
    ],
  },
  {
    title: 'GitComAI',
    description:
      "Extension VS Code qui analyse vos changements Git et génère des messages de commit propres avec l'IA. Compatible Claude, OpenAI, Mistral et Ollama.",
    icon: <Code2 className='h-5 w-5' />,
    className: 'md:col-span-2',
    technologies: ['TypeScript', 'VS Code API', 'Anthropic', 'OpenAI'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Zaphkiel-Ivanovna/git-com-ai',
        icon: <Github className='h-3.5 w-3.5' />,
      },
    ],
  },
  {
    title: 'Mon Portfolio',
    description:
      'Le site que vous visitez en ce moment. Un portfolio moderne avec des animations soignées, pensé pour être rapide et accessible.',
    icon: <Globe className='h-5 w-5' />,
    className: 'md:col-span-1',
    technologies: ['Astro', 'React', 'TailwindCSS', 'Framer Motion'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Zaphkiel-Ivanovna/landing-dbrnet',
        icon: <Github className='h-3.5 w-3.5' />,
      },
      {
        label: 'Site',
        href: 'https://dbrnet.fr',
        icon: <ExternalLink className='h-3.5 w-3.5' />,
      },
    ],
  },
  {
    title: 'MediaDL',
    description:
      'Un téléchargeur de médias qui tourne entièrement dans votre navigateur. YouTube, SoundCloud, conversion avec FFmpeg — aucune donnée ne quitte votre machine.',
    icon: <Download className='h-5 w-5' />,
    className: 'md:col-span-1',
    technologies: ['Next.js', 'TypeScript', 'FFmpeg', 'ytdl-core'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Zaphkiel-Ivanovna/mediadl',
        icon: <Github className='h-3.5 w-3.5' />,
      },
    ],
  },
  {
    title: 'Lighthouse Guard',
    description:
      'Pour les passionnés de VR : une app mobile pour piloter vos base stations HTC/Valve (allumer, éteindre, vérifier le statut) sans passer par SteamVR.',
    icon: <Glasses className='h-5 w-5' />,
    className: 'md:col-span-1',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Tamagui'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Zaphkiel-Ivanovna/lighthouse-guard',
        icon: <Github className='h-3.5 w-3.5' />,
      },
    ],
  },
  {
    title: 'zkillu.fr',
    description:
      'Site vitrine réalisé pour un client, avec un design sur-mesure et une expérience utilisateur soignée.',
    icon: <Monitor className='h-5 w-5' />,
    className: 'md:col-span-1',
    technologies: ['Web', 'Design'],
    links: [
      {
        label: 'Site',
        href: 'https://zkillu.fr/fr',
        icon: <ExternalLink className='h-3.5 w-3.5' />,
      },
    ],
  },
];

export default function Projects() {
  return (
    <section id='projects' className='relative py-24 px-4'>
      <div className='absolute inset-0 grid-pattern opacity-50' />

      <div className='relative z-10 mx-auto max-w-6xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-16 text-center'
        >
          <h2 className='mb-4 text-3xl font-bold sm:text-4xl'>
            Mes <span className='gradient-text'>Projets</span>
          </h2>
          <p className='mx-auto max-w-2xl text-[var(--color-muted)]'>
            Des outils que j'utilise au quotidien, des apps open source et des
            sites réalisés pour mes clients.
          </p>
        </motion.div>

        <BentoGrid className='mx-auto'>
          {projects.map((project) => (
            <BentoGridItem
              key={project.title}
              title={project.title}
              description={project.description}
              icon={project.icon}
              technologies={project.technologies}
              links={project.links}
              className={project.className}
            />
          ))}
        </BentoGrid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='mt-16 text-center'
        >
          <p className='mb-6 text-[var(--color-muted)]'>
            Vous avez un projet en tête ? Discutons-en !
          </p>
          <a
            href={`mailto:${import.meta.env.PUBLIC_EMAIL}`}
            className='group inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-4 font-medium text-white transition-all hover:bg-[var(--color-primary)]/90 hover:shadow-lg hover:shadow-[var(--color-primary)]/25'
          >
            Démarrer un projet
            <ExternalLink className='h-4 w-4 transition-transform group-hover:translate-x-1' />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
