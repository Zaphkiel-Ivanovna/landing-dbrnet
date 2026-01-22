"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { Code2, Briefcase, FolderGit2, Mail, User } from "lucide-react";

const navItems = [
  {
    name: "A propos",
    link: "/#about",
    icon: <User className="h-4 w-4" />,
  },
  {
    name: "Compétences",
    link: "/#skills",
    icon: <Code2 className="h-4 w-4" />,
  },
  {
    name: "Parcours",
    link: "/#experience",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    name: "Projets",
    link: "/#projects",
    icon: <FolderGit2 className="h-4 w-4" />,
  },
];

export default function Navbar() {
  return <FloatingNav navItems={navItems} />;
}
