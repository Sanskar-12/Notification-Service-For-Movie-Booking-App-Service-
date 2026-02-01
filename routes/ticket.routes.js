import express from "express";
import {
  createNotification,
  getAllNotifications,
  getNotificationById,
} from "../controllers/ticket.controller.js";
import { validateCreateNotificationRequest } from "../middlewares/ticket.middleware.js";

const notificationRouter = express.Router();

notificationRouter.post(
  `/notifications`,
  validateCreateNotificationRequest,
  createNotification,
);
notificationRouter.get(`/notifications`, getAllNotifications);
notificationRouter.get(`/notifications/:notificationId`, getNotificationById);

export default notificationRouter;
