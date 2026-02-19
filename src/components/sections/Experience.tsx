'use client';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { Timeline } from '../ui/timeline';

const experiences = [
  {
    title: 'Développeur Full Stack & Tech Support',
    date: 'Nov. 2023 - Maintenant',
    company: 'BELORDER',
    location: 'Paris (Télétravail), France',
    description: [
      "Développement et maintenance d'applications web et mobiles",
      'Support technique et résolution de problèmes',
      'Collaboration avec les équipes produit et design',
      'Amélioration continue des processus de développement',
    ],
    logo: '/logos/Belorder.png',
  },
  {
    title: 'Développeur Web Freelance',
    date: 'Nov. 2023 - Présent',
    company: 'DBRNET (Auto-entrepreneur)',
    location: 'Le Mans, France',
    description: [
      'Création de sites web et applications sur mesure',
      'Conseil et accompagnement technique pour les clients',
      'Gestion de projet de A à Z',
      "Développement d'applications mobiles React Native",
    ],
    technologies: ['React', 'Next.js', 'React Native', 'TailwindCSS', 'NestJS'],
    logo: '/images/logo.svg',
  },
  {
    title: 'Développeur Web & Mobile',
    date: 'Sept. 2022 - Juil. 2023',
    company: 'Helyx',
    location: 'Angers, France',
    description: [
      "Développement d'applications web et mobiles en React/React Native",
      'Participation aux sprints agiles et code reviews',
      'Intégration de maquettes Figma',
      "Contribution à l'architecture technique",
    ],
    technologies: ['React', 'React Native', 'TypeScript', 'NestJS'],
    logo: '/logos/Helyx.png',
  },
  {
    title: 'Maintenance de Softphones',
    date: 'Juin 2022 - Août 2022',
    company: 'MAAF Assurances',
    location: 'Niort, France',
    description: [
      'Maintenance et support des solutions de téléphonie IP',
      "Diagnostic et résolution d'incidents techniques",
      'Documentation des procédures de maintenance',
    ],
    technologies: ['VoIP', 'Téléphonie IP', 'Support technique'],
    logo: '/logos/Maaf.png',
  },
];

const education = [
  {
    title: 'Bachelor Développeur Web',
    date: '2022 - 2023',
    company: 'MyDigitalSchool',
    location: 'Angers, France',
    description: [
      'Formation intensive en développement web moderne',
      'Projets pratiques en équipe',
      'Apprentissage des méthodologies agiles',
    ],
    technologies: ['JavaScript', 'React', 'Node.js', 'SQL', 'Express'],
    logo: '/logos/MDS.png',
  },
  {
    title: 'BTS Systèmes Numériques',
    date: '2020 - 2022',
    company: "Saint Gab'",
    location: 'Vendée, France',
    description: [
      'Spécialisation Informatique & Réseaux',
      'Administration de serveurs et réseaux',
      'Programmation et développement logiciel',
    ],
    technologies: ['Linux', 'Windows Server', 'Réseau', 'Python'],
    logo: '/logos/StGab.png',
  },
  {
    title: 'Bac Pro Systèmes Numériques',
    date: '2017 - 2020',
    company: "Saint Gab'",
    location: 'Vendée, France',
    description: [
      "Fondamentaux de l'informatique et des réseaux",
      'Maintenance et support informatique',
      'Premiers pas en programmation',
    ],
    technologies: ['Hardware', 'Windows', 'Réseau'],
    logo: '/logos/StGab.png',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Mon <span className="gradient-text">Parcours</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[var(--color-muted)]">
            Une évolution constante de la maintenance informatique vers le développement full stack
            moderne.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-[var(--color-primary)]/20 p-3">
              <Briefcase className="h-6 w-6 text-[var(--color-primary)]" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-foreground)]">
              Expériences Professionnelles
            </h3>
          </div>
          <Timeline data={experiences} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-[var(--color-accent)]/20 p-3">
              <GraduationCap className="h-6 w-6 text-[var(--color-accent)]" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-foreground)]">Formation</h3>
          </div>
          <Timeline data={education} />
        </motion.div>
      </div>
    </section>
  );
}
