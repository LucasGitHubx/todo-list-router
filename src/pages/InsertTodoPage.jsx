import { useState, useContext } from "react";
import { Context } from "../App";
import "./insertTodoPage.css";

export default function InsertTodoPage() {
  const [data, setData] = useContext(Context);
  const [task, setTask] = useState("");
  const [warning, setWarning] = useState(false);

  function handleChange(e) {
    setTask(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (task == "") {
      setWarning(true);
    } else {
      setData([...data, { task: task, id: crypto.randomUUID() }]);
      setWarning(false);
      setTask("");
      setModal(true);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className={warning && "active"} htmlFor="task">
          The task cannot be empty
        </label>
        <input
          type="text"
          placeholder="Insert task"
          id="task"
          value={task}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
}
