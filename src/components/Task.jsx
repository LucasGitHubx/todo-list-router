import { useState, useContext } from "react";
import { Context } from "../App";
import "./task.css";

export default function Task({ task }) {
  const [done, setDone] = useState(false);
  const [data, setData] = useContext(Context);

  function handleClik() {
    const temp = data.filter((item) => item.id != task.id);
    setData(temp);
  }

  return (
    <article className="task">
      <p className={done && "done"}>{task.task}</p>
      <div className="buttons">
        <button className="delete" onClick={handleClik}>
          delete
        </button>
        <button className="done" onClick={(e) => setDone(!done)}>
          Done
        </button>
      </div>
    </article>
  );
}
