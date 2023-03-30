const express = require('express');
const server = express();
const router = require("./src/routes/index");
const favsRouter = require("./src/routes")
const morgan = require("morgan");
const cors = require("cors");
const {saveApiData} = require("./src/controllers/saveApiData");


server.use(express.json());
server.use(cors());
server.use(morgan("dev"));
server.use("/rickandmorty", router);
server.use("/favs", favsRouter);

server.listen(3001, () => {
 console.log('Server raised in port 3001 ');
});


module.export = server;