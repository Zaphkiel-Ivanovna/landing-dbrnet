"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

interface TimelineEntry {
  title: string;
  date: string;
  company: string;
  location: string;
  description: string[];
  technologies?: string[];
  logo?: string;
}

export const Timeline = ({
  data,
  className,
}: {
  data: TimelineEntry[];
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className={cn("w-full font-sans", className)} ref={containerRef}>
      <div ref={ref} className="relative mx-auto max-w-4xl pb-8">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-8 md:gap-10 md:pt-16">
            <div className="sticky top-40 z-40 hidden flex-col items-center self-start md:flex">
              <div className="absolute left-3 h-10 w-10 rounded-full bg-[var(--color-background)] flex items-center justify-center">
                <div className="h-4 w-4 rounded-full border border-[var(--color-border)] bg-[var(--color-primary)]/20" />
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4">
              <div className="mb-4 flex flex-col gap-1 md:hidden">
                <div className="absolute left-3 top-0 h-10 w-10 rounded-full bg-[var(--color-background)] flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full border border-[var(--color-border)] bg-[var(--color-primary)]/20" />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6"
              >
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
                    {item.date}
                  </span>
                  <span className="text-xs text-[var(--color-muted)]">{item.location}</span>
                </div>

                <h3 className="text-xl font-bold text-[var(--color-foreground)]">
                  {item.title}
                </h3>
                <div className="mt-1 flex items-center gap-2">
                  {item.logo && (
                    <img
                      src={item.logo}
                      alt={`${item.company} logo`}
                      className="h-6 w-6 rounded object-contain"
                    />
                  )}
                  <p className="text-base text-[var(--color-primary)]">{item.company}</p>
                </div>

                <ul className="mt-4 space-y-2">
                  {item.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-muted)]">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-primary)]" />
                      {desc}
                    </li>
                  ))}
                </ul>

                {item.technologies && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-[var(--color-border)] bg-[var(--color-card-hover)] px-2 py-1 text-xs text-[var(--color-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent md:left-8"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-accent)] to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
