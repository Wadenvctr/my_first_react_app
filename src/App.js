// import logo from './logo.svg';
//import "./App.css";
import { useState } from 'react';
// import PostItem from './components/PostItem';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
//import Counter from "./components/counter";
function App() {
  const [posts/*, setPosts*/] = useState([
    {id:1, title:'Javascript', body: 'тут можно засунуть сколько угодно длинное описание'},
    {id:2, title:'Javascript2', body: 'тут тоже'},
    {id:3, title:'Javascript3', body: 'и даже тут'},
  ])
  

  return (
    <div className="App">
      <form>
        <MyInput type='text' placeholder='Name of post'/>
        <MyInput type='text' placeholder='description of post'/>
        <MyButton>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title={'Список постов, текст меняется динамически из App.js'}/>
    </div>
  );
}

export default App;
