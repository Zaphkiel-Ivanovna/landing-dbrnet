"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../../lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      setScrolled(current > 0.02);
    }
  });

  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className={cn(
        "fixed inset-x-0 top-0 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border px-8 py-4 transition-all duration-300",
        scrolled
          ? "border-[var(--color-border)]/50 bg-[var(--color-background)]/80 shadow-lg shadow-black/10 backdrop-blur-lg"
          : "border-transparent bg-transparent shadow-none",
        className
      )}
      style={{
        top: "1.5rem",
      }}
    >
      <a
        href="/"
        className="mr-4 flex items-center transition-opacity hover:opacity-80"
        aria-label="Accueil"
      >
        <img
          src="/images/logo.svg"
          alt="DBRNET Logo"
          className="h-8 w-auto"
        />
      </a>
      {navItems.map((navItem, idx) => (
        <a
          key={`link-${idx}`}
          href={navItem.link}
          className={cn(
            "relative flex items-center space-x-1 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
          )}
        >
          <span className="hidden sm:block">{navItem.icon}</span>
          <span>{navItem.name}</span>
        </a>
      ))}
      <a
        href="/contact"
        className="relative rounded-full border border-[var(--color-primary)]/50 bg-[var(--color-primary)]/10 px-4 py-2 text-sm font-medium text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary)]/20 hover:shadow-lg hover:shadow-[var(--color-primary)]/20"
      >
        Contact
      </a>
    </motion.nav>
  );
};
