const { Router } = require('express');
const router = Router();
const recipesRouter = require('./recipesRouter')
const dietsRouter = require('./dietsRouter')

// GET /recipes
// GET /recipes?name=".."
// GET /recipes/{idReceta}
// GET /diets
// POST /recipes

// http://localhost:3001/recipes
// http://localhost:3001/diets
router.use('/recipes', recipesRouter)
router.use('/diets', dietsRouter)


module.exports = router;
