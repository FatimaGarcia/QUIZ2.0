module.exports = function(sequelize, DataTypes) {
 return sequelize.define(
	 'Quiz',
	 { pregunta: {
	 	type: DataTypes.STRING,
	 	validate: { notEmpty: {msg: "-> Falta Pregunta"}}
	 },
	 respuesta: {
	 	type: DataTypes.STRING,
	 	validate: { notEmpty: {msg: "-> Falta Respuesta"}}
	 },
	categoria: {
	 	type: DataTypes.STRING,
	 	validate: { notEmpty: {msg: "-> Falta Categoria"}}
	 },
	 image: {
	  	type: DataTypes.STRING
	 }
	 }
     );
}
