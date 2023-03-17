const express = require('express');
const server = express();
const router = require("./routes/index");
const favsRouter = require("./routes/")
const morgan = require("morgan");
const cors = require("cors");

server.use(express.json());
server.use(cors());
server.use(morgan("dev"));
server.use("/rickandmorty", router);
server.use("/favs", favsRouter);

server.listen(3001, () => {
 console.log('Server raised in port 3001 ');
});


module.export = server;