'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './ui/spotlight';
import { MovingBorder } from './ui/moving-border';
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle, Loader2, Briefcase } from 'lucide-react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<FormStatus>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const subject = encodeURIComponent(`[dbrnet.fr] ${formData.subject}`);
            const body = encodeURIComponent(
                `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
            );
            const mailtoLink = `mailto:${import.meta.env.PUBLIC_EMAIL}?subject=${subject}&body=${body}`;

            window.location.href = mailtoLink;

            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setStatus('error');
        }
    };

    const inputClasses =
        'w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-3 text-[var(--color-foreground)] placeholder-[var(--color-muted-foreground)] transition-all focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20';

    return (
        <SpotlightCard className='p-8 sm:p-10'>
            <div className='mb-8'>
                <h2 className='mb-2 text-2xl font-bold text-[var(--color-foreground)]'>Envoyez-moi un message</h2>
                <p className='text-sm text-[var(--color-muted)]'>
                    Remplissez le formulaire ci-dessous et je vous répondrai rapidement.
                </p>
            </div>

            <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                    <label
                        htmlFor='name'
                        className='mb-2 flex items-center gap-2 text-sm font-medium text-[var(--color-foreground)]'
                    >
                        <User className='h-4 w-4 text-[var(--color-primary)]' />
                        Nom complet
                    </label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder='John Doe'
                        className={inputClasses}
                    />
                </div>

                <div>
                    <label
                        htmlFor='email'
                        className='mb-2 flex items-center gap-2 text-sm font-medium text-[var(--color-foreground)]'
                    >
                        <Mail className='h-4 w-4 text-[var(--color-primary)]' />
                        Email
                    </label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder='john@example.com'
                        className={inputClasses}
                    />
                </div>

                <div>
                    <label
                        htmlFor='subject'
                        className='mb-2 flex items-center gap-2 text-sm font-medium text-[var(--color-foreground)]'
                    >
                        <Briefcase className='h-4 w-4 text-[var(--color-primary)]' />
                        Sujet
                    </label>
                    <select
                        id='subject'
                        name='subject'
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className={inputClasses}
                    >
                        <option value=''>Sélectionnez un sujet</option>
                        <option value='Projet Web'>Projet Web</option>
                        <option value='Application Mobile'>Application Mobile</option>
                        <option value='Conseil Technique'>Conseil Technique</option>
                        <option value='Collaboration'>Collaboration</option>
                        <option value='Autre'>Autre</option>
                    </select>
                </div>

                <div>
                    <label
                        htmlFor='message'
                        className='mb-2 flex items-center gap-2 text-sm font-medium text-[var(--color-foreground)]'
                    >
                        <MessageSquare className='h-4 w-4 text-[var(--color-primary)]' />
                        Message
                    </label>
                    <textarea
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder='Décrivez votre projet ou votre demande...'
                        className={`${inputClasses} resize-none`}
                    />
                </div>

                <button
                    type='submit'
                    disabled={status === 'loading'}
                    className='group relative flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[var(--color-primary)] px-8 font-medium text-white transition-all hover:bg-[var(--color-primary)]/90 hover:shadow-lg hover:shadow-[var(--color-primary)]/25 disabled:opacity-50'
                >
                    <span className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700' />
                    {status === 'loading' ? (
                        <>
                            <Loader2 className='h-5 w-5 animate-spin' />
                            Envoi en cours...
                        </>
                    ) : (
                        <>
                            <Send className='h-5 w-5' />
                            Envoyer le message
                        </>
                    )}
                </button>

                {status === 'success' && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className='flex items-center gap-2 rounded-xl bg-green-500/10 px-4 py-3 text-green-400'
                    >
                        <CheckCircle className='h-5 w-5' />
                        <span className='text-sm'>
                            Votre client mail s'est ouvert. Envoyez le message pour me contacter !
                        </span>
                    </motion.div>
                )}

                {status === 'error' && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className='flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-red-400'
                    >
                        <AlertCircle className='h-5 w-5' />
                        <span className='text-sm'>
                            Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.
                        </span>
                    </motion.div>
                )}
            </form>
        </SpotlightCard>
    );
}
