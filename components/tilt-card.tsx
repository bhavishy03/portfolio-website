'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

export function TiltCard({
  children,
  className,
  maxRotate = 8,
}: {
  children: ReactNode
  className?: string
  maxRotate?: number
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-50, 50], [maxRotate, -maxRotate])
  const rotateY = useTransform(x, [-50, 50], [-maxRotate, maxRotate])

  return (
    <motion.div
      className={cn('relative rounded-xl will-change-transform', className)}
      style={{ perspective: 800 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        x.set(e.clientX - (rect.left + rect.width / 2))
        y.set(e.clientY - (rect.top + rect.height / 2))
      }}
      onMouseLeave={() => {
        x.set(0); y.set(0)
      }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.6 }}
      >
        {children}
      </motion.div>
      {/* Glow on hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(200px_circle_at_var(--x)_var(--y),rgba(0,123,255,0.16),transparent_60%)] opacity-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  )
}
