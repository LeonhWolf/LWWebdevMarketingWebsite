import express from "express";

import contactFormPostHandler from "./routes/contactForm";

const app = express();
app.use(express.json());
const port = 5500;

app.post("/contact-form", contactFormPostHandler);

app.listen(port, () => {
  console.log(`Web server listening on port ${port}`);
});
