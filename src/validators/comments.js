import Joi from "joi";

export const createCommentValidator = Joi.object({
    content: Joi.string().required(),
    articleId: Joi.string().required(),
});

export const updateCommentValidator = Joi.object({
    content: Joi.string(),
});
