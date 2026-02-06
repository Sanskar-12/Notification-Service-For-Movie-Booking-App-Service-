import cron from "node-cron";
import { TicketNotification } from "../models/ticketNotification.model.js";
import sendMail from "../services/email.service.js";

export const mailerCron = async () => {
  cron.schedule("*/2 * * * *", async () => {
    console.log("Executing cron again");
    try {
      const notifications = await TicketNotification.find({
        status: "PENDING",
      });

      for (const notification of notifications) {
        const mailData = {
          from: "mba@support.com",
          to: notification.receipentEmails,
          subject: notification.subject,
          text: notification.content,
        };

        try {
          sendMail(process.env.EMAIL, process.env.EMAIL_PASS, mailData);

          notification.status = "SUCCESS";
        } catch (err) {
          console.error("Mail failed:", err);
          notification.status = "FAILED";
        }

        await notification.save();
      }
    } catch (err) {
      console.error("Cron job failed:", err);
    }
  });
};
