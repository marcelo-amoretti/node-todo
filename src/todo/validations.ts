import Joi from "joi";

export const createTodoValidator = Joi.object({
  body: {
    text: Joi.string().required(),
    priority: Joi.number().min(1).max(5).default(3),
    done: Joi.boolean().default(false),
  },
});
