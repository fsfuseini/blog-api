import { Router } from "express";
import { createComment, getComments, getComment, updateComment, deleteComment } from "../controllers/comments.js";

// Create router
const commentsRouter = Router();

// Define routes for comment creation, retrieval, update, and deletion
commentsRouter.post("/comments", createComment);

commentsRouter.get("/comments", getComments);

commentsRouter.get("/comments/:id", getComment);

commentsRouter.patch("/comments/:id", updateComment);

commentsRouter.delete("/comments/:id", deleteComment);

export default commentsRouter;