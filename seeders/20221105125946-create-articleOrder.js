'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('articleOrders', [
      {
        id_article: 1,
        id_order:1
    },
      {
        id_article: 2,
        id_order:2
    },
      {
        id_article: 3,
        id_order:3
    },
      
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('articleOrders', null, {});

  }
};
