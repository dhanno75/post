import Joi, { ObjectSchema } from "joi";
import { Request, Response, NextFunction } from "express";
import { IPost } from "../models/postsModel";

export const ValidateSchema = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);

      next();
    } catch (err) {
      return res.status(422).json({ err });
    }
  };
};

// Schema definitions
export const Schemas = {
  post: {
    create: Joi.object<IPost>({
      title: Joi.string().required(),
      content: Joi.string().required(),
      category_id: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
    }),
    update: Joi.object<IPost>({
      title: Joi.string().required(),
      content: Joi.string().required(),
    }),
  },
};
