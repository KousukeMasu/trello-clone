import React from "react";

const TaskAddInput = ({ inputText, setInputText, taskList, setTaskList }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    // カードを追加する
    setTaskList([
      ...taskList,
      {
        text: inputText,
      },
    ]);
    // console.log(...taskList);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a task"
          className="taskAddInput"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};

export default TaskAddInput;
