// const express = require("express");
// const app = express();
var path = require("path");
// const port = 3000;
const dotenv = require('dotenv')

dotenv.config({path: '.env'})

const { app, express } = require('./backend/app')

const port = process.env.PORT



app.engine(".html", require("ejs").__express);

app.set("view engine", "html");
app.set("views", path.join(__dirname, "frontend/view"));
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));
app.use(
  "/public",
  express.static(path.join(__dirname, "frontend/view/public"))
);

const viewSales = require("./frontend/routes/view/sales.route");
app.use("/sales", viewSales);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
