const axios = require("axios");
const {Character} = require("../Models/Character");

const getApiData = async() =>{
    try {
        let i = 1;
        let characters = [];
        while(i < 6){ 
        const apiData = await axios("https://rickandmortyapi.com/api/character?page=${i}")
        characters.push(apiData);
        i++;
    }
    characters = (await Promise.all(characters)).map(res => res.data.results.map(char =>{
        return({
            name: char.name,
            status: char.status,
            species: char.species,
            gender: char.gender,
            origin: char.origin.name,
            image: char.image
        })
    }))
     let allCharacters = [];
     characters.map(char =>{allCharacters = allCharacters.concat(char)} )
     return allCharacters;

    } catch (error) {
        return {error: error.message}
    }
}

const saveApiData = async(chars) => {
try {
    const allCharacters = await getApiData();
    const createCharacters = await chars.bulkCreate(allCharacters);
    //bulkCreate nos permite pasarle un array de objetos y los crea todos juntos en la BD 
} catch (error) {
    console.log(error.message)
}
}

module.exports= {
    saveApiData
}