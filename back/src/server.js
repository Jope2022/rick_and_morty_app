const express = require('express');
const app = express();
const router = require("./routes/index");

const favsRouter = require("./routes/")
const morgan = require("morgan");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/rickandmorty", router);
app.use("/favs", favsRouter);

app.listen(3001, () => {
 console.log('Server raised in port 3001 ');
});
