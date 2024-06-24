import "./App.css";
import Header from "./components/Header";
// import TodoItem from "./components/ToDoItem";
import AddTodo from "./components/AddToDo";
import TodoList from "./components/ToDoList";
import { useState } from "react";

function App() {
  // const [whole, setWhole] = useState([]);
  const [whole, setWhole] = useState([]);
  const addItem = (newItem) => {
    setWhole([...whole, newItem]);
    console.log(whole);
  };
  const deleteItem = (index) => {
    const newWhole = whole.filter((i) => i !== index);
    setWhole(newWhole);
  };
  return (
    <>
      <div className="app">
        <Header />
        <AddTodo addItem={addItem} />
        <TodoList todos={whole} delete={deleteItem} />
      </div>
    </>
  );
}

export default App;
