import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";

export const validate =
  (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req, {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: true,
    });

    if (error) {
      console.log(error.details);
      res.status(422).send({
        message: error.details?.[0].message || "Validation error",
      });
    } else {
      next();
    }
  };
