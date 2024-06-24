import PropTypes from "prop-types";

const TodoItem = ({ todo }) => {
  return (
    <div className="todoitem">
      <p className="todo">{todo}</p>
      <button className="delete">Delete</button>
      <button className="have-done">Done?</button>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.string.isRequired,
};

export default TodoItem;
