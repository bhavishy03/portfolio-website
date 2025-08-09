'use client';

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="bg-light-card py-8 text-center text-light-muted text-sm border-t border-light-border"
    >
      <div className="container mx-auto px-4">
        &copy; {new Date().getFullYear()} Shubhan Chourasiya. All rights reserved.
      </div>
    </motion.footer>
  );
}
