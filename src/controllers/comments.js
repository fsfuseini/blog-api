import { CommentModel } from "../models/comments.js";
import { createCommentValidator, updateCommentValidator } from "../validators/comments.js";

export const createComment = async (req, res) => {
  try {
    const {error, value} = createCommentValidator.validate(req.body);
    if (error) {
      return res.status(422).json(error);
    }
  } catch (error) {
    next(error);
  } 
};

export const getComments = async (req, res) => {
  try {
    const {filter = "{}", limit = 10, skip = 0} = req.query;
    const comments = await CommentModel
      .find(JSON.parse(filter))
      .limit(parseInt(limit))
      .skip(parseInt(skip));
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};

export const getComment = async (req, res) => {
  try {
    const comment = await CommentModel.findById(req.params.id);
    res.status(200).json(comment);
  } catch (error) {
    next(error);
  }
};

export const updateComment = async (req, res) => {
  try {
   const {error, value} = updateCommentValidator.validate(req.body);
   if (error) {
    return res.status(422).json(error);
   }
  } catch (error) {
    next(error);
  }
};

export const deleteComment = async (req, res) => {
  try {
    await CommentModel.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "Comment deleted successfully"});
  } catch (error) {
    next(error);
  }
};


