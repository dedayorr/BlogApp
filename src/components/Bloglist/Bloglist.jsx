import React from "react";
import { Blogcard } from "../Blogcard/Blogcard";

export const Bloglist = ({ blogs, getBlogs, setUpdateOpen, collectId }) => {
  
  return (
    <div className="md:flex md:flex-wrap justify-center items-center gap-[30px] w-[90%] mx-auto ">
      {blogs && blogs.length > 0 ? (
      blogs.map((blog) => <Blogcard key={blog.id} blog={blog} getBlogs={getBlogs} setUpdateOpen={setUpdateOpen} collectId={collectId}/>)
      ) : (
        <div className="font-bold text-3xl text-center"></div>
      )}
      <br></br>

      <br></br>
    </div>
  );
};
