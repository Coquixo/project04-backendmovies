'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [
      {
        id_user:1,
        name: "Javi",
        surname: "Moya",
        age: "28",
        phone: "652222196",
        address: "Avenida Machado, 23",
        mail: "javiermoyasimo@gmail.com",
        password: "12344321",
        id_rol: 1,
        createdAt: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
        updatedAt: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
      },
      {
        id_user:2,
        name: "Julio",
        surname: "López",
        age: "22",
        phone: "653890987",
        address: "Avenida Serreria,22",
        mail: "juliolopez@gmail.com",
        password: "43211234",
        id_rol: 2,
        createdAt: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
        updatedAt: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
      },
      {
        id_user:3,
        name: "Roberto",
        surname: "Leal",
        age: "25",
        phone: "677654321",
        address: "Calle Lisa,44",
        mail: "robertoleal@gmail.com",
        password: "55559999",
        id_rol: 3,
        createdAt: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
        updatedAt: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
      },
      {
        id_user:4,
        name: "Estefanía",
        surname: "Miró",
        age: "24",
        phone: "666555444",
        address: "Avenida Roja, 45",
        mail: "estefaniamiro@gmail.com",
        password: "87654321",
        id_rol: 4,
        createdAt: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
        updatedAt: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});

  }
};
