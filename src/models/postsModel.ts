import mongoose, { Document, Schema, Types } from "mongoose";
// the document provides the _id, timestamp everything we need inside mongo model

// this is base for simple validation
export interface IPost {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  category_id: Types.ObjectId;
}

export interface IPostModel extends IPost, Document {}

const postSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please write the title"],
    },
    content: {
      type: String,
      required: [true, "Please enter your content"],
    },
    created_at: Date,
    updated_at: Date,
    category_id: Schema.Types.ObjectId,
  },
  {
    versionKey: false,
  }
);

const Post = mongoose.model<IPostModel>("Post", postSchema);

export default Post;
