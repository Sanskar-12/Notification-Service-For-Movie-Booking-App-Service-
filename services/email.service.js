// import nodemailer from "nodemailer";
import { Resend } from "resend";

const sendMail = async (email, password, mailData) => {
  // const transport = nodemailer.createTransport({
  //   service: "Gmail",
  //   auth: {
  //     user: email,
  //     pass: password,
  //   },
  // });

  // transport.sendMail({
  //   from: mailData.from,
  //   to: mailData.to,
  //   subject: mailData.subject,
  //   text: mailData.text,
  // });

  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: mailData.from,
    to: mailData.to,
    subject: mailData.subject,
    text: mailData.text,
  });
};

export default sendMail;
