'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id_order: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rentingDate: {
        type: Sequelize.DATE
      },
      userIdUser: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id_user'
        }
      },
      articleIdArticle: {
        type: Sequelize.INTEGER,
        references: {
          model: 'articles',
          key: 'id_article'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};