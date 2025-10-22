interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  fullScreen?: boolean
}

export default function Loading({ size = 'md', fullScreen = false }: LoadingProps) {
  const sizeStyles = {
    sm: 'h-6 w-6 border-2',
    md: 'h-12 w-12 border-2',
    lg: 'h-16 w-16 border-4',
  }
  
  const spinner = (
    <div className={`animate-spin rounded-full ${sizeStyles[size]} border-blue-500 border-t-transparent`} />
  )
  
  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
        {spinner}
      </div>
    )
  }
  
  return (
    <div className="flex items-center justify-center py-8">
      {spinner}
    </div>
  )
}

