import React from 'react';
import { motion, Variants } from 'framer-motion';

interface RevealTextProps {
  text: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  className?: string;
  delay?: number;
}

const RevealText: React.FC<RevealTextProps> = ({ text, tag = 'p', className = '', delay = 0 }) => {
  const Tag = tag as any;

  // Split text into words
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * 0.1 },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Tag className={`overflow-hidden flex flex-wrap gap-x-[0.25em] ${className}`}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        custom={1}
        className="flex flex-wrap gap-x-[0.25em]"
      >
        {words.map((word, index) => (
          <motion.span variants={child} key={index} className="inline-block">
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
};

export default RevealText;