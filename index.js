import dotenv from "dotenv";
import express from "express";
import connectToDB from "./config/db.js";
import notificationRouter from "./routes/ticket.routes.js";

dotenv.config();

const app = express();

connectToDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/working/notification/service", (req, res) => {
  return res.status(200).json({
    success: true,
  });
});
app.use("/notiservice/api/v1", notificationRouter);

app.listen(process.env.PORT, () => {
  console.log(
    `Notification Service Server is listening on port ${process.env.PORT}`,
  );
});
