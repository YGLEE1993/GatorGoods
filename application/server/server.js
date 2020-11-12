const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/product", require("./routers/productRouter"));
app.use("/api/search", require("./routers/searchRouter"));
app.use("/api/auth", require("./routers/authRouter"));
app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up on port ${port}...`));
