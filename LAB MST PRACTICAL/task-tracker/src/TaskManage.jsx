import { useState } from "react";
import useForm from "./useForm";

function TaskManage() {

  const [tasks, setTasks] = useState([]);

  const { values, ch, reset } = useForm({
    title: "",
    priority: "Low"
  });

  const sb = (e) => {
    e.preventDefault();

    setTasks([...tasks, values]);

    reset();
  };

  return (
    <div>

      <h2>Task Manage</h2>

      <form onSubmit={sb}>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={values.title}
          onChange={ch}
        />

        <select
          name="priority"
          value={values.priority}
          onChange={ch}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button type="submit">Add Task</button>
      </form>

      <h3>Tasks</h3>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.title} | {task.priority}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default TaskManage;