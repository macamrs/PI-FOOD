const { Router } = require('express');
const router = Router();
const { getAllDiets } = require('../control/dietsControl')

// GET /diets
router.get('/', getAllDiets)

module.exports = router;