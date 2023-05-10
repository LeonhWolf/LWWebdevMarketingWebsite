const express = require("express");
const app = express();
const port = 5500;

app.get("/", function (req: any, res: any) {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Web server listening on port ${port}`);
});
