// import logo from './logo.svg';
//import "./App.css";
import { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Javascript",
      body: "тут можно засунуть сколько угодно длинное описание",
    },
    { id: 2, title: "Javascript2", body: "тут тоже" },
    { id: 3, title: "Javascript3", body: "и даже тут" },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    setPosts([...posts, newPost])
    console.log(posts)
  };

  return (
    <div className="App">
      <form>
        {/* управляемыe компоненты */}
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Name of post"
        />
        <MyInput 
        value={body}
        onChange={(e) => setBody(e.target.value)}
        type="text" 
        placeholder="description of post" 
        />
        <MyButton type="submit" onClick={addNewPost}>
          Создать пост
        </MyButton>
      </form>
      <PostList
        posts={posts}
        title={"Список постов, текст меняется динамически из App.js"}
      />
    </div>
  );
}

export default App;
