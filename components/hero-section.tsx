'use client'

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { GitlabIcon as GitHubIcon, LinkedinIcon, MailIcon, TwitterIcon, Sparkles } from 'lucide-react';
// JSON ko src ke andar /lottie folder me rakho (public se import mat karo)
import animationData from '@/lottie/data-extraction-animation.json';

// Lottie ko client-only banaya (no SSR) to hydration safe
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface HeroSectionProps {
  data: {
    name: string;
    title: string;
    location: string;
    objective?: string;
  };
}

export function HeroSection({ data }: HeroSectionProps) {
  // Social icons ko client-only render karne ke liye (hydration mismatch avoid)
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 }
  };
  const icon = {
    hover: { y: -6, scale: 1.12 },
    initial: { y: 0, scale: 1 }
  };

  return (
    <motion.section
      id="hero"
      className="relative flex flex-col-reverse items-center gap-8 pt-8 pb-12 md:flex-row md:pt-10 md:pb-14 lg:pt-12 lg:pb-16"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* LEFT SIDE: Text Content */}
      <div className="flex-1 text-center md:text-left">
        <motion.div
          variants={item}
          className="mb-3 inline-flex items-center gap-2 rounded-full border border-light-border bg-white px-3 py-1 text-xs text-light-muted shadow-sm"
        >
          <Sparkles className="h-4 w-4 text-light-accent" />
          Data-driven insights that move business forward
        </motion.div>

        <motion.h1
          variants={item}
          className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl"
        >
          Hello, I&apos;m <span className="text-light-accent">{data.name}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-2 text-lg text-light-muted md:text-xl"
        >
          {data.title} • Based in {data.location}
        </motion.p>

        {data.objective && (
          <motion.div variants={item} className="mt-4">
            <div className="relative mx-auto max-w-2xl md:mx-0">
              <div className="relative rounded-xl border border-light-border bg-white/70 p-4 md:p-5 shadow-sm backdrop-blur">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1.5 rounded-l-xl bg-gradient-to-b from-light-accent/90 to-light-accent/40" />
                <p className="text-base md:text-lg leading-relaxed text-light-muted">
                  {data.objective}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Social links — client-only to avoid hydration mismatch from motion transforms */}
        {mounted && (
          <motion.div
            variants={item}
            className="mt-6 flex justify-center gap-4 md:justify-start"
          >
            {[
              { Icon: GitHubIcon, href: '#', label: 'GitHub' },
              { Icon: TwitterIcon, href: '#', label: 'Twitter' },
              { Icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
              { Icon: MailIcon, href: '#', label: 'Email' }
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                className="rounded-xl border border-light-border bg-white p-3 text-light-muted shadow-sm transition-colors hover:text-light-accent"
                variants={icon}
                whileHover="hover"
                initial="initial"
              >
                <Icon className="h-6 w-6" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>

      {/* RIGHT SIDE: Lottie Animation (client-only) */}
      <motion.div variants={item} className="flex-1 w-full">
        <Lottie
          animationData={animationData}
          loop
          autoplay
          className="h-[340px] md:h-[400px] lg:h-[460px]"
        />
      </motion.div>
    </motion.section>
  );
}
