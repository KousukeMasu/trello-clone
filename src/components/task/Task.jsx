import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Task = ({ task, taskList, setTaskList }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  return (
    <Draggable index={task.id} draggableId={task.draggableId}>
      {(provided) => (
        <div
          className="taskBox"
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="taskText">{task.text}</p>
          <button className="taskTrashButton">
            <i
              class="fa-solid fa-trash"
              onClick={() => handleDelete(task.id)}
            ></i>
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
