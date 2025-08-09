'use client';

import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';

interface ContactSectionProps {
  data: {
    contact: {
      mobile: string;
      email: string;
      location: string;
    };
    callToAction: string;
  };
}

export function ContactSection({ data }: ContactSectionProps) {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="contact"
      className="py-16 md:py-24 scroll-mt-28 md:scroll-mt-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-light-text">Contact Information</h2>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Left: Contact info */}
        <div className="space-y-6">
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <PhoneIcon className="h-7 w-7 text-light-accent" />
            <span className="text-lg text-light-text">{data.contact.mobile}</span>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <MailIcon className="h-7 w-7 text-light-accent" />
            <span className="text-lg text-light-text">{data.contact.email}</span>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <MapPinIcon className="h-7 w-7 text-light-accent" />
            <span className="text-lg text-light-text">{data.contact.location}</span>
          </motion.div>
        </div>

        {/* Right: CTA only */}
        <motion.div variants={itemVariants} className="flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4 text-light-text">Let&apos;s work together</h3>
          <p className="text-light-muted leading-relaxed mb-6">{data.callToAction}</p>
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 123, 255, 0.3)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button
              className="bg-light-accent text-white hover:bg-blue-700 transition-colors px-8 py-3 text-lg font-semibold"
              asChild
            >
              <a href={`mailto:${data.contact.email}`}>Let&apos;s Connect!</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
