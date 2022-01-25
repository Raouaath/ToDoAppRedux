import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../js/action/taskAction";

const AddTask = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const add = () => {
    if (text) {
      dispatch(
        addTask({ id: Math.random(), task: text.trim(), isDone: false })
      );
      setText("");
    } else alert("Field shouldn't be empty");
  };

  return (
    <div className="add">
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={add}>Add Task</button>
    </div>
  );
};

export default AddTask;
