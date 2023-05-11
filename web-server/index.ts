import express from "express";
import cors from "cors";

import { getEnvironmentVariable } from "./utils/environmentVariables";
import contactFormPostHandler from "./routes/contactForm";
import type { MailFormContactRoute } from "../requestTypes";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: getEnvironmentVariable("WEB_CLIENT_ORIGIN"),
  })
);

const port = 5500;

const mailFormContactRoute: MailFormContactRoute = "/contact-form";
app.post(mailFormContactRoute, contactFormPostHandler);

app.listen(port, () => {
  console.log(`Web server listening on port ${port}`);
});
