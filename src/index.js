import express from "express";
import cors from "cors";
const app = express();

const PORT = 3005;


// Use express middleware to parse JSON bodies
app.use(express.json());
// Use cors middleware to handle cross-origin requests
app.use(cors());

// App listening for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


