'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('movies', [
      {
        title: "The dark knight",
        genre: "Action",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8QDQExnfNFOtabLDKqfDQuHDsIg.jpg",
        synopsis: "Batman Returns. With the help of Lieutenant Jim Gordon  Batman sets out to destroy organized crime in Gotham City.",
        rating: "4",
        year: "2008",
        ArticleIdArticle: 1,
        
      }, {
        title: "The Godfather",
        genre: "Action",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5HlLUsmsv60cZVTzVns9ICZD6zU.jpg",
        synopsis: "'The Godfather' is the patriarch of one of the ruling families in New York in the 1940s. A fight of violent episodes will begin...",
        rating: "5",
        year: "1972",
        ArticleIdArticle: 2,
        
      }, {
        title: "The green Mile",
        genre: "Drama",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aBQiJRxGRrX0mXFMjxyzWYFtEnf.jpg",
        synopsis: "In the southern United States, Paul Edgecomb is a prison guard in charge of the Green Mile, a corridor that separates the cells condemned to the electric chair",
        rating: "5",
        year: "1999",
        ArticleIdArticle: 3,
        
      }, {
        title: "The Lord of the Rings: The Return of the King",
        genre: "Action",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mWuFbQrXyLk2kMBKF9TUPtDwuPx.jpg",
        synopsis: "Saruman's forces have been destroyed. For the first time in a long time, there seems to be a little hope...",
        rating: "4",
        year: "2003",
        ArticleIdArticle: 4,
        
      }, {
        title: "Interstellar",
        genre: "Science fiction",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nrSaXF39nDfAAeLKksRCyvSzI2a.jpg",
        synopsis: "A group of explorers making use of a recently discovered wormhole to overcome the limitations of manned space travel.",
        rating: "3",
        year: "2010",
        ArticleIdArticle: 5,
        
      }, {
        title: "Inception",
        genre: "Science fiction",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tXQvtRWfkUUnWJAn2tN3jERIUG.jpg",
        synopsis: "Dom Cobb is a skilled thief of valuable secrets from the depths of the subconscious during the dream state when the mind is most vulnerable...",
        rating: "3",
        year: "1999",
        ArticleIdArticle: 6,
        
      }, {
        title: "Matrix",
        genre: "Science fiction",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/plYYSxZ9Wdq4thyVSkhJjbjYtVG.jpg",
        synopsis: "Thomas Anderson leads a double life: by day he's a programmer at a major software company, and by night a computer hacker named Neo.",
        rating: "5",
        year: "1994",
        ArticleIdArticle: 7,
        
      }, {
        title: "Schindler's List",
        genre: "Drama",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3Ho0pXsnMxpGJWqdOi0KDNdaTkT.jpg",
        synopsis: "Oskar Schindler organizes an ambitious plan to win the sympathy of the Nazis. After the invasion of Poland...",
        rating: "5",
        year: "1973",
        ArticleIdArticle: 8,
        
      }, {
        title: "Spider-Man: A new universe",
        genre: "Animation",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xRMZikjAHNFebD1FLRqgDZeGV4a.jpg",
        synopsis: "In a parallel universe where Peter Parker has died, a high school boy named Miles Morales is the new Spider-Man.",
        rating: "2",
        year: "2003",
        ArticleIdArticle: 9,
        
      }, {
        title: "The lion king",
        genre: "Animation",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b0MxU37dNmMwKtoPVYPKOZSIrIn.jpg",
        synopsis: "The African savannah is the setting for the adventures of Simba, a little lion who is the heir to the throne.",
        rating: "4",
        year: "1994",
        ArticleIdArticle: 10,
        
      }, {
        title: "The infinite purge",
        genre: "Terror",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zWiXxOTM3NeYcj3dzbtoGqIIJPz.jpg",
        synopsis: "For the members of an underground movement, an annual night of anarchy and murder is no longer enough, so they decide to return America to endless chaos and carnage...",
        rating: "1",
        year: "2010",
        ArticleIdArticle: 11,
        
      }, {
        title: "The exorcist",
        genre: "Terror",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rQU3sOBms4WA7iFAqBCtbMXgaB8.jpg",
        synopsis: "Regan is a twelve-year-old girl who is the victim of paranormal phenomena such as levitation or the manifestation of superhuman strength.",
        rating: "5",
        year: "1997",
        ArticleIdArticle: 12,
        
      }, {
        title: "The Avengers: Endgame",
        genre: "Action",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/br6krBFpaYmCSglLBWRuhui7tPc.jpg",
        synopsis: "After the devastating events of 'Avengers: Infinity War', the universe is in ruins due to the actions of Thanos...",
        rating: "4",
        year: "2020",
        ArticleIdArticle: 13,
        
      }, {
        title: "Untouchable",
        genre: "Drama",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/edPWyHqknFuxFY3sdmC3LtJITWC.jpg",
        synopsis: "Philippe, an aristocrat who has become quadriplegic, hires Driss, an immigrant from a slum recently released from prison, as a home carer",
        rating: "5",
        year: "2003",
        ArticleIdArticle: 14,
        
      }, {
        title: "The truman show",
        genre: "Comedy",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4BGVZSwv5n0hMIAWwiSjMFDQ63K.jpg",
        synopsis: "Truman Burbank is an ordinary man who has lived his entire life in one of those towns where nothing ever happens. However, suddenly...",
        rating: "3",
        year: "1998",
        ArticleIdArticle: 15,
        
      }, {
        title: "Forrest gump",
        genre: "Comedy",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/azV6hV99lYkdhydsQbJCI6FqMl4.jpg",
        synopsis: "Forrest Gump is a boy with shallow mental deficiencies who, despite everything, will become a hero during the Vietnam War.",
        rating: "5",
        year: "1994",
        ArticleIdArticle: 16,
        
      }, {
        title: "Three men and one leg",
        genre: "Comedy",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qCw7fAZnA7DloKwvzdseWRYi19K.jpg",
        synopsis: "Aldo, Giovanni and Giacomo go to the wedding of the latter whose fiancée is the sister of the two wives of the former...",
        rating: "1",
        year: "1997",
        ArticleIdArticle: 17,
        
      }, {
        title: "The unforeseen of love",
        genre: "Comedy",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lMX7qZAcF54d0DB1Vto8gbWZlVU.jpg",
        synopsis: "Rosie and Alex are the best friends in the world and they live in Dublin. A story of laughter and love will arise between them...",
        rating: "1",
        year: "2010",
        ArticleIdArticle: 18,
        
      }, {
        title: "Alien, the eighth passenger",
        genre: "Terror",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pZ9cAe5FxexJjpCaeiETbXzz3Fs.jpg",
        synopsis: "Back on Earth, the cargo ship Nostromo cuts its journey short and awakens its seven crew members...",
        rating: "4",
        year: "1979",
        ArticleIdArticle: 19,
        
      }, {
        title: "Night and fog",
        genre: "Documental",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2iWYQia8enOai7QEO3TvenleD7r.jpg",
        synopsis: "A walk through the Nazi concentration camps of Nuremberg...",
        rating: "3",
        year: "2011",
        ArticleIdArticle: 20,
        
      }, {
        title: "Avicii: True Stories ",
        genre: "Documental",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/52Q4HLe2U79O1QkskIy2JdEyeEv.jpg",
        synopsis: "Documentary that follows in the footsteps of the famous DJ from his beginnings to his worldwide successes, and his subsequent fight against the disease.",
        rating: "5",
        year: "2020",
        ArticleIdArticle: 21,
        
      }, {
        title: "Free alone",
        genre: "Documental",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/v4QfYZMACODlWul9doN9RxE99ag.jpg",
        synopsis: "Documentary that narrates the feat of Alex Honnold when climbing without any help the vertical rock formation located within the Yosemite.",
        rating: "1",
        year: "2018",
        ArticleIdArticle: 22,
        
      }, {
        title: "Soul",
        genre: "Animation",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xJ7MCAy4oCLerPo3JjnB8lKOhl4.jpg",
        synopsis: "Have you ever wondered where your passion, dreams, and interests come from? What is it that makes you... you?",
        rating: "3",
        year: "2019",
        ArticleIdArticle: 23,
        
      }, {
        title: "The glow",
        genre: "Terror",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/p9hqo2JWhBytLxskz4FBKcP2e1k.jpg",
        synopsis: "Jack Torrance moves with his wife and son to the impressive Overlook hotel in Colorado to take care of its maintenance during the winter season.",
        rating: "4",
        year: "1980",
        ArticleIdArticle: 24,
        
      }, {
        title: "Life imprisonment",
        genre: "Drama",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dc1fX265fZIIY5Hab8I7CdETyJy.jpg",
        synopsis: "Accused of the murder of his wife, Andrew Dufresne, after being sentenced to life in prison, is sent to Shawshank prison...",
        rating: "2",
        year: "2015",
        ArticleIdArticle: 25,
        
      }, {
        title: "Klaus",
        genre: "Animation",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aLniylyJlbXEdxvaGSuQkRACWUx.jpg",
        synopsis: "Santa Klaus has arrived for Christmas!",
        rating: "1",
        year: "2020",
        ArticleIdArticle: 26,
        
      }, {
        title: "Tomorrow's war",
        genre: "Science fiction",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tzp6VzED2TBc02bkYoYnQa6r2OK.jpg",
        synopsis: "One day the world comes to a standstill when a group of time travelers is transported from the year 2051 to deliver an urgent message: Humanity is losing the global war against a deadly alien species.",
        rating: "1",
        year: "2021",
        ArticleIdArticle: 27,
        
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('movies', null, {});

  }
};
