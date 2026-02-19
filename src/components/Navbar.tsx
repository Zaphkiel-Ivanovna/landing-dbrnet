'use client';
import { Briefcase, Code2, FolderGit2, User } from 'lucide-react';
import { FloatingNav } from './ui/floating-navbar';

const navItems = [
  {
    name: 'A propos',
    link: '/#about',
    icon: <User className="h-4 w-4" />,
  },
  {
    name: 'Compétences',
    link: '/#skills',
    icon: <Code2 className="h-4 w-4" />,
  },
  {
    name: 'Parcours',
    link: '/#experience',
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    name: 'Projets',
    link: '/#projects',
    icon: <FolderGit2 className="h-4 w-4" />,
  },
];

export default function Navbar() {
  return <FloatingNav navItems={navItems} />;
}
