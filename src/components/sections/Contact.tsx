'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { SpotlightCard } from '../ui/spotlight';

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: 'Email',
    value: import.meta.env.PUBLIC_EMAIL,
    href: `mailto:${import.meta.env.PUBLIC_EMAIL}`,
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: 'Localisation',
    value: import.meta.env.PUBLIC_LOCATION,
    href: null,
  },
  {
    icon: <Clock className="h-5 w-5" />,
    label: 'Disponibilité',
    value: 'Ouvert aux opportunités',
    href: null,
  },
];

const socialLinks = [
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: 'LinkedIn',
    href: import.meta.env.PUBLIC_LINKEDIN_URL,
  },
  {
    icon: <Github className="h-5 w-5" />,
    label: 'GitHub',
    href: import.meta.env.PUBLIC_GITHUB_URL,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Travaillons <span className="gradient-text">Ensemble</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[var(--color-muted)]">
            Une idée de projet ? Une question ? N'hésitez pas à me contacter. Je réponds
            généralement sous 24h.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SpotlightCard className="p-8 sm:p-12">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h3 className="mb-6 text-2xl font-bold text-[var(--color-foreground)]">
                  Informations de contact
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="rounded-lg bg-[var(--color-primary)]/10 p-3 text-[var(--color-primary)]">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-[var(--color-muted)]">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="font-medium text-[var(--color-foreground)] transition-colors hover:text-[var(--color-primary)]"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium text-[var(--color-foreground)]">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8">
                  <p className="mb-4 text-sm text-[var(--color-muted)]">Retrouvez-moi sur</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="rounded-full border border-[var(--color-border)] p-3 text-[var(--color-muted)] transition-all hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center rounded-2xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 p-8">
                <div className="mb-6 rounded-full bg-[var(--color-primary)]/10 p-4">
                  <Send className="h-8 w-8 text-[var(--color-primary)]" />
                </div>
                <h4 className="mb-2 text-xl font-bold text-[var(--color-foreground)]">
                  Prêt à démarrer ?
                </h4>
                <p className="mb-6 text-center text-sm text-[var(--color-muted)]">
                  Discutons de votre projet et voyons comment je peux vous aider.
                </p>
                <a
                  href={`mailto:${import.meta.env.PUBLIC_EMAIL}`}
                  className="group relative flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[var(--color-primary)] px-8 font-medium text-white transition-all hover:bg-[var(--color-primary)]/90 hover:shadow-lg hover:shadow-[var(--color-primary)]/25"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  Envoyer un message
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <div className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
            </span>
            <span className="text-sm font-medium text-green-400">
              Disponible pour de nouveaux projets
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
