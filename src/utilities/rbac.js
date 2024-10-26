export const authorizations = [{
    role: "user",
    actions: ["getProfile", "updateProfile", "createArticle", "updateArticle", "deleteArticle", "createComment", "updateComment", "deleteComment"],
},
{
    role: "admin",
    actions: ["getProfile", "updateProfile", "createArticle", "updateArticle", "deleteArticle", "createComment", "updateComment", "deleteComment", "getArticles", "getArticle", "deleteUser"],
}
]