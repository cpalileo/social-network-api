const express = require("express");
const mongoConnect = require("./config/connection");
// const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
// app.use(express.unicoded({ extended: true }));
// app.use(routes);

mongoConnect.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API connected using port ${PORT}!`);
  });
});
