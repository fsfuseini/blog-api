import {ArticleModel} from "../models/articles.js";
import { createArticleValidator } from "../validators/articles.js";

export const createArticle = async (req, res) => {
    try {
        // Check if user is authenticated
        // Validate user input
        const { error, value } = createArticleValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error)
      }
      
      // Write to database
      await ArticleModel.create(value);
        
    } catch (error) {
        next(error);
    }   
};

export const getArticles = async (req, res) => {
  res.json({ message: "Articles fetched successfully" });
};

export const getArticle = async (req, res) => {
  res.json({ message: "Article fetched successfully" });
};

export const updateArticle = async (req, res) => {
  res.json({ message: "Article updated successfully" });
};

export const deleteArticle = async (req, res) => {
  res.json({ message: "Article deleted successfully" });
};

