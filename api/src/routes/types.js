const { Router } = require('express');
const router = Router();
const {TypeDiet} = require('../db');
const {diets} = require('../controllers/diets')

router.get('/', async (req, res) => {
 
        diets.forEach(e => { 
            TypeDiet.findOrCreate({ 
                where: {name:e.name}
            })
        })
        const allTypes = await TypeDiet.findAll(); 
        const dietsAll = (allTypes.map(e => e.name))
        res.send(dietsAll)
})

module.exports= router;


 
















