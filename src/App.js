// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
function App() {
  const [text, setText] = useState("");

  const sendMessage = () => {
    console.log(text);
    // тут пишетвсся логика для отправки на бэк
  };

  return (
    <div>
      <h1 className="green_text">{text}</h1>
      <input
        type="text"
        value={text}
        placeholder="WriteHere"
        onChange={(event) => setText(event.target.value)}
      />
      <button onClick={sendMessage}>send message</button>
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
