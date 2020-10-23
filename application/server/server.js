const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/product", require("./routers/productRouter"));
app.use("/api/search", require("./routers/searchRouter"));

const port = process.env.PORT || 6000;
app.listen(port, () => console.log(`Server up on port ${port}...`));
