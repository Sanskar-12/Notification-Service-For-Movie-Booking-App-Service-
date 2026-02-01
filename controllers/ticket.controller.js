import { STATUS_CODES } from "../../Movie_Booking_Backend_App/utils/constants.js";
import { TicketNotification } from "../models/ticketNotification.model.js";

export const createNotification = async (req, res) => {
  try {
    const { subject, content, receipentEmails } = req.body;

    const notification = await TicketNotification.create({
      subject,
      content,
      receipentEmails,
    });

    return res.status(STATUS_CODES.CREATED).json({
      success: true,
      data: notification,
      message: "Notification created successfully",
    });
  } catch (error) {
    console.log("Error in createNotification", error.errors);
    return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: `createNotification Error: ${error}`,
    });
  }
};

export const getAllNotifications = async (req, res) => {
  try {
    const notifications = await TicketNotification.find({});

    return res.status(STATUS_CODES.OK).json({
      success: true,
      data: notifications,
    });
  } catch (error) {
    console.log("Error in getAllNotifications", error.errors);
    return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: `getAllNotifications Error: ${error}`,
    });
  }
};

export const getNotificationById = async (req, res) => {
  try {
    const { notificationId } = req.params;

    const notification = await TicketNotification.findById(notificationId);

    if (!notification) {
      return res.status(STATUS_CODES.NOT_FOUND).json({
        success: false,
        message: "Notification not found",
      });
    }

    return res.status(STATUS_CODES.OK).json({
      success: true,
      data: notification,
    });
  } catch (error) {
    console.log("Error in getAllNotifications", error.errors);
    return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: `getAllNotifications Error: ${error}`,
    });
  }
};
