const { Router } = require('express');
const{Recipe,TypeDiet} = require('../db')
const router = Router();

router.post('/', async (req,res,next) => {
    try{
    const { name, summary, spoonacularScore, healthScore, analyzedInstructions, createdInDb, typeDiets
    } = req.body;
    if(!name || !summary) {
        return res.status(400).send('Completa con nombre y comentario');
    }
   
    const createRecipe = await Recipe.create({ 
        name,
        summary,
        spoonacularScore ,
        healthScore,
        analyzedInstructions,
        createdInDb
}) 

   const dietTypeDb = await TypeDiet.findAll({  
    where:{ 
        name: 'typeDiets' 
     } })
    createRecipe.addTypeDiet(dietTypeDb) 
    res.status(200).send('Receta Creada')   

}catch(error){
    next(error)
}
});
module.exports= router;