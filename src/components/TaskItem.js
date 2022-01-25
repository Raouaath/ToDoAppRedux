import React from "react";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { complete, deleteTask } from "../js/action/taskAction";
import { BsCheckCircleFill } from "react-icons/bs";
import EditTask from "./EditTask";

const TaskItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div className="task">
      <div className={todo.isDone ? "done" : null}>{todo.task}</div>
      <div>
        <button variant="danger" onClick={() => dispatch(complete(todo.id))}>
          <BsCheckCircleFill style={{ color: "00b33c", fontSize: "1.5em" }} />
        </button>
        <EditTask todo={todo} />
        <button onClick={() => dispatch(deleteTask(todo.id))}>
          <MdDelete style={{ color: "#dc3545", fontSize: "1.5em" }} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
