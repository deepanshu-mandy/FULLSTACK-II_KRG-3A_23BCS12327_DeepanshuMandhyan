import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  return (
    <div class="flex justify-center items-center h-screen">
      <div class="bg-white p-10 shadow-xl rounded-2xl w-80">
        <h1 class="text-2xl font-bold mb-4 text-center">EcoTrack Login</h1>
        <button 
          class="w-full bg-primary text-white py-2 rounded-lg"
          onClick={()=>{localStorage.setItem('token','abc'); navigate('/dashboard')}}
        >
          Login
        </button>
      </div>
    </div>
  )
}