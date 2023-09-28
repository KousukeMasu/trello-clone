import React from "react";

const Task = ({ task, taskList, setTaskList }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  return (
    <div className="taskBox">
      <p className="taskText">{task.text}</p>
      <button className="taskTrashButton">
        <i class="fa-solid fa-trash" onClick={() => handleDelete(task.id)}></i>
      </button>
    </div>
  );
};

export default Task;
