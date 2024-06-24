import "./App.css";
import Header from "./components/Header";
// import TodoItem from "./components/ToDoItem";
import AddTodo from "./components/AddToDo";
import TodoList from "./components/ToDoList";
import { useEffect, useState } from "react";
// import PropTypes from "prop-types";
function App() {
  const [whole, setWhole] = useState([]);
  const generateId = () => Math.random().toString(36).substr(2, 9);
  const addItem = (newItem) => {
    const newer = { id: generateId(), todo: newItem }; //定义新对象形式，等会儿删除的时候根据id来删除
    setWhole([...whole, newer]);
    console.log(whole);
  };
  const handleDeleteItem = (id) => {
    const newWhole = whole.filter((item) => item.id !== id);
    console.log("yo", newWhole);
    console.log("Deleted item at index:", id);
    setWhole(newWhole);
  };
  useEffect(() => {
    console.log("Updated todos:", whole);
  }, [whole]);
  return (
    <>
      <div className="app">
        <Header />
        <AddTodo addItem={addItem} />
        <TodoList todos={whole} onDelete={handleDeleteItem} />
      </div>
    </>
  );
}

export default App;
