import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import "./Home.css";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const navigate = useNavigate();
  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isLoading && <div>is Loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p style={{ marginTop: "20px" }}>{blog.body}</p>
          <p style={{ marginTop: "10px" }}>
            Writen by{" "}
            <span style={{ fontWeight: "bold", color: "#f1356d" }}>
              {blog.author}
            </span>
          </p>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

// yarn json-server to watch

export default BlogDetails;
