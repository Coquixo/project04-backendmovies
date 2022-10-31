'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('series', {
      id_serie: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      synopsis: {
        type: Sequelize.STRING
      },
      punctuation: {
        type: Sequelize.STRING
      },
      nextsevendays: {
        type: Sequelize.BOOLEAN
      },
      theater: {
        type: Sequelize.BOOLEAN
      },
      cine: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('series');
  }
};