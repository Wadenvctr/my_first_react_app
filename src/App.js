import { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./components/hooks/usePosts";
import axios from "axios";
function App() {
  const [posts, setPosts] = useState([]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)
  };

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(response.data)
  }

  //берем пост из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const [filter, setFilter] = useState({
    sort: "",
    query: "",
  });
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  return (
    <div className="App">
      <MyButton onClick={fetchPosts}>GET POSTS</MyButton>
      <MyButton style={{marginTop: '30px', }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
      <PostForm create={createPost} />
      </MyModal>
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
