"use client";
import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "../../lib/utils";

export function MovingBorder({
  children,
  duration = 2000,
  rx = "9999px",
  ry = "9999px",
  className,
  containerClassName,
  borderClassName,
  as: Component = "button",
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  as?: React.ElementType;
  [key: string]: unknown;
}) {
  return (
    <Component
      className={cn(
        "relative h-12 w-auto overflow-hidden rounded-full bg-transparent p-[2px] text-sm",
        containerClassName
      )}
      {...otherProps}
    >
      <div className="absolute inset-0 rounded-full">
        <MovingBorderGradient duration={duration} rx={rx} ry={ry}>
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8] bg-[radial-gradient(#3b82f6_40%,transparent_60%)]",
              borderClassName
            )}
          />
        </MovingBorderGradient>
      </div>

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-6 text-sm font-medium antialiased backdrop-blur-xl",
          className
        )}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorderGradient = ({
  children,
  duration = 2000,
  rx,
  ry,
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
}) => {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x ?? 0
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y ?? 0
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
