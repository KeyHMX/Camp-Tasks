// import React from "react";
import TodoItem from "../ToDoItem";
import PropTypes from "prop-types";
const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </div>
  );
};
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default TodoList;
