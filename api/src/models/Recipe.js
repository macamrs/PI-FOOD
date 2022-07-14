const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    }, 
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false
    },
    health_score: {
      type: DataTypes.FLOAT,
      allowNull: false
    }, 
    steps: {
      type: DataTypes.ARRAY(DataTypes.JSON)       
    }, 
    image: {
      type: DataTypes.TEXT // tambien funciona con string
    },
    db_recipe: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    timestamps: false
  });
};
