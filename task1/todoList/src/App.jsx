import "./App.css";
import Header from "./components/Header";
// import TodoItem from "./components/ToDoItem";
import AddTodo from "./components/AddToDo";
import TodoList from "./components/ToDoList";

function App() {
  // const [whole, setWhole] = useState([]);

  return (
    <>
      <div className="app">
        <Header />
        <AddTodo />
        <TodoList />
      </div>
    </>
  );
}

export default App;
