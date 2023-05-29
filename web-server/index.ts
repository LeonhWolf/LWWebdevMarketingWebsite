import express from "express";
import path from "path";
import cors from "cors";
import expressStaticGzip from "express-static-gzip";

import { getEnvironmentVariable } from "./utils/environmentVariables";
import contactFormPostHandler from "./routes/contactForm";
import type { MailFormContactRoute } from "../requestTypes";

const app = express();
const port = 5500;

app.use(express.json());
app.use(
  cors({
    origin: getEnvironmentVariable("WEB_CLIENT_ORIGIN"),
  })
);
app.use(
  expressStaticGzip(path.join(__dirname, "./public/portfolioWebsite"), {
    enableBrotli: true,
    orderPreference: ["br", "gzip"],
  })
);
// .use(
//   "/object-writing-tool-demo",
//   express.static(path.join(__dirname, "./public/objectWritingTool_demo"))
// );

const mailFormContactRoute: MailFormContactRoute = "/contact-form";
app.post(mailFormContactRoute, contactFormPostHandler);

app.listen(port, () => {
  console.log(`Web server listening on port ${port}`);
});
