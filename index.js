const express = require("express");
const plansRoute = require("./plans");
require("dotenv").config();

const port = process.env.PORT;
const app = express();

app.use("/plans", plansRoute);
app.listen(port, () => console.log(`Listening on port ${port}`));
