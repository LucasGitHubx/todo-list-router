import "./listTodoPage.css";
import { useContext } from "react";
import { Context } from "../App";
import Task from "../components/Task";

export default function ListTodoPage() {
  const [data, setData] = useContext(Context);

  return (
    <>
      {data.length == 0 ? (
        <h2 className="tasks-empty">There are no tasks yet...</h2>
      ) : (
        <section className="tasks">
          {data.map((item) => {
            return <Task task={item} />;
          })}
        </section>
      )}
    </>
  );
}
