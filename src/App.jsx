import Dashboard from './components/Dashboard'
import Logs from './components/Logs'

const App = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '1rem' }}>
      <h1>EcoTrack</h1>
      <Dashboard />
      <Logs />
    </div>
  )
}

export default App
