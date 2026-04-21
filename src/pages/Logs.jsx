import { logs } from "../data/logs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogs } from "../store/logsSlice";

const Logs = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.logs);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchLogs());
    }
  }, [status, dispatch]);
  if (status === "failed") {
    return <div>Loading logs...</div>;
  }

  const highImpactLogs = data.filter((log) => log.carbon > 4);
  const lowImpactLogs = data.filter((log) => log.carbon <= 4);
  return (
    <div>
      <h2>High Carbon Activities ({">"} 4Kg)</h2>
      <ul>
        {highImpactLogs.map((log) => (
          <li style={{ color: "rgb(224, 31, 31)" }} key={log.id}>
            {log.activity} = {log.carbon} kg CO₂
          </li>
        ))}
      </ul>
      <h2>Low Carbon Activities (≤ 4Kg)</h2>
      <ul>
        {lowImpactLogs.map((log) => (
          <li style={{ color: "#3a803cff" }} key={log.id}>
            {log.activity} = {log.carbon} kg CO₂
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Logs;
