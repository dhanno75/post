import { NextFunction, Request, Response } from "express";
import Category from "../models/categoryModel";
import Post from "../models/postsModel";

// CREATE CATEGORY
export const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newCategory = await Category.create({ name: req.body.name });

    return res.status(201).json({
      status: "success",
      message: "Category created successfully",
      data: newCategory,
    });
  } catch (err) {
    return res.status(500).json({
      status: "fail",
      message: "Please try again",
      error: err,
    });
  }
};
