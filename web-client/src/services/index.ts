import { IMailFormContact, MailFormContactRoute } from "../../../requestTypes";

const webServerUrl =
  process.env.NODE_ENV === "production"
    ? `${window.location.protocol}//${window.location.host}`
    : "http://localhost:5500";

const mailFormContactRoute: MailFormContactRoute = "/contact-form";
export const sendMailFormContact = async (
  parameters: IMailFormContact
): Promise<Response> => {
  const response = await fetch(webServerUrl + mailFormContactRoute, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(parameters),
  });

  return response;
};
