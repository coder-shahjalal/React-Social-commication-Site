import React, { useState, useEffect } from "react";
import "./Comments.css";

const Comments = (props) => {
  const { name, email, body } = props.commentsData;

  //random color generator
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <>
      <div>
        <div className="container">
          {" "}
          <img
            className="img"
            src={`https://ui-avatars.com/api/?name=${name}&background=${getRandomColor()}`}
          />
          <p>Name : {name}</p>
        </div>
        <div className="comments-body">
          <p>Email : {email}</p>
          <p>Body : {body}</p>
        </div>
      </div>
    </>
  );
};

export default Comments;
