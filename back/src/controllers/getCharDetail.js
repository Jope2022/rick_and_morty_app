const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character"

const getCharDetail = async (req, res) => {
  const { detailId } = req.params;
  try {
    const response = await axios(`${URL}/${detailId}`)
    const data = response.data
    const character = {
      id: data.id,
      name: data.name,
      species: data.species,
      image: data.image,
      gender: data.gender,
    }
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}

module.exports = { getCharDetail };