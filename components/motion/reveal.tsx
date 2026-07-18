"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type RevealDirection = "up" | "down" | "left" | "right" | "scale";

const directionOffsets: Record<Exclude<RevealDirection, "scale">, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
};

function getRevealVariants(
  reducedMotion: boolean,
  direction: RevealDirection,
  distance: number,
  blur: number,
) {
  if (reducedMotion) {
    return {
      hidden: { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
      visible: { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
    };
  }

  if (direction === "scale") {
    return {
      hidden: { opacity: 0, scale: 0.94, filter: `blur(${blur}px)` },
      visible: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      },
    };
  }

  const offset = directionOffsets[direction];

  return {
    hidden: {
      opacity: 0,
      x: offset.x === 0 ? 0 : (offset.x / 28) * distance,
      y: offset.y === 0 ? 0 : (offset.y / 28) * distance,
      filter: `blur(${blur}px)`,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
    },
  };
}

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  amount?: number;
  once?: boolean;
  direction?: RevealDirection;
  distance?: number;
  blur?: number;
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.8,
  amount = 0.2,
  once = true,
  direction = "up",
  distance = 28,
  blur = 10,
}: RevealProps) {
  const reducedMotion = useReducedMotion();
  const variants = React.useMemo(
    () => getRevealVariants(Boolean(reducedMotion), direction, distance, blur),
    [blur, direction, distance, reducedMotion],
  );

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={
        reducedMotion
          ? { duration: 0 }
          : { type: "spring", bounce: 0, duration, delay }
      }
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  amount?: number;
  once?: boolean;
}

export function StaggerGroup({
  children,
  className,
  delayChildren = 0,
  staggerChildren = 0.1,
  amount = 0.12,
  once = true,
}: StaggerProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: reducedMotion
            ? { staggerChildren: 0, delayChildren: 0 }
            : { staggerChildren, delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  direction?: RevealDirection;
  distance?: number;
  blur?: number;
}

export function StaggerItem({
  children,
  className,
  direction = "up",
  distance = 24,
  blur = 8,
}: StaggerItemProps) {
  const reducedMotion = useReducedMotion();
  const variants = React.useMemo(
    () => getRevealVariants(Boolean(reducedMotion), direction, distance, blur),
    [blur, direction, distance, reducedMotion],
  );

  return (
    <motion.div
      className={className}
      variants={variants}
      transition={
        reducedMotion
          ? { duration: 0 }
          : { type: "spring", bounce: 0, duration: 0.55 }
      }
    >
      {children}
    </motion.div>
  );
}

interface WordRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p" | "span";
  amount?: number;
}

export function WordReveal({
  text,
  className,
  as = "h1",
  amount = 0.35,
}: WordRevealProps) {
  const reducedMotion = useReducedMotion();
  const words = React.useMemo(() => text.split(" "), [text]);
  const sharedProps = {
    className: cn("text-balance", className),
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, amount },
    variants: {
      hidden: {},
      visible: {
        transition: reducedMotion
          ? { staggerChildren: 0, delayChildren: 0 }
          : { staggerChildren: 0.06, delayChildren: 0.08 },
      },
    },
  };

  const content = words.map((word, index) => (
    <span
      key={`${word}-${index}`}
      className="inline-block overflow-hidden pr-[0.22em] pt-[0.08em] pb-[0.12em]"
    >
      <motion.span
        className="inline-block will-change-transform"
        variants={
          reducedMotion
            ? {
                hidden: { opacity: 1, y: 0, filter: "blur(0px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }
            : {
                hidden: { opacity: 0, y: "0.9em", filter: "blur(8px)" },
                visible: { opacity: 1, y: "0em", filter: "blur(0px)" },
              }
        }
        transition={
          reducedMotion
            ? { duration: 0 }
            : { type: "spring", bounce: 0, duration: 0.7 }
        }
      >
        {word}
      </motion.span>
    </span>
  ));

  switch (as) {
    case "h2":
      return <motion.h2 {...sharedProps}>{content}</motion.h2>;
    case "p":
      return <motion.p {...sharedProps}>{content}</motion.p>;
    case "span":
      return <motion.span {...sharedProps}>{content}</motion.span>;
    default:
      return <motion.h1 {...sharedProps}>{content}</motion.h1>;
  }
}
