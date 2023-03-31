const express = require("express");
const router = express.Router();
const {getCharById} = require("../controllers/getCharById");
const {getCharDetail} = require("../controllers/getCharDetail");
let favs = require ("../utils/favs");
const getAllChars = require("../controllers/getAllChars");


router.get("/onsearch/:id", getCharById);
router.get("/detail/:detailId", getCharDetail);
router.get("/fav", (req, res) => {
   res.status(200).json(favs);
})

router.get( "/rickandmorty/allCharacters", async (req, res) => {
  try {
    const allCharacters = await getAllChars();
    res.status(200).json(allCharacters)
    
  } catch (error) {
    res.status(404).send("Hubo un problema")
  }
})


router.post("/fav", (req, res) => {
  const {id, name, species, image, gender} = req.body;
  if(!id || !name || !species || !image || !gender) { 
      return res.status(404).send("Faltan datos");
  }
  else{
  const character ={
    id,
    name,
    species,
    image,
    gender
  }
  favs.push(character);
  res.status(200).json(favs);  
}
  
})
router.delete("/fav/:id", (req, res) =>{
    const {id} = req.params;
    const characterDelete = favs.filter(char  => char.id !== Number(id));
    favs= characterDelete;
    res.status(200).send("Se elimino personaje correctamente")
})

module.exports = router;