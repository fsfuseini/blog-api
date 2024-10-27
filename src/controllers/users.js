import {
    registerUserValidator,
    loginUserValidator,
    updateUserValidator,
} from "../validators/users.js"; //Import validators
import { UserModel } from "../models/users.js"; //Import user model
import bcrypt from "bcrypt"; //Import bcrypt
import jwt from "jsonwebtoken"; //Import jwt

export const registerUser = async (req, res, next) => {
    try {
        //  Validate user input
        const { error, value } = registerUserValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
            // Check if user already exists
            const user = await UserModel.findOne({ email: value.email });
            if (user) {
                return res.status(400).json({ message: "User already exists" });
            }
            // Hash password
            const hashedPassword = bcrypt.hashSync(value.password, 10);
            // Create user
            await UserModel.create({ ...value, password: hashedPassword });
        // Send response
            res.json({ message: "User registered successfully" });
    } catch (error) {
        next(error);
    }
};

export const loginUser = async (req, res, next) => {
 try {
    //  Validate user input
    const { error, value } = loginUserValidator.validate(req.body);
    if (error) {
        return res.status(422).json(error);
     }
    //  Find user
    const user = await UserModel.findOne({ email: value.email });
    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }
    //  Compare password
    const isPasswordValid = bcrypt.compareSync(value.password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid email or password" });
     }
     //  Generate token for the user
     const token = jwt.sign(
         { id: user.id },
         process.env.JWT_SECRET_KEY,
         { expiresIn: "1h" });
     //  Send response
    res.json({ message: "User logged in successfully", accessToken: token });
 } catch (error) {
    next(error);
 }
};

export const getUserProfile = async (req, res, next) => {
    try {
        // Find authenticated user from database
        const user = await UserModel
            .findById(req.auth.id)
            .select({password: false});
        // Send response
        res.json(user);
    } catch (error) {
    next(error);
}};

export const updateUserProfile = async (req, res, next) => {
try {
    // Validate user input  
    const { error, value } = updateUserValidator.validate(req.body);
    if (error) {
        return res.status(422).json(error);
    }
} catch (error) {
    next(error);
}};

export const logoutUser = async (req, res, next) => {
  res.json({ message: "User logged out successfully" });
};
