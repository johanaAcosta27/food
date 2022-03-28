const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false, //campo requerido
      primaryKey: true,

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    details: { //resumen del plato
      type: DataTypes.STRING,
      allowNull: false,
    },
    punctuation: { //puntuacion
      type: DataTypes.STRING,
      allowNull: true,
    },
    healthy: { //nivel de comida saludable
      type: DataTypes.STRING,
      allowNull: false,
    },
    recet: { //paso a paaso
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
