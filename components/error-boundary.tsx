'use client'

import * as React from 'react'

type Props = {
  fallback: React.ReactNode
  children: React.ReactNode
}

type State = { hasError: boolean }

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error: unknown, info: unknown) {
    // Optional: surface to console for debugging
    console.error('ErrorBoundary caught:', error, info)
  }
  render() {
    if (this.state.hasError) return this.props.fallback
    return this.props.children
  }
}
