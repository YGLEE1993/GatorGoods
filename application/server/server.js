const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(
  cors({
    orgin: ["/"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    key: "user_id",
    secret: "authentication",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      expires: 60 * 60 * 24, //24hrs
    },
  })
);

app.use("/api/product", require("./routers/productRouter"));
app.use("/api/search", require("./routers/searchRouter"));
app.use("/api/auth", require("./routers/authRouter"));
app.use("/api/dashboard", require("./routers/dashboardRouter"));
app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up on port ${port}...`));
