import React, { useState, useEffect, useCallback } from 'react'
import CounterDisplay from '../components/CounterDisplay'

export default function WaterTracker() {
  const [count, setCount] = useState(() => Number(localStorage.getItem('count') || 0))
  const [goal, setGoal] = useState(8)
  const [tip, setTip] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    localStorage.setItem('count', count)
  }, [count])

  const fetchTip = useCallback(async () => {
    try {
      setLoading(true)
      setError(false)
      let res = await fetch('https://api.adviceslip.com/advice')
      let data = await res.json()
      setTip(data.slip.advice)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <div class="p-10 flex justify-center">
      <div class="bg-white p-8 rounded-3xl shadow-xl w-[400px] backdrop-blur-glass bg-glass">
        <h1 class="text-3xl font-bold text-center mb-4">Water Tracker</h1>

        <CounterDisplay count={count} goal={goal} />

        <div class="flex justify-center gap-4 my-4">
          <button class="bg-primary text-white px-4 py-2 rounded-lg" onClick={() => setCount(c => c + 1)}>+</button>
          <button class="bg-gray-400 text-white px-4 py-2 rounded-lg" onClick={() => setCount(c => Math.max(0, c - 1))}>-</button>
          <button class="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={() => setCount(0)}>Reset</button>
        </div>

        <div class="my-3">
          <label class="font-semibold">Daily Goal:</label>
          <input 
            type="number" 
            class="border p-2 rounded-lg w-full mt-1"
            value={goal} 
            onChange={e => setGoal(Number(e.target.value))} 
          />
        </div>

        {count >= goal && <p class="text-green-600 font-bold mt-2 text-center">Goal Reached!</p>}

        <button class="w-full bg-primary text-white py-2 rounded-lg mt-4" onClick={fetchTip}>Get Health Tip</button>

        {loading && <p class="text-center mt-2 text-gray-500">Loading...</p>}
        {error && <p class="text-center mt-2 text-red-500">Error fetching tip</p>}
        {tip && <p class="text-center mt-2 text-black">Today's Health Tip: {tip}</p>}
      </div>
    </div>
  )
}