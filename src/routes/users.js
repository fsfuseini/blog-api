import { Router } from "express";
import { registerUser, loginUser, logoutUser, getUserProfile, updateUserProfile } from "../controllers/users.js";

// Create a new router instance
const usersRouter = Router();

// Define routes for user registration, login, logout, update profile and profile
usersRouter.post("/users/register", registerUser);

usersRouter.post("/users/login", loginUser);

usersRouter.post("/users/logout", logoutUser);

usersRouter.get("/users/profile", getUserProfile);

usersRouter.patch("/users/profile", updateUserProfile);

export default usersRouter;