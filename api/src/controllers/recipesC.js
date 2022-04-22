
const { Router } = require('express');
const{Recipe, TypeDiet} = require('../db')
const axios = require ('axios');
const {Sequelize} = require('sequelize');
const { apiKey, apiKey2, apiKey3, apiKey4 } = process.env; 

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getApiInfo = async () => {
    const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey4}&number=100&addRecipeInformation=true`)
    const apiInfo = await apiUrl.data.results.map(e =>{
        return {
                id: e.id, 
                name: e.title, 
                img: e.image,
                typeDiets: e.diets.map((d)=> {return{name:d}}), 
                spoonacularScore : e.spoonacularScore,  
                dishTypes: e.dishTypes.map((d)=> {return{name:d}}), 
                summary: e.summary,            
                healthScore: e.healthScore,   
                analyzedInstructions: e.analyzedInstructions
               }
    });
    return apiInfo;
}

const getBdInfo = async () =>{
    return await Recipe.findAll({
        include:{
            model: TypeDiet,
            attributes: ['name'],
            through :{
                attributes: [],
            }

        }
    })
}

const getAll = async () => {
    const api= await getApiInfo()
    const dbInfo = await getBdInfo()
    const allRecipes = [...api,...dbInfo]
   
    return allRecipes

}



module.exports = { 
    getAll,
    getBdInfo,
    getApiInfo

    }; 
    