import mongoose, { Document, Schema, Types } from "mongoose";

export interface ICategory {
  name: string;
}

export interface ICategoryModel extends ICategory, Document {}

const CategorySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const Category = mongoose.model<ICategoryModel>("Category", CategorySchema);

export default Category;
