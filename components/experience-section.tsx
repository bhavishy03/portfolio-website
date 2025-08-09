'use client';

import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { BriefcaseIcon, GraduationCapIcon } from 'lucide-react';

interface ExperienceSectionProps {
  data: {
    experience: {
      title: string;
      company: string;
      duration: string;
      description: string[];
    }[];
    education: {
      degree: string;
      institution: string;
      duration: string;
    }[];
  };
}

export function ExperienceSection({ data }: ExperienceSectionProps) {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { type: "spring", stiffness: 300, damping: 15 } },
    hover: { scale: 1.5, boxShadow: "0 0 8px rgba(0, 123, 255, 0.5)", y: -2 }
  };

  return (
    <motion.section
      id="experience"
      className="py-16 md:py-24 scroll-mt-28 md:scroll-mt-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-light-text">My Experience</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-light-accent">
            <BriefcaseIcon className="h-7 w-7" /> Professional Experience
          </h3>
          <div className="space-y-8">
            {data.experience.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-8"
                variants={itemVariants}
                whileHover={{ x: 10 }} // Added hover movement for the entire entry
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="absolute left-0 top-0 h-full w-0.5 bg-light-border"></div>
                <motion.div
                  className="absolute left-0 top-0 h-3 w-3 rounded-full bg-light-accent -translate-x-1/2"
                  variants={dotVariants}
                  whileHover="hover"
                ></motion.div>
                <h4 className="text-xl font-semibold text-light-text">{exp.title}</h4>
                <p className="text-light-muted">{exp.company}</p>
                <p className="text-gray-500 text-sm mb-2">{exp.duration}</p>
                <ul className="list-disc list-inside space-y-1 text-light-muted">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-light-accent">
            <GraduationCapIcon className="h-7 w-7" /> Education
          </h3>
          <div className="space-y-8">
            {data.education.map((edu, index) => (
              <motion.div
                key={index}
                className="relative pl-8"
                variants={itemVariants}
                whileHover={{ x: 10 }} // Added hover movement for the entire entry
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="absolute left-0 top-0 h-full w-0.5 bg-light-border"></div>
                <motion.div
                  className="absolute left-0 top-0 h-3 w-3 rounded-full bg-light-accent -translate-x-1/2"
                  variants={dotVariants}
                  whileHover="hover"
                ></motion.div>
                <h4 className="text-xl font-semibold text-light-text">{edu.degree}</h4>
                <p className="text-light-muted">{edu.institution}</p>
                {edu.duration && <p className="text-gray-500 text-sm">{edu.duration}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
