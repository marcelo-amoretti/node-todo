import { Todo } from "../todo/model";
import { v4 as uuidv4 } from "uuid";
const jsonFile = "./Todos.json";
import fs from "fs";

export const saveTodo = (todo: Todo): boolean => {
  try {
    const todos = getTodo();
    todos.push(todo);

    fs.writeFileSync(jsonFile, JSON.stringify(todos));

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getTodo = (id?: string | undefined): Todo[] => {
  try {
    const todosHelper = fs.readFileSync(jsonFile, "utf-8");
    const todos: Todo[] = JSON.parse(todosHelper || "[]");

    if (!!id && todos) {
      return todos.filter((todo) => todo.id === id);
    }

    return todos;
  } catch (error) {
    console.log("error", error);
    return [];
  }
};
