import { Router } from "express";
import { createArticle, getArticles, getArticle, updateArticle, deleteArticle } from "../controllers/articles.js";

// Create router
const articlesRouter = Router();

// Define routes for article creation, retrieval, update, and deletion
articlesRouter.post("/articles", createArticle);

articlesRouter.get("/articles", getArticles);

articlesRouter.get("/articles/:id", getArticle);

articlesRouter.patch("/articles/:id", updateArticle);

articlesRouter.delete("/articles/:id", deleteArticle);

export default articlesRouter;