const { Router } = require('express');
const router = Router();
const { getAllRecipes, recipeDetail, createRecipe } = require('../control/recipesControl')

// GET /recipies, // GET /recipies?name=".."
router.get('/', getAllRecipes)

// GET /recipies/{idReceta}
router.get('/:id', recipeDetail)

// POST /recipies
router.post('/', createRecipe)

module.exports = router;