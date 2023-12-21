import { useMemo, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
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

  const [filter, setFilter] = useState({
    sort: "",
    query: "",
  });

  const sortedPosts = useMemo(() => {
    console.log("Отработал хук useMemo");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  return (
    <div className="App">
      <MyModal visible={true}>
      <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Список постов, текст меняется динамически из App.js"
      />
    </div>
  );
}

export default App;
