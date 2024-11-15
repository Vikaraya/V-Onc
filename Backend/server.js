const express = require("express");
const dotenv = require("dotenv");
const dbConnection = require("./src/dbConnection");
const signupController = require("./src/controllers/signup");
const loginController = require("./src/controllers/login");

const app = express();

dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.post("/signup", signupController);
app.post("/login",loginController)

dbConnection(process.env.DB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
