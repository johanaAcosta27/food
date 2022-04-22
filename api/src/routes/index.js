const { Router } = require('express');
const recipes = require('./recipes');
const types = require('./types');
const recipe = require('./recipe');

const router = Router();

router.use('/recipes', recipes)
router.use('/recipe', recipe)
router.use('/types', types)

module.exports = router;

