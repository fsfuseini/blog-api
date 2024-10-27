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
  try {
    const { filter = "{}", limit = 10, skip = 0 } = req.query;
    // Fetch articles from database
    const articles = await ArticleModel
      .find(JSON.parse(filter))
      .limit(parseInt(limit))
      .skip(parseInt(skip));
    // Return articles
   res.status(200).json(articles);  
  } catch (error) {
    next(error);
  }
};

export const getArticle = async (req, res) => {
 try {
    const article = await ArticleModel.findById(req.params.id);
    res.status(200).json(article);
 } catch (error) {
    next(error);
 }
};

export const updateArticle = async (req, res) => {
  try {
    const article = await ArticleModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(article);
  } catch (error) {
    next(error);
  }
};

export const deleteArticle = async (req, res) => {
  try {
    await ArticleModel.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "Article deleted successfully"});
  } catch (error) {
    next(error);
  }
};

