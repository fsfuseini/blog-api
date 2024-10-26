import Joi from "joi";

export const createArticleValidator = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
});

export const updateArticleValidator = Joi.object({
    title: Joi.string(),
    content: Joi.string(),
    completed: Joi.boolean(),
});



