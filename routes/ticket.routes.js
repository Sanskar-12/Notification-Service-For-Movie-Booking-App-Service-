import express from "express";
import { createNotification } from "../controllers/ticket.controller.js";
import { validateCreateNotificationRequest } from "../middlewares/ticket.middleware.js";

const notificationRouter = express.Router();

notificationRouter.post(
  `/notifications`,
  validateCreateNotificationRequest,
  createNotification,
);

export default notificationRouter;
