import React from "react";
import { useSelector } from "react-redux";
import PostForm from "./components/PostForm";
import User from "./components/User";
import Post from "./components/Post";
import { isEmpty } from "./components/Utils";

const App = () => {
  const posts = useSelector((state) => state.postReducer);
  const user = useSelector((state) => state.userReducer)
  return (
    <div>
      <h1>React Redux App</h1>
      <PostForm />
      <div className="content">
        <div className="post-container">
          {!isEmpty(posts) && posts.map((elt, index) => <Post post={elt} key={index + elt.id}/>)}
        </div>
        <User userProps={!isEmpty(user) && user}/>
      </div>
    </div>
  );
};

export default App;