import nodemailer from "nodemailer";

import { getEnvironmentVariable } from "../utils/environmentVariables";
import type { IMailFormContact } from "../../requestTypes";

const mailConfig = {
  host: getEnvironmentVariable("MAILCONFIG_HOST"),
  port: getEnvironmentVariable("MAILCONFIG_PORT"),
  user: getEnvironmentVariable("MAILCONFIG_USER"),
  password: getEnvironmentVariable("MAILCONFIG_PASSWORD"),
  mail: getEnvironmentVariable("MAILCONFIG_MAILADDRESS"),
};

let transporter: nodemailer.Transporter | null = null;

async function init() {
  const newTransporter = nodemailer.createTransport({
    host: mailConfig.host,
    port: Number(mailConfig.port),
    secure: true, // true for 465, false for other ports
    auth: {
      user: mailConfig.user,
      pass: mailConfig.password,
    },
  });
  await newTransporter.verify((err, success) => {
    if (err) throw new Error(`Mail transporter could not be verified: ${err}`);
    console.log("Mail transporter successfully verified.");
  });

  transporter = newTransporter;
}

export interface ISendMailContactFormParameters extends IMailFormContact {
  domain: string;
}
export const sendMailContactForm = async (
  parameters: ISendMailContactFormParameters
): Promise<void> => {
  if (transporter === null)
    throw new Error(
      "Email could not be sent. The transporter is not verified."
    );

  const mailOptions: nodemailer.SendMailOptions = {
    from: `<${mailConfig.mail}>`,
    to: getEnvironmentVariable("MAILCONFIG_RECIPIENTADDRESS"),
    subject: `Mail from contact form "${parameters.domain}"`,
    text: `topic: ${parameters.topic}, sender name: ${parameters.senderName}, sender email: ${parameters.senderEmail} ${parameters.message}`, // plain text body
    html: `<p><b>topic:</b> ${parameters.topic}<br>
    <b>sender name:</b> ${parameters.senderName}<br>
    <b>sender email:</b> ${parameters.senderName}</p>
    <p>${parameters.message}</p>`, // html body
  };
  await transporter.sendMail(mailOptions);

  console.log("Contact form email was sent with arguments:", mailOptions);
};

init().catch(console.error);
