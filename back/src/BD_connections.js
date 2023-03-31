require("dotenv").config();
const {Sequelize} = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;
const CharacterModel = require("./Models/Character");
const UserModel = require("./Models/User")
const FavoriteModel = require("./Models/Favorite")



const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/${DB_NAME}`,
    {logging: false, native: false}
);
UserModel(sequelize)
FavoriteModel(sequelize)
//CharacterModel(sequelize);
module.exports = {
    ...sequelize.models,
    sequelize,
};