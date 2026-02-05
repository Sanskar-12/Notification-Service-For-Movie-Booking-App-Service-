import nodemailer from "nodemailer";

const sendMail = (email, password, mailData) => {
  const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: email,
      pass: password,
    },
  });

  transport.sendMail({
    from: mailData.from,
    to: mailData.to,
    subject: mailData.subject,
    text: mailData.text,
  });
};

export default sendMail;
