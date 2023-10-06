import express from "express";
import {
  createPost,
  deletePost,
  getAllPost,
  getLatestPost,
  getOnePost,
  updatePost,
} from "../controllers/postsController";
import { Schemas, ValidateSchema } from "../middleware/ValidateSchema";

import mwBasicAuth from "../middleware/basicAuth";

const router = express.Router();

router
  .route("/posts")
  .post(ValidateSchema(Schemas.post.create), createPost)
  .get(getAllPost);
router
  .route("/posts/:id")
  .get(getOnePost)
  .put(ValidateSchema(Schemas.post.create), updatePost)
  .delete(deletePost);
router.get("/post/latest", mwBasicAuth, getLatestPost);

export default router;
