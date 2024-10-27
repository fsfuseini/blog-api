import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import usersRouter from "./routes/users.js";
import articlesRouter from "./routes/articles.js";
import commentsRouter from "./routes/comments.js";

// Create express app
const app = express();


// Connect to database
await mongoose.connect(process.env.MONGO_URI);

const PORT = 3005;


// Use express middleware to parse JSON bodies
app.use(express.json());
// Use cors middleware to handle cross-origin requests
app.use(cors());

// Routes
app.use(usersRouter);
app.use(articlesRouter);
app.use(commentsRouter);

// App listening for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


