import nodemailer from "nodemailer";

const sendMail = (email, password) => {
  const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: email,
      pass: password,
    },
  });

  transport.sendMail({
    from: "mba@support.com",
    to: "sanskarv2004@gmail.com",
    subject: "Test email",
    text: "Hey this is a test email",
  });
};

export default sendMail;
