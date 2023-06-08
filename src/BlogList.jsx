import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <Link to={`./blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p style={{ marginTop: "10px" }}>
                Writen by{" "}
                <span style={{ fontWeight: "bold", color: "#f1356d" }}>
                  {blog.author}
                </span>
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;

// [
//   { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
//   { title: "Welcome Party", body: "lorem ipsum...", author: "yoshi", id: 2 },
//   {
//     title: "Web dev top tips",
//     body: "lorem ipsum...",
//     author: "mario",
//     id: 3,
//   },
// ]
