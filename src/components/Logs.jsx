import { logs } from '../data/logs'

const Logs = () => {
  const highimpactlogs = logs.filter((log) => log.carbon > 4)
  const lowimpactlogs = logs.filter((log) => log.carbon < 4)

  return (
    <>
      <div>
        <h2 style={{ background: 'red', color: 'white', textAlign: 'center' }}>
          High Carbon Activities (&gt; 4)
        </h2>
        <ul>
          {highimpactlogs.map((log) => (
            <li key={log.id}>
              {log.activity} = {log.carbon} kg CO2
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 style={{ background: 'green', color: 'white', textAlign: 'center' }}>
          Low Carbon Activities (&lt; 4)
        </h2>
        <ul>
          {lowimpactlogs.map((log) => (
            <li key={log.id} style={{ color: 'green', fontWeight: 'bold' }}>
              {log.activity} = {log.carbon} kg CO2
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Logs
