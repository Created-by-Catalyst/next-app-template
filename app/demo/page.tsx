'use client'

import { useState } from 'react'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Input from '@/components/Input'
import Loading from '@/components/Loading'

export default function DemoPage() {
  const [loading, setLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleLoadingDemo = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pb-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Component Demo</h1>

        {/* Button Component Demo */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Button Component</h2>
          <Card>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400 mb-2">Primary Button</p>
                <Button variant="primary">Primary Button</Button>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-2">Secondary Button</p>
                <Button variant="secondary">Secondary Button</Button>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-2">Outline Button</p>
                <Button variant="outline">Outline Button</Button>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-2">Different Sizes</p>
                <div className="flex gap-2 flex-wrap">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-2">Full Width Button</p>
                <Button fullWidth>Full Width Button</Button>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-2">Disabled State</p>
                <Button disabled>Disabled Button</Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Card Component Demo */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Card Component</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card>
              <h3 className="text-lg font-semibold mb-2">Basic Card</h3>
              <p className="text-gray-400">This is a basic card component</p>
            </Card>
            <Card hoverable>
              <h3 className="text-lg font-semibold mb-2">Hoverable Card</h3>
              <p className="text-gray-400">Hover effect on mouse over</p>
            </Card>
            <Card onClick={() => alert('Card clicked!')}>
              <h3 className="text-lg font-semibold mb-2">Clickable Card</h3>
              <p className="text-gray-400">Try clicking me</p>
            </Card>
            <Card hoverable onClick={() => alert('Hoverable and clickable!')}>
              <h3 className="text-lg font-semibold mb-2">Combined Effects</h3>
              <p className="text-gray-400">Hover + Click</p>
            </Card>
          </div>
        </section>

        {/* Input Component Demo */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Input Component</h2>
          <Card>
            <div className="space-y-4">
              <Input
                label="Username"
                placeholder="Enter username"
                fullWidth
              />
              <Input
                label="Email"
                type="email"
                placeholder="Enter email"
                fullWidth
              />
              <Input
                label="Password"
                type="password"
                placeholder="Enter password"
                fullWidth
              />
              <Input
                label="With Error Message"
                placeholder="Enter content"
                error="This is an error message"
                fullWidth
              />
              <Input
                label="Controlled Input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter content"
                fullWidth
              />
              {inputValue && (
                <p className="text-sm text-gray-400">
                  Current input: {inputValue}
                </p>
              )}
            </div>
          </Card>
        </section>

        {/* Loading Component Demo */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Loading Component</h2>
          <Card>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-400 mb-2">Different Sizes</p>
                <div className="flex gap-8 items-center">
                  <div>
                    <p className="text-xs text-gray-500 mb-2">Small</p>
                    <Loading size="sm" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-2">Medium</p>
                    <Loading size="md" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-2">Large</p>
                    <Loading size="lg" />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-2">Full Screen Loading</p>
                <Button onClick={handleLoadingDemo}>
                  Show Full Screen Loading (2s)
                </Button>
                {loading && <Loading fullScreen />}
              </div>
            </div>
          </Card>
        </section>

        {/* Color System Demo */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Color System</h2>
          <Card>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="h-20 bg-blue-500 rounded-lg mb-2"></div>
                <p className="text-sm">Blue 500</p>
              </div>
              <div>
                <div className="h-20 bg-purple-600 rounded-lg mb-2"></div>
                <p className="text-sm">Purple 600</p>
              </div>
              <div>
                <div className="h-20 bg-gray-800 rounded-lg mb-2"></div>
                <p className="text-sm">Gray 800</p>
              </div>
              <div>
                <div className="h-20 bg-gray-900 rounded-lg mb-2"></div>
                <p className="text-sm">Gray 900</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Spacing System Demo */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Spacing System</h2>
          <Card>
            <div className="space-y-4">
              {[2, 4, 6, 8, 12, 16].map((space) => (
                <div key={space}>
                  <p className="text-sm text-gray-400 mb-2">Spacing {space} (p-{space})</p>
                  <div className={`bg-blue-500/20 border border-blue-500 p-${space}`}>
                    <div className="bg-blue-500 h-8"></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Back to Home */}
        <div className="text-center">
          <Button onClick={() => window.location.href = '/'}>
            Back to Home
          </Button>
        </div>
      </div>
    </main>
  )
}

