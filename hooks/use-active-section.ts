'use client'

import { useEffect, useState } from 'react'

export function useActiveSection(ids: string[], rootMargin = '-30% 0px -60% 0px') {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '')
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id')
          if (entry.isIntersecting && id) setActiveId(id)
        })
      },
      { root: null, rootMargin, threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids, rootMargin])

  return activeId
}
