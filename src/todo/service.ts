import { v4 as uuidv4 } from "uuid";
import { saveTodo } from "../utils/todo";

import { Todo } from "./model";

export const createTodoService = (todo: Omit<Todo, "id">): Todo | undefined => {
  const newTodo = {
    id: uuidv4(),
    text: todo.text,
    priority: todo?.priority || 3,
    done: todo?.done,
    created_at: new Date().toString(),
  };
  const result = saveTodo(newTodo);

  if (result) {
    return newTodo;
  }

  return undefined;
};
