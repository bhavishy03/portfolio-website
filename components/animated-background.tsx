'use client'

import { motion } from 'framer-motion'

export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Soft moving gradient blobs */}
      <motion.div
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl"
        style={{ background:
          'radial-gradient(closest-side, rgba(0,123,255,0.25), rgba(0,123,255,0))' }}
        animate={{ x: [0, 40, -10, 0], y: [0, -20, 10, 0], scale: [1, 1.05, 0.98, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background:
          'radial-gradient(closest-side, rgba(0,160,255,0.18), rgba(0,160,255,0))' }}
        animate={{ x: [0, -30, 15, 0], y: [0, 25, -10, 0], scale: [1, 0.97, 1.04, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#eaeaea_1px,transparent_1px)] [background-size:18px_18px] opacity-30" />
    </div>
  )
}
