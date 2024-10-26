import {expressJwt} from "express-jwt";
import {UserModel} from "../models/users.js";
import { authorizations } from "../utilities/rbac.js";

export const isAuthenticated = expressJwt({
    secret: process.env.JWT_SECRET_KEY,
    algorithms: ["HS256"],
});

export const isAuthorized = (action) => {
    return async (req, res, next) => {
        try {
            //   Find authenticated user from database
            const user = await UserModel
                .findById(req.auth.id)
                .populate("role");
            // Use user role to find authorization
            const authorization = authorizations.find((value) => value.role === user.role);
            if (!authorization) {   
                return res.status(403).json({ message: "Forbidden" });
            }
            // Check if the action is allowed
            if (authorization.actions.includes(action)) {
                next();
            } else {
                return res.status(403).json({ message: "Forbidden" });
            }
        } catch (error) {
            next(error);    
        }
    }
}
