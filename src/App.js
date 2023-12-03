// import logo from './logo.svg';
//import "./App.css";
import { useState } from 'react';
// import PostItem from './components/PostItem';
import './styles/App.css';
import PostList from './components/PostList';
//import Counter from "./components/counter";
function App() {
  const [posts, setPosts] = useState([
    {id:1, title:'Javascript', body: 'Description'},
    {id:2, title:'Javascript2', body: 'Description'},
    {id:3, title:'Javascript3', body: 'Description'}
  ])

  return (
    <div className="App">
      <PostList posts={posts} title={'Список постоВ'}/>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
