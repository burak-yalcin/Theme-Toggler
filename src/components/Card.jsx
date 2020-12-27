import React, { useState } from "react";

export default function Card({ title, image }) {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  function likeHandler() {
    var newLike = like;
    setLike(newLike + 1);
  }

  function dislikeHandler() {
    var newDislike = dislike;
    setDislike(newDislike + 1);
  }

  return (
    <div className="card m-2" style={{ width: 300 }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <a onClick={likeHandler} className="btn btn-success">
          {like} Like
        </a>
        <a onClick={dislikeHandler} className="btn btn-danger ml-3">
          {dislike} dislike
        </a>
      </div>
    </div>
  );
}
