'use client';
import { motion } from 'framer-motion';
import { Cloud, Code2, Database, Server, Smartphone, Terminal } from 'lucide-react';
import { SpotlightCard } from '../ui/spotlight';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code2 className="h-6 w-6" />,
    skills: [
      { name: 'TypeScript', level: 95 },
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 85 },
      { name: 'TailwindCSS', level: 90 },
      { name: 'Framer Motion', level: 80 },
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Mobile',
    icon: <Smartphone className="h-6 w-6" />,
    skills: [
      { name: 'React Native', level: 90 },
      { name: 'Expo', level: 85 },
      { name: 'iOS/Android', level: 80 },
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Backend',
    icon: <Server className="h-6 w-6" />,
    skills: [
      { name: 'NestJS', level: 90 },
      { name: 'Node.js', level: 90 },
      { name: 'REST API', level: 95 },
      { name: 'GraphQL', level: 75 },
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Base de données',
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Redis', level: 75 },
      { name: 'Prisma', level: 85 },
    ],
    color: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'DevOps & Cloud',
    icon: <Cloud className="h-6 w-6" />,
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'CI/CD', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'Vercel', level: 90 },
    ],
    color: 'from-indigo-500 to-violet-500',
  },
  {
    title: 'Outils',
    icon: <Terminal className="h-6 w-6" />,
    skills: [
      { name: 'Git', level: 90 },
      { name: 'VS Code/Zed', level: 95 },
      { name: 'Postman', level: 85 },
      { name: 'Figma', level: 70 },
    ],
    color: 'from-rose-500 to-red-500',
  },
];

const techLogos = [
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'NestJS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'TailwindCSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            <span className="gradient-text">Compétences</span> Techniques
          </h2>
          <p className="mx-auto max-w-2xl text-[var(--color-muted)]">
            Un ensemble de technologies modernes maîtrisées pour créer des applications performantes
            et scalables.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 overflow-hidden"
        >
          <div className="flex gap-8 animate-scroll">
            {[...techLogos, ...techLogos].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex flex-shrink-0 items-center gap-3 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-6 py-3"
              >
                <img src={tech.icon} alt={tech.name} className="h-6 w-6" />
                <span className="text-sm font-medium text-[var(--color-foreground)]">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <SpotlightCard className="h-full">
                <div className="relative z-10">
                  <div className="mb-6 flex items-center gap-3">
                    <div
                      className={`rounded-xl bg-gradient-to-br ${category.color} p-3 text-white`}
                    >
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-foreground)]">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-sm font-medium text-[var(--color-foreground)]">
                            {skill.name}
                          </span>
                          <span className="text-xs text-[var(--color-muted)]">{skill.level}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-[var(--color-border)]">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: categoryIndex * 0.1 + skillIndex * 0.1,
                              ease: 'easeOut',
                            }}
                            className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
