import React from "react";
import MyButton from "./UI/button/MyButton";
import { Link, useNavigate } from "react-router-dom";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
        <div className="post__btns">
          <Link key={props.post.id} to={`${props.post.id}`}>
            <MyButton>Открыть</MyButton>
          </Link>
          <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
