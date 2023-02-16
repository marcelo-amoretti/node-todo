import { NextFunction, Request, Response } from "express";
import { createTodoService } from "./service";

export const createTodo = (req: Request, res: Response, next: NextFunction) => {
  const todo = req.body;

  if (!todo) {
    res.status(400).send({ error: "Missing TODO" });
  }

  const result = createTodoService(todo);

  if (!result) {
    res.status(400).send({ error: "Something went wrong" });
  }

  res.status(200).send(todo);
};
