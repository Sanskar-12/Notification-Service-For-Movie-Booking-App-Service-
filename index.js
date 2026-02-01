import dotenv from "dotenv";
import express from "express";
import connectToDB from "./config/db.js";

dotenv.config();

const app = express();

connectToDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
  console.log(
    `Notification Service Server is listening on port ${process.env.PORT}`,
  );
});
