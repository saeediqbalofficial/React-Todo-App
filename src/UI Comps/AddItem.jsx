import React, { useState } from "react";
import "./NewItems.css";

const AddItem = ({ setNewItem }) => {
  const [taskId, setTaskID] = useState();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [data, setData] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    const newItem = {
      id: taskId,
      title: title,
      desc: desc,
      date: data,
    };
    setNewItem(newItem);
  };

  const taskIDHandler = (e) => {
    setTaskID(e.target.value);
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const descriptionHandler = (e) => {
    setDesc(e.target.value);
  };

  const dateHandler = (e) => {
    setData(e.target.value);
  };

  return (
    <div className="newitem">
      <h4 style={{ color: "yellow" }}> Add New Task</h4>

      <form className="form" onSubmit={submitHandler}>
        <label forhtml="ID">Task ID</label>
        <br />
        <input
          type="text"
          name="id"
          value={taskId}
          onChange={taskIDHandler}
          placeholder="Task ID e.g (0,1,2,3...)"
          autoComplete="off"
        />
        <br /> <br />
        <label forhtml="Title">Title</label>
        <br />
        <input
          type="text"
          name="title"
          value={title}
          onChange={titleHandler}
          placeholder="Task Title Here"
        />
        <br /> <br />
        <label forhtml="Descriptin">Description</label>
        <br />
        <input
          type="text"
          name="description"
          value={desc}
          onChange={descriptionHandler}
          autoComplete="off"
          placeholder="Task Descriptin / Note"
        />
        <br /> <br />
        <label forhtml="Date">Date</label>
        <br />
        <input
          type="text"
          name="date"
          value={data}
          onChange={dateHandler}
          autoComplete="off"
          placeholder="Task Date e.g (15th March, 2022)"
        />
        <br /> <br />
        <button type="submit" className="btn">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;
