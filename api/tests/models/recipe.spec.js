const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');

ddescribe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
    describe('Recipe model',async () => {
      it('should contain attributes : id, name , summary, spoonacularScore, healthScore, analyzedInstructions', async () => {
        const recipe = await Recipe.findOne({where:{title:'prueba'}})
        expect(recipe.dataValues).to.have.own.property('id');
        expect(recipe.dataValues).to.have.own.property('name');
        expect(recipe.dataValues).to.have.own.property('summary');
        expect(recipe.dataValues).to.have.own.property('spoonacularScore');
        expect(recipe.dataValues).to.have.own.property('healthScore');
        expect(recipe.dataValues).to.have.own.property('analyzedInstructions');
      })
    })
  })
    
    

