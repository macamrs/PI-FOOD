// const fetch = require("node-fetch")
const axios = require("axios");
require('dotenv').config();
const { KEY } = process.env;
const { Diet } = require("../db");

const getAllDiets = async (req, res) => {
    try {
        let diets = ['gluten free', 'ketogenic', 'vegetarian', 'lacto-vegetarian','ovo-vegetarian', 'lacto ovo vegetarian', 'vegan', 'pescetarian', 'pescatarian', 'paleo', 'paleolithic', 'primal', 'low fodmap', 'whole 30', 'fodmap friendly', 'dairy free']

        // let dietsAPI = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY}&addRecipeInformation=true&number=100`)

        // let dataDiets = dietsAPI.data?.results.map(d => d.diets)
        // // console.log(dataDiets)
        // let arrDiets = dataDiets.flat();
        // // console.log(arrDiets)
        // let diets = [...new Set(arrDiets)] // hasta aca llegan las 10 dietas
        // // console.log(diets) 

        diets.forEach((el) => {
            Diet.findOrCreate({
                where: {
                    name: el
                }
            })            
        })

        const AllDiets = await Diet.findAll(); // es asincrono, sin await devuelve obj vacio
        return res.status(200).send(AllDiets)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllDiets
}