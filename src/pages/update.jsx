import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams, useLocation } from "react-router-dom";

function Update() {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [cover, setCover] = useState();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDesc = (e) => {
    setDesc(e.target.value);
  };
  const handleCover = (e) => {
    setCover(e.target.value);
  };

  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  //   console.log(location)
  //   console.log(id)

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const data = {
        title: title,
        desc: desc,
        cover: cover,
      };

      const response = await axios.put(
        `http://localhost:3003/updatebook/${id}`,
        data
      );
      // console.log(response)
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="form">
        <h1>Update Book</h1>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={handleTitle}
        />
        <input
          type="text"
          placeholder="description"
          value={desc}
          onChange={handleDesc}
        />
        <input
          type="text"
          placeholder="cover"
          value={cover}
          onChange={handleCover}
        />
        <button onClick={handleClick} className="formButton">
          Update
        </button>
      </div>
    </>
  );
}

export default Update;
