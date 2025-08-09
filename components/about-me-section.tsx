'use client';

import Image from "next/image";
import { motion } from "framer-motion";

interface AboutMeSectionProps {
  data: {
    about: string;
  };
}

export function AboutMeSection({ data }: AboutMeSectionProps) {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.3 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.3 } },
  };

  return (
    <motion.section
      id="about"
      className="py-16 md:py-24 scroll-mt-28 md:scroll-mt-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-light-text"
        variants={itemVariants}
      >
        About Me
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <motion.div
  className="flex-1 flex justify-center md:justify-start"
  variants={imageVariants}
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <Image
   src="/placeholder.png?height=300&width=300"
    width={300}
    height={300}
    alt="Illustration of a person"
    className="rounded-lg object-cover shadow-lg shadow-light-accent/20 max-w-full h-auto"
  />
</motion.div>

        <motion.div
          className="flex-1 text-light-muted text-lg leading-relaxed space-y-4"
          variants={textVariants}
        >
          {data.about.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

// Define itemVariants for h2 in AboutMeSection
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
