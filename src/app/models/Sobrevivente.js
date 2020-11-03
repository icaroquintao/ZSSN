module.exports = (sequelize, DataTypes) => {
    const Sobrevivente = sequelize.define(
        "Sobrevivente", {
            name: DataTypes.STRING,
            idade: DataTypes.INTEGER,
            sexo: DataTypes.STRING,
            latitude: DataTypes.STRING,
            longitude: DataTypes.STRING,
            reports: DataTypes.STRING
        }
    );



    return Sobrevivente;
};