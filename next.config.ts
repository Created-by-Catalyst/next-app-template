import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // 启用严格模式
  reactStrictMode: true,
  
  // 移动端优化：启用图片优化
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 375, 414, 768, 1024],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  
  // 压缩优化
  compress: true,
  
  // PWA 支持的头部配置
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
    ]
  },
}

export default nextConfig

