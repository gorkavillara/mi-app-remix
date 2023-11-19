import type { Todo } from "../models";

const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
