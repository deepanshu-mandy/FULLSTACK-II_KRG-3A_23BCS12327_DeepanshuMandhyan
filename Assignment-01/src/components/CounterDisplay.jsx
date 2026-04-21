import React from 'react'

function CounterDisplay({ count, goal }) {
  return (
    <h2 class="text-xl font-bold text-center py-2">{count} / {goal} glasses completed</h2>
  )
}

export default React.memo(CounterDisplay)