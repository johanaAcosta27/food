const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { getAll }  = require('../controllers/recipesC')
const{Recipe,TypeDiet} = require('../db')

   
 ////buscar nombre la misma ruta ?name=joha
 router.get('/', async (req, res, next)=>{
  try{
      const {name} = req.query;
      const recipesAll = await getAll(); 
      if(name){                                        //el.name (nombre de receta)
          const recipeName = recipesAll.filter(el => el.name.toLowerCase().includes(name.toLowerCase())) 
          recipeName.length ? //existe
          res.status(200).send(recipeName) : //sino
          res.status(404).send('No se encontro la Receta');  
      }else{ //sino esta en el query
          res.status(200).send(recipesAll)

      }
  }catch(error) {
      next(error) }
})

router.get('/:id', async (req, res, next) => {
  try{
  const { id } = req.params
  const recipesAll = await getAll();
  if(id){
      const recipesId = await recipesAll.filter(el => el.id == id)
      recipesId.length? //hay algo
      res.status(200).send(recipesId) : //sino encuentra 
      res.status(404).send('No se encontro esa receta')  
  }
}catch (error) {
  next (error)
}})


module.exports = router;




