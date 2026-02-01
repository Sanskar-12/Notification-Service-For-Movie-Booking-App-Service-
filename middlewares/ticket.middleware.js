import { STATUS_CODES } from "../../Movie_Booking_Backend_App/utils/constants.js";
import { requiredFieldsForCreateNotification } from "../utils/index.js";

export const validateCreateNotificationRequest = (req, res, next) => {
  for (const field in requiredFieldsForCreateNotification) {
    if (
      !req.body[field] ||
      (Array.isArray(req.body[field]) && req.body[field].length === 0)
    ) {
      return res.status(STATUS_CODES.BAD_REQUEST).json({
        success: false,
        message: requiredFieldsForCreateNotification[field],
      });
    }
  }

  next();
};
