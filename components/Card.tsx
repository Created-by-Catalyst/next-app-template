import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  hoverable?: boolean
}

export default function Card({
  children,
  className = '',
  onClick,
  hoverable = false,
}: CardProps) {
  const baseStyles = 'bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700'
  const hoverStyles = hoverable ? 'hover:border-gray-600 transition-all duration-200 active:scale-95 cursor-pointer' : ''
  const clickableStyles = onClick ? 'cursor-pointer' : ''
  
  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${clickableStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

