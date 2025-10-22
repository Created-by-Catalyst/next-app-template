'use client'

import { useState, useEffect } from 'react'

interface ApiResponse {
  message: string
  timestamp: string
}

export default function Home() {
  const [apiData, setApiData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/hello')
      const data = await response.json()
      setApiData(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* 移动端优化：固定头部 */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Next App Template</h1>
            <button className="touch-target p-2 rounded-lg hover:bg-gray-800 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* 主内容区域 */}
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-12">
          <h2 className="text-4xl font-bold mb-4">Welcome to Next App Template</h2>
          <p className="text-gray-400 text-lg mb-4">Next.js + React + Tailwind CSS Mobile Template</p>
          <a
            href="/demo"
            className="inline-block text-blue-400 hover:text-blue-300 underline mb-8"
          >
            View Component Demo →
          </a>
        </section>

        {/* API Call Example */}
        <section className="max-w-md mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4">API Call Example</h3>

            {loading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              </div>
            ) : apiData ? (
              <div className="space-y-3">
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-1">Message</p>
                  <p className="text-white">{apiData.message}</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-1">Timestamp</p>
                  <p className="text-white font-mono text-sm">{apiData.timestamp}</p>
                </div>
              </div>
            ) : null}

            <button
              onClick={fetchData}
              disabled={loading}
              className="w-full mt-6 touch-target bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 active:scale-95"
            >
              {loading ? 'Loading...' : 'Refresh Data'}
            </button>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-2xl mx-auto">
          {[
            { icon: '🚀', title: 'Fast Loading', desc: 'Optimized Performance' },
            { icon: '📱', title: 'Mobile First', desc: 'Responsive Design' },
            { icon: '🔌', title: 'API Support', desc: 'Complete Backend' },
            { icon: '☁️', title: 'Vercel Deploy', desc: 'One-Click Deploy' },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-200 active:scale-95"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </section>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-gray-800 pb-safe-bottom">
        <div className="container mx-auto px-4">
          <div className="flex justify-around py-3">
            {[
              { icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', label: 'Home' },
              { icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', label: 'Search' },
              { icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', label: 'Favorites' },
              { icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', label: 'Profile' },
            ].map((item, index) => (
              <button
                key={index}
                className="flex flex-col items-center touch-target p-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                <span className="text-xs">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </main>
  )
}

