import type { Metadata, Viewport } from 'next'
import './globals.css'

// 移动端优化：Viewport 配置
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: '#000000',
}

// 移动端优化：Metadata 配置
export const metadata: Metadata = {
  title: 'Next App Template',
  description: 'Next.js + Tailwind CSS + Mobile template project',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Next App Template',
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <head>
        {/* 移动端优化：DNS 预取 */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        {/* 移动端优化：预连接 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

