import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInput = (event) => {
    setInputText(event.target.value);
  };
  const postTodo = () => {
    setTodos([...todos, inputText]);
    setInputText("");
  };
  const deleteTodo = (index) => {
    setTodos(todos.filter((_todo, todoIndex) => todoIndex !== index));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="inputText"
          value={inputText}
          onChange={handleInput}
        />
        <button type="button" onClick={postTodo}>
          投稿
        </button>
      </div>
      <div>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={index}>
                <p>{todo}</p>
                <button onClick={() => deleteTodo(index)}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
