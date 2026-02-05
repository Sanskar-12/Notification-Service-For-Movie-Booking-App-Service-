import cron from "node-cron";
import { TicketNotification } from "../models/ticketNotification.model.js";
import sendMail from "../services/email.service.js";

cron.schedule("*/2 * * * *", async () => {
  const notificationsToBeSent = await TicketNotification.find({
    status: "PENDING",
  });

  notificationsToBeSent.forEach((notification) => {
    const mailData = {
      from: "mba@support.com",
      to: notification.receipentEmails,
      subject: notification.subject,
      text: notification.content,
    };

    sendMail(process.env.EMAIL, process.env.EMAIL_PASS, mailData);
  });
});
