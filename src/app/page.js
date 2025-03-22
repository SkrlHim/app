"use client"

import { useState, useEffect } from 'react'
import { getStats, incrementAndLog } from './counter'

export default function Home() {
  const [stats, setStats] = useState({
    count: 0,
    recentAccess: []
  })

  useEffect(() => {
    async function fetchStats() {
      const data = await getStats()
      setStats(data)
    }
    fetchStats()
  }, [])

  const handleIncrement = async () => {
    const data = await incrementAndLog()
    setStats(data)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Health & Wellness App</h1>
        <p className="mb-4">Track calories, get workout recommendations, and follow diet plans</p>
        <div className="mb-8">
          <button 
            onClick={handleIncrement}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Get Started
          </button>
        </div>
      </div>
    </main>
  )
}
