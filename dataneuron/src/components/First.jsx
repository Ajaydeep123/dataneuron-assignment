import React, { useState } from "react";
import axios from "axios";
import { message } from "antd";

const First = () => {
  const [data, setData] = useState("");  
  const [text, setText] = useState("");
  const [editMode, setEditMode] = useState(false);

  async function handleAdd() {
    setEditMode(true);

    if (data == "") {
      return message.success("Enter new data in component");
    }
    try {
      const res = await axios.post(
        "https://dataneuron-assignment-jvlm.onrender.com/api/v1/component/addData",
        {
          componentId: 1,
          data: data,
        }
      );
      message.success(res.data.message);
    //   console.log(res.data.data.component.data)
      setText(res.data.data.component.data);
      setData("");
      setEditMode(false);
    } catch (error) {
      message.error(error.response.data.message);
      setEditMode(false);
    }
  }
  async function handleUpdate() {
    try {
      const res = await axios.patch(
        "https://dataneuron-assignment-jvlm.onrender.com/api/v1/component/updateData",
        {
          componentId: 1,
          data: data,
        }
      );
      message.success(res.data.message);
    //   console.log(res.data.data.newComponent.data)
      setText(res.data.data.newComponent.data);
      setEditMode(false);
    } catch (error) {
      message.error(error.response.data.message);
      setEditMode(false);
    }
  }
  const handleEdit = () => {
    setData(text);
    setEditMode(true);
  };
  // JSX structure of Component1
  return (
    <>
      <div className="component">
        <h1 className="heading">Window 1</h1>
        <div className="input-container">
          {editMode ? (
            <input
              type="text"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          ) : (
            <h3 >{text}</h3>
          )}
          <div className="button-container">
            {editMode ? (
              <button onClick={handleUpdate}>Update</button>
            ) : (
              <button onClick={handleEdit}>Edit</button>
            )}
            <button onClick={handleAdd}>Add Data</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default First;