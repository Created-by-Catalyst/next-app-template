'use client'

import { ReactNode } from 'react'

interface NavItem {
  icon: ReactNode
  label: string
  onClick?: () => void
  active?: boolean
}

interface BottomNavProps {
  items: NavItem[]
}

export default function BottomNav({ items }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-gray-800 pb-safe-bottom z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-around py-3">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className={`
                flex flex-col items-center
                touch-target p-2 rounded-lg
                transition-colors
                ${item.active ? 'text-blue-500' : 'text-gray-400 hover:text-white'}
              `}
            >
              <div className="w-6 h-6 mb-1">{item.icon}</div>
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

