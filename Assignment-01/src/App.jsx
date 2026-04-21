import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import WaterTracker from './pages/WaterTracker'
import Navbar from './components/Navbar'

function ProtectedRoute({ children }) {
  const loggedIn = localStorage.getItem('token')
  return loggedIn ? children : <Navigate to="/login" />
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
        <Route path="/dashboard/water" element={<ProtectedRoute><WaterTracker/></ProtectedRoute>} />
      </Routes>
    </>
  )
}