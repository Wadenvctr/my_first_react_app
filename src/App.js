import { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
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

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  //берем пост из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const [selectedSort, setSelectedSort] = useState()

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px'}}/>
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Сортировка'
          options={[
            {value: 'title', name:'по названию'},
            {value: 'body', name:'по описанию'},
          ]}
        />
      </div>
        <PostList
          remove={removePost}
          posts={posts}
          title="Список постов, текст меняется динамически из App.js"
        />
    </div>
  );
}

export default App;
