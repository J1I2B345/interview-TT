import { useEffect, useState } from "react";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";
import TaskCard from "./components/Card";

const BASE_URL = "http://localhost:3001/tasks";

function App() {
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const tasks = await axios.get(BASE_URL);
      setTasks(tasks.data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(BASE_URL, {
      title,
      completed,
    });

    const newTasks = response.data;
    setTasks([...tasks, newTasks]);
  };

  const onCompletedUpdated = async (event) => {
    const checked = event.target.checked;
    const editedTasks = await axios.put(`${BASE_URL}/${id}`, {
      title,
      completed: checked,
    });
    alert("tasks was successfully updated");
    // update state
  };

  const onDelete = async () => {
    const confirmation = confirm("do you really want to delete the task?");
    if (confirmation) {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      setTasks(response.data);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>testing</p>
        {tasks?.length ? (
          tasks.map((e) => (
            <TaskCard
              id={e.id}
              title={e.title}
              completed={e.completed}
              onCompletedUpdated={onCompletedUpdated}
              onDelete={onDelete}
            />
          ))
        ) : (
          <> no tasks </>
        )}

        {/* <Form /> */}
        <form onSubmit={handleSubmit}>
          <label>
            Title
            <input
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
                console.log(e.target.value);
              }}
              value={title}
            />
          </label>
          <label>
            completed
            <input
              type="checkbox"
              onChange={(e) => {
                setCompleted(e.target.checked);
              }}
            />
          </label>
          <button>save</button>
        </form>
       
      </header>
    </div>
  );
}

export default App;
