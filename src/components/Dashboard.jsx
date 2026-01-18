import { logs } from '../data/logs'

const Dashboard = () => {
  const totalcarbon = logs.reduce((total, log) => total + log.carbon, 0)

  return (
    <div className="dashboard">
      <header>
        <h2>Dashboard</h2>
        <p>
          Total Carbon Footprint: <strong>{totalcarbon} kg CO2</strong>
        </p>
      </header>

      <ul>
        {logs.map((log) => (
          <li key={log.id}>
            {log.activity} - {log.carbon} kg CO2
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dashboard
