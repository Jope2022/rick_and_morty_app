const express = require('express');
const server = express();
const router = require("./routes/index");
const favsRouter = require("./routes")
const morgan = require("morgan");
const cors = require("cors");
const getAllChars = require("../src/controllers/getAllChars");
const {sequelize, Character} = require("../src/BD_connections");
const {saveApiData} = require("../src/controllers/saveApiData");

server.use(express.json());
server.use(cors());
server.use(morgan("dev"));
server.use("/rickandmorty", router);
server.use("/favs", favsRouter);



    server.listen(3001, async() =>{
       console.log("Server on port 3001")

      await sequelize.sync({force: true})
      console.log("BD abierta")
      saveApiData(Character)
    })


module.exports = server;