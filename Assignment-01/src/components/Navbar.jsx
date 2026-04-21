import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <nav class="flex gap-6 bg-white shadow p-4 px-6">
      <Link class="font-semibold hover:text-primary" to="/dashboard">Dashboard</Link>
      <Link class="font-semibold hover:text-primary" to="/dashboard/water">Water Tracker</Link>
      <button 
        class="ml-auto bg-primary text-white px-3 py-1 rounded-lg"
        onClick={()=>{localStorage.removeItem('token'); navigate('/login')}}
      >
        Logout
      </button>
    </nav>
  )
}