'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable("sobreviventes", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            idade: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            sexo: {
                type: Sequelize.STRING,
                allowNull: false
            },
            latitude: {
                type: Sequelize.STRING,
                allowNull: false
            },
            longitude: {
                type: Sequelize.STRING,
                allowNull: false
            },
            reports: {
                type: Sequelize.STRING,
                allowNull: false
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false
            }
        });
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable("sobreviventes");
    }
};