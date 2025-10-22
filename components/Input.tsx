import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  fullWidth?: boolean
}

export default function Input({
  label,
  error,
  fullWidth = false,
  className = '',
  ...props
}: InputProps) {
  const widthStyle = fullWidth ? 'w-full' : ''
  
  return (
    <div className={`${widthStyle}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {label}
        </label>
      )}
      <input
        className={`
          touch-target
          bg-gray-900/50
          border border-gray-700
          rounded-xl
          px-4 py-3
          text-white
          placeholder-gray-500
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-transparent
          transition-all
          duration-200
          ${fullWidth ? 'w-full' : ''}
          ${error ? 'border-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}
    </div>
  )
}

