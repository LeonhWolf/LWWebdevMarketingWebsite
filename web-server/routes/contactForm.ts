import type { Request, Response } from "express";

import { sendMailContactForm } from "../services/mail";
import type { ISendMailContactFormParameters } from "../services/mail";

type SendMailParameters = Omit<ISendMailContactFormParameters, "domain">;
const emptySendMailParameters: SendMailParameters = {
  senderName: "",
  senderEmail: "",
  topic: "",
  message: "",
};
const checkParameterTypes = (body: Request["body"]): SendMailParameters => {
  const sendMailParameters = { ...emptySendMailParameters };

  Object.keys(sendMailParameters).forEach((parameter) => {
    const bodyParameter = body[parameter];
    const sendMailParameter =
      sendMailParameters[
        parameter as keyof Omit<ISendMailContactFormParameters, "domain">
      ];
    if (typeof bodyParameter !== typeof sendMailParameter) {
      throw new Error(
        `The property "${parameter}" has type "${typeof bodyParameter}" but needs to have type "${typeof sendMailParameter}".`
      );
    }

    sendMailParameters[
      parameter as keyof Omit<ISendMailContactFormParameters, "domain">
    ] = bodyParameter;
  });

  return sendMailParameters;
};

const handler = async (request: Request, response: Response) => {
  if (
    Object.keys(request.body).length !==
    Object.keys(emptySendMailParameters).length
  ) {
    response.status(400);
    response.send(
      "There were either too many or not enough properties on the body object."
    );
    return;
  }

  let sendMailParameters: SendMailParameters;
  try {
    sendMailParameters = checkParameterTypes(request.body);
  } catch (error) {
    console.error(`Sending the contact mail was aborted: ${error}`);
    response.status(400);
    response.send(
      "At least one property in the body does not have the required data type."
    );
    return;
  }

  try {
    await sendMailContactForm({
      domain: request.headers["host"] ?? "domain not identifiable",
      ...sendMailParameters,
    });

    response.send("The email was sent.");
  } catch (error) {
    console.error(`The contact mail could not be sent: ${error}`);
    response.status(500);
    response.send(
      "The email could not be sent. There was in internal server error."
    );
  }
};

export default handler;
