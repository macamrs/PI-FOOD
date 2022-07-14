// const fetch = require("node-fetch")
const axios = require("axios");
require('dotenv').config();
const { KEY } = process.env;
const { Op } = require("sequelize");
const { Recipe, Diet } = require("../db");
const regexExp = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i; // verficacion de que el id es del tipo UUID (V4)

// https://api.spoonacular.com/recipes/complexSearch?apiKey=3825000d903f4f7a92f58a87882a5a61&addRecipeInformation=true&number=100
// https://api.spoonacular.com/recipes/715594/information?apiKey=3825000d903f4f7a92f58a87882a5a61

const recipesAPI = async () => {
    try {
        const { data } = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY}&addRecipeInformation=true&number=100`)
        const recipesResults = data.results

        let recipeInfo = recipesResults.map(r => {
            return {
                id: r.id,
                vegetarian: r.vegetarian,
                vegan: r.vegan,
                glutenFree: r.glutenFree,
                image: r.image,
                name:  r.title,
                health_score: r.healthScore,
                summary: r.summary,
                diets: r.diets,
                steps: r.analyzedInstructions.map(s => s.steps)
            }
        })

        return recipeInfo;

    } catch(error) {
        console.log(error)
    }
}

const recipesDB = async () => {
    try {
        let recipe = await Recipe.findAll({
            include: {
                model: Diet,
                attributes: ["name"],
                through:{
                    attributes:[],
                }
            }
        })

        let recipeDB = recipe.map(d => {
            return {
                id: d.id,
                name: d.name,
                image: d.image,
                diets: d.diets.map(e => e.name),
                health_score: d.health_score,
                summary: d.summary,
                steps: d.steps,
                db_recipe: d.db_recipe
            }
        })

        return recipeDB   
    } catch (error) {
        console.log(error)
    }
}

const getAllRecipes = async (req, res) => {
    const { name } = req.query

    try {
      if (name) {
        let { data } = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=${KEY}&addRecipeInformation=true`)

        let recipeData = data.results.map((r) => {
          return {
                id: r.id,
                vegetarian: r.vegetarian,
                vegan: r.vegan,
                glutenFree: r.glutenFree,
                image: r.image,
                name:  r.title,
                health_score: r.healthScore,
                summary: r.summary,
                diets: r.diets,
                steps: r.analyzedInstructions.map(s => s.steps)
          }
        });

        let recipeDB = await Recipe.findAll({
            where:{
                name:{
                    [Op.iLike]: `%${name}%`
                },
            },
            include:{
                model: Diet,
                attributes: ['name'],
                through:{
                    attributes:[],
                }
            }
        });

        let recipesByName = recipeDB.concat(recipeData)

        if(recipesByName.length >= 1) return await res.send(recipesByName);
        else return res.status(400).send('Recipe not found')

      } else {
        const infoDB = await recipesDB();
        const infoAPI = await recipesAPI();
        const allInfo = infoDB.concat(infoAPI)
        return await res.status(200).send(allInfo)
      }

    } catch (error) {
        console.log(error)
    }
}

// const getAllRecipes = async (req, res) => {
//     const { name } = req.query

//     const infoDB = await recipesDB();
//     const infoAPI = await recipesAPI();
//     const allInfo = infoDB.concat(infoAPI) // [...infoDB, ...infoAPI] tambien funciona

//     if(name) {
//         let nameFilter = allInfo.filter(n => n.name.toLowerCase().includes(name.toLowerCase()));
//         if(nameFilter.length >= 1) {
//             return res.status(200).send(nameFilter)
//         } else {
//             res.status(400).send('Recipe not found')
//         }
//     } else {
//         return res.send(allInfo)
//     }
// }

const recipeDetail = async (req, res) => {
    const { id } = req.params
    // console.log(id.length)

    try {
        if(id.length < 10) {
            let { data } = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${KEY}`)

            if(data) {
                let dataID = {
                    id: data.id,
                    vegetarian: data.vegetarian,
                    vegan: data.vegan,
                    glutenFree: data.glutenFree,
                    image: data.image,
                    name:  data.title,
                    health_score: data.healthScore,
                    summary: data.summary,
                    diets: data.diets,
                    steps: data.analyzedInstructions.map(s => s.steps),
                    type: data.dishTypes
                }
                // console.log(dataID)
                return res.status(200).send(dataID) 
            }
            
        } else if(regexExp.test(id)) {
            let searchID = await recipesDB();
            let searchFinal = await searchID.find(s => s.id === id)
            return await res.send(searchFinal)
        } else {
            return res.status(404).send(`Recipe ${id} not found`)
        }

    } catch (error) {
        return res.status(404).send('id error')
    }
}

const createRecipe = async (req, res) => {
    const {
        name,
        summary,
        health_score,
        steps,
        image,
        db_recipe,
        diets
    } = req.body

        const newRecipe = await Recipe.create({
            name,
            summary,
            health_score,
            steps,
            image,
            db_recipe
        })
        // console.log(diets)

        // diets.forEach(async (d) => {
        //     let db = await Diet.findAll({
        //         where: {
        //             name: d
        //         }
        //     })
        //     await newRecipe.addDiet(db)
        // })

        let dietDb = await Diet.findAll({
           where: {name: diets}
        });
        await newRecipe.addDiet(dietDb);

        return res.status(200).send(newRecipe)
}

module.exports = {
    getAllRecipes,
    recipeDetail,
    createRecipe
}