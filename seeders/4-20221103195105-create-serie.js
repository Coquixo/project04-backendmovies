'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('series', [
      {
        title: "The house of the dragon",
        genre: "Science fiction",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xiB0hsxMpgxpJehYxUDhiUkg2w.jpg",
        synopsis: " The series focuses on the Targaryen house, three hundred years before the events seen in 'Game of Thrones'.",
        rating: "4",
        nextsevendays: true,
        theater: false,
        cine: false,
        ArticleIdArticle: 28,


      }, {
        title: "The Jeffrey Dahmer Story",
        genre: "Terror",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vlUMBgKO1HOwPMJwHnHzr99BHwN.jpg",
        synopsis: "Over the course of more than 10 years, convicted murderer Jeffrey Dahmer killed 17 boys and young men. But how did he manage to evade justice for so long?",
        rating: "5",
        nextsevendays: true,
        theater: false,
        cine: false,
        ArticleIdArticle: 29,


      }, {
        title: "The Lord of the Rings: The Rings of Power",
        genre: "Science fiction",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/suvlZfDAoq5vfVUrfb468KJhFlL.jpg",
        synopsis: "From the darkest depths of the Misty Mountains to the majestic forests of Lindon, they will forge legacies that will endure beyond their demise",
        rating: "4",
        nextsevendays: true,
        theater: false,
        cine: false,
        ArticleIdArticle: 30,


      }, {
        title: "The Walking Dead ",
        genre: "Terror",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hUblG1KZCTRpHc3wqqoU0DW98Q3.jpg",
        synopsis: "Is set in an apocalyptic future with the Earth devastated by the effect of a cataclysm, which has caused most of the planet's inhabitants to mutate into zombies.",
        rating: "5",
        nextsevendays: false,
        theater: false,
        cine: true,
        ArticleIdArticle: 31,


      }, {
        title: "Grey's Anatomy",
        genre: "Drama",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jPzW61WlkyHVdvm8dCQZveTvmgW.jpg",
        synopsis: "Meredith Grey's life is not easy. Try to take control of your life, even if your job is one of those that make your life impossible.",
        rating: "3",
        nextsevendays: false,
        theater: true,
        cine: true,
        ArticleIdArticle: 32,


      }, {
        title: "Los Simpson",
        genre: "Animation",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/u8BMLmwoc7YPHKSWawOOqC1c8lJ.jpg",
        synopsis: "American animated comedy created by Matt Groening for the Fox company. The series is a satirical parody...",
        rating: "5",
        nextsevendays: false,
        theater: false,
        cine: true,
        ArticleIdArticle: 33,


      }, {
        title: "The Flash",
        genre: "Sciene fiction",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/v53HU0aV1Di8QCpS1NHaNWrwFv2.jpg",
        synopsis: "After a particle accelerator causes a freak storm, police science investigator Barry Allen is struck by lightning and falls into a coma...",
        rating: "1",
        nextsevendays: false,
        theater: false,
        cine: true,
        ArticleIdArticle: 34,


      }, {
        title: "The Good Doctor ",
        genre: "Drama",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eCvGVqmxXcNvLMJxLAJeBZ2cUnM.jpg",
        synopsis: "A young autistic surgeon who suffers from the syndrome of the wise man begins to work in a prestigious hospital...",
        rating: "4",
        nextsevendays: true,
        theater: false,
        cine: false,
        ArticleIdArticle: 35,


      }, {
        title: "Chucky",
        genre: "Terror",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kY0BogCM8SkNJ0MNiHB3VTM86Tz.jpg",
        synopsis: "After a vintage Chucky doll turns up at a suburban yard sale, an American city is thrown into chaos...",
        rating: "2",
        nextsevendays: false,
        theater: true,
        cine: true,
        ArticleIdArticle: 36,


      }, {
        title: "Family Guy",
        genre: "Comedy",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tCBuvLgTP9bgjynNvQWa7LSUnHj.jpg",
        synopsis: "The Griffins are a mediocre family made up of Peter and Lois; her children, Meg, Chris, and Stewie; and his anthropomorphic canine pet Brian.",
        rating: "3",
        nextsevendays: false,
        theater: false,
        cine: false,
        ArticleIdArticle: 37,


      }, {
        title: "Peaky Blinders ",
        genre: "Action",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tNjutGgaJpP30xUhfHihbcDgQUu.jpg",
        synopsis: "A family of gang members settled in Birmingham, United Kingdom, after the First World War (1914-1918), runs a horse betting shop...",
        rating: "5",
        nextsevendays: true,
        theater: true,
        cine: true,
        ArticleIdArticle: 38,


      }, {
        title: "Breaking Bad",
        genre: "Action",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
        synopsis: "After turning 50, Walter White, a high school chemistry teacher, learns that he has incurable lung cancer...",
        rating: "5",
        nextsevendays: false,
        theater: false,
        cine: true,
        ArticleIdArticle: 39,


      }, {
        title: "Love is in the Air ",
        genre: "Comedy",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hkchSrpTMCEjdFBX5HU3IpyYXO4.jpg",
        synopsis: "Eda plans to finish her studies as an architect abroad when Serkan Bolat, a young entrepreneur, stands in her way when he decides to cut off her funding for international studies",
        rating: "1",
        nextsevendays: false,
        theater: true,
        cine: false,
        ArticleIdArticle: 40,


      }, {
        title: "Vikings",
        genre: "Action",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uNFSCxeZsZVIQ1TrD6mzu6uMQEb.jpg",
        synopsis: "The series chronicles the sagas of Ragnar's band of Viking brothers and his family, as he rises up to become the king of the Viking tribes.",
        rating: "5",
        nextsevendays: false,
        theater: true,
        cine: false,
        ArticleIdArticle: 41,


      }, {
        title: "Dragon Ball Z",
        genre: "Animation",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uYU1imlk736KYFEKoBjAjZGDmup.jpg",
        synopsis: "It is the continuation of the anime series 'Dragon Ball'",
        rating: "4",
        nextsevendays: false,
        theater: false,
        cine: true,
        ArticleIdArticle: 42,


      }, {
        title: "American Horror Story",
        genre: "Terror",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tiuzjuzalHj377XER1sfq7XQEIT.jpg",
        synopsis: "Each of its seasons narrates an independent plot, set in different places and always closing the story; where many actors repeat, but always playing different characters.",
        rating: "3",
        nextsevendays: false,
        theater: false,
        cine: false,
        ArticleIdArticle: 43,


      }, {
        title: "S.W.A.T.",
        genre: "Action",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7Bttz4hEspKlpU0Me57dkHNR3nf.jpg",
        synopsis: "The series follows Daniel Harrelson, a S.W.A.T. Torn between allegiance to the streets and duty to his fellow officers, he is assigned by aggressive and confident... ",
        rating: "2",
        nextsevendays: false,
        theater: false,
        cine: true,
        ArticleIdArticle: 44,


      }, {
        title: "Cobra Kai",
        genre: "Action",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wbFSslyJrJV0nn3lv0KZb2bEfs1.jpg",
        synopsis: "Sequel to Karate Kid, 30 years after the events of the original film and with the same cast repeating the main roles",
        rating: "3",
        nextsevendays: false,
        theater: true,
        cine: true,
        ArticleIdArticle: 45,


      }

    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('series', null, {});

  }
};
