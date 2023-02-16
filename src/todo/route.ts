import express from "express";
import { createTodo } from "./controller";
import { validate } from "./middleware";
import { createTodoValidator } from "./validations";

const todoRouter = express.Router();

todoRouter.post("/todos", validate(createTodoValidator), createTodo);

export default todoRouter;

// todoRouter.get("/todos/:id?", (req, res) => {
//   try {
//     const id = req.params["id"];
//     const todo = getTodo(id);

//     res.status(200).send(todo);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// todoRouter.put("/todos/:id", (req, res) => {
//   try {
//     const id = req.params["id"];
//     const todo = req.body;
//     const todos = getTodo();
//     const todoIndex = todos.findIndex((todo: Todo) => todo.id === id);

//     if (todoIndex < 0) {
//       res.status(404).send({ message: "Todo not found" });
//     }

//     todos[todoIndex] = { id: todos[todoIndex].id, ...todo };

//     fs.writeFileSync(jsonFile, JSON.stringify(todos));

//     res.status(200).send(todos[todoIndex]);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// todoRouter.delete("/todos/:id", (req, res) => {
//   try {
//     const id = req.params["id"];

//     const todos = getTodo();
//     const todoIndex = todos.findIndex((todo: Todo) => todo.id === id);

//     if (todoIndex < 0) {
//       res.status(404).send({ message: "Todo not found" });
//     }

//     todos.splice(todoIndex, 1);
//     fs.writeFileSync(jsonFile, JSON.stringify(todos));

//     res.status(200).send();
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });
