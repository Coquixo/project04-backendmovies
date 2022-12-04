'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [
      {
        name: "USERADMIN",
        surname: "ADMINsurname",
        age: 20,
        phone: "777222333",
        address: "address-fiction",
        email: "admin@gmail.com",
        password: "mTcCYB2HnDJc3eMPwKyxZecFFmIo9gtwjHuS7MqWoMsAlldWuDMIlpEKwTqEb4xQqw2DeqxLbRhvC6v/YKyIkg==",
        rolIdRol: "admin"

      }, {
        name: "useruser",
        surname: "USERsurname",
        age: 20,
        phone: "667777666",
        address: "address-fiction-two",
        email: "user@gmail.com",
        password: "FGFtB7/d4nWUvZVznuX99t18pYNkAqOU+20VGcYACGv2o+jsijjFQZar9ApIjR7T6fvwIoq5chS5VW4hKbYKNQ==",
        rolIdRol: "user"
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});

  }
};
