'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('movies', [
        {
          title: "The dark knight",
          genre: "Action",
          image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8QDQExnfNFOtabLDKqfDQuHDsIg.jpg",
          synopsis: "Batman Returns. With the help of Lieutenant Jim Gordon and District Attorney Harvey Dent, Batman sets out to destroy organized crime in Gotham City.",
          punctuation: "4",
          createdAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
          updatedAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` , 
      },{
        title: "The Godfather",
        genre: "Action",
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5HlLUsmsv60cZVTzVns9ICZD6zU.jpg",
        synopsis: "Don Vito Corleone, 'The Godfather', is the patriarch of one of the ruling families in New York in the 1940s. A fight of violent episodes will begin between the different families of organized crime.",
        punctuation: "5",
        createdAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
        updatedAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` , 
    },{
      title: "The green Mile",
      genre: "Drama",
      image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aBQiJRxGRrX0mXFMjxyzWYFtEnf.jpg",
      synopsis: "In the southern United States, Paul Edgecomb is a prison guard in charge of the Green Mile, a corridor that separates the cells condemned to the electric chair. Awaiting his execution is John Coffey, a hulking black man accused of murdering two nine-year-old sisters. ..",
      punctuation: "5",
      createdAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
      updatedAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` , 
  },{
    title: "The Lord of the Rings: The Return of the King",
    genre: "Action",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mWuFbQrXyLk2kMBKF9TUPtDwuPx.jpg",
    synopsis: "Saruman's forces have been destroyed. For the first time in a long time, there seems to be a little hope. Aragorn will have to claim the throne to take his place as king. Frodo and Sam continue on their way to Mordor...",
    punctuation: "4",
    createdAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
    updatedAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` , 
},{
  title: "Interstellar",
  genre: "Science fiction",
  image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nrSaXF39nDfAAeLKksRCyvSzI2a.jpg",
  synopsis: "A group of explorers making use of a recently discovered wormhole to overcome the limitations of manned space travel.",
  punctuation: "3",
  createdAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
  updatedAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` , 
},{
  title: "Inception",
  genre: "Science fiction",
  image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tXQvtRWfkUUnWJAn2tN3jERIUG.jpg",
  synopsis: "Dom Cobb is a skilled thief of valuable secrets from the depths of the subconscious during the dream state when the mind is most vulnerable...",
  punctuation: "3",
  createdAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
  updatedAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` , 
},{
  title: "Matrix",
  genre: "Science fiction",
  image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/plYYSxZ9Wdq4thyVSkhJjbjYtVG.jpg",
  synopsis: "Thomas Anderson leads a double life: by day he's a programmer at a major software company, and by night a computer hacker named Neo. His life will never be the same again when mysterious characters appear on his way.",
  punctuation: "5",
  createdAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
  updatedAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` , 
},{
  title: "Schindler's List",
  genre: "Drama",
  image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3Ho0pXsnMxpGJWqdOi0KDNdaTkT.jpg",
  synopsis: "Oskar Schindler organizes an ambitious plan to win the sympathy of the Nazis. After the invasion of Poland by the Germans, he obtains, thanks to his relations with the Nazis, the ownership of a factory in Krakow.",
  punctuation: "5",
  createdAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
  updatedAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` , 
},{
  title: "Spider-Man: A new universe",
  genre: "Animation",
  image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xRMZikjAHNFebD1FLRqgDZeGV4a.jpg",
  synopsis: "In a parallel universe where Peter Parker has died, a high school boy named Miles Morales is the new Spider-Man.",
  punctuation: "2",
  createdAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
  updatedAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` , 
},{
  title: "The lion king",
  genre: "Animation",
  image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b0MxU37dNmMwKtoPVYPKOZSIrIn.jpg",
  synopsis: "The African savannah is the setting for the adventures of Simba, a little lion who is the heir to the throne.",
  punctuation: "4",
  createdAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
  updatedAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` , 
},{
  title: "The infinite purge",
  genre: "Terror",
  image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zWiXxOTM3NeYcj3dzbtoGqIIJPz.jpg",
  synopsis: "For the members of an underground movement, an annual night of anarchy and murder is no longer enough, so they decide to return America to endless chaos and carnage...",
  punctuation: "1",
  createdAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
  updatedAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` , 
},{
  title: "The exorcist",
  genre: "Terror",
  image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rQU3sOBms4WA7iFAqBCtbMXgaB8.jpg",
  synopsis: "Regan is a twelve-year-old girl who is the victim of paranormal phenomena such as levitation or the manifestation of superhuman strength. His mother goes to a priest with studies in psychiatry...",
  punctuation: "5",
  createdAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
  updatedAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` , 
},{
  title: "The Avengers: Endgame",
  genre: "Action",
  image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/br6krBFpaYmCSglLBWRuhui7tPc.jpg",
  synopsis: "After the devastating events of 'Avengers: Infinity War', the universe is in ruins due to the actions of Thanos. With the help of their remaining allies, the Avengers must reunite once more.",
  punctuation: "4",
  createdAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
  updatedAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` , 
},{
  title: "Untouchable",
  genre: "Drama",
  image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/edPWyHqknFuxFY3sdmC3LtJITWC.jpg",
  synopsis: "Philippe, an aristocrat who has become quadriplegic, hires Driss, an immigrant from a slum recently released from prison, as a home carer",
  punctuation: "5",
  createdAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
  updatedAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` , 
},{
  title: "The truman show",
  genre: "Comedy",
  image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4BGVZSwv5n0hMIAWwiSjMFDQ63K.jpg",
  synopsis: "Truman Burbank is an ordinary man who has lived his entire life in one of those towns where nothing ever happens. However, suddenly, some strange events make him suspect that something abnormal is happening.",
  punctuation: "3",
  createdAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
  updatedAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` , 
},{
  title: "Forrest gump",
  genre: "Comedy",
  image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/azV6hV99lYkdhydsQbJCI6FqMl4.jpg",
  synopsis: "Forrest Gump is a boy with shallow mental deficiencies who, despite everything, will become a hero during the Vietnam War.",
  punctuation: "5",
  createdAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
  updatedAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` , 
},{
  title: "Three men and one leg",
  genre: "Comedy",
  image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qCw7fAZnA7DloKwvzdseWRYi19K.jpg",
  synopsis: "Aldo, Giovanni and Giacomo go to the wedding of the latter whose fiancée is the sister of the two wives of the former. Although there is no good relationship between them, their friendship is forged during the trip...",
  punctuation: "1",
  createdAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
  updatedAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` , 
},{
  title: "The unforeseen of love",
  genre: "Comedy",
  image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lMX7qZAcF54d0DB1Vto8gbWZlVU.jpg",
  synopsis: "Rosie and Alex are the best friends in the world and they live in Dublin. A story of laughter and love will arise between them...",
  punctuation: "1",
  createdAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
  updatedAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` , 
},{
  title: "Alien, the eighth passenger",
  genre: "Terror",
  image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pZ9cAe5FxexJjpCaeiETbXzz3Fs.jpg",
  synopsis: "Back on Earth, the cargo ship Nostromo cuts its journey short and awakens its seven crew members. The central computer, MOTHER, has detected the mysterious transmission of an unknown life form...",
  punctuation: "4",
  createdAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
  updatedAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` , 
},{
  title: "Night and fog",
  genre: "Documental",
  image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2iWYQia8enOai7QEO3TvenleD7r.jpg",
  synopsis: "A walk through the Nazi concentration camps of Nuremberg...",
  punctuation: "3",
  createdAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
  updatedAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` , 
},{
  title: "Avicii: True Stories ",
  genre: "Documental",
  image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/52Q4HLe2U79O1QkskIy2JdEyeEv.jpg",
  synopsis: "Documentary that follows in the footsteps of the famous DJ from his beginnings to his worldwide successes, and his subsequent fight against the disease.",
  punctuation: "5",
  createdAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
  updatedAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` , 
},{
  title: "Free alone",
  genre: "Documental",
  image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/v4QfYZMACODlWul9doN9RxE99ag.jpg",
  synopsis: "Documentary that narrates the feat of Alex Honnold when climbing without any help the vertical rock formation located within the Yosemite National Park (Mariposa County, United States).",
  punctuation: "1",
  createdAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
  updatedAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` , 
},{
  title: "Soul",
  genre: "Animation",
  image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xJ7MCAy4oCLerPo3JjnB8lKOhl4.jpg",
  synopsis: "Have you ever wondered where your passion, dreams, and interests come from? What is it that makes you... you? Travel from the streets of New York to cosmic realms to discover the answers to life's biggest questions",
  punctuation: "3",
  createdAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
  updatedAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` , 
},{
  title: "The glow",
  genre: "Terror",
  image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/p9hqo2JWhBytLxskz4FBKcP2e1k.jpg",
  synopsis: "Jack Torrance moves with his wife and son to the impressive Overlook hotel in Colorado to take care of its maintenance during the winter season.",
  punctuation: "4",
  createdAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
  updatedAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` , 
},{
  title: "Life imprisonment",
  genre: "Drama",
  image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dc1fX265fZIIY5Hab8I7CdETyJy.jpg",
  synopsis: "Accused of the murder of his wife, Andrew Dufresne, after being sentenced to life in prison, is sent to Shawshank prison. Over the years, he will gain the trust of the director of the center and the respect of his fellow inmates, especially Red, the boss of the bribery mafia.",
  punctuation: "2",
  createdAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
  updatedAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` , 
},{
  title: "Klaus",
  genre: "Animation",
  image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aLniylyJlbXEdxvaGSuQkRACWUx.jpg",
  synopsis: "Santa Klaus has arrived for Christmas!",
  punctuation: "1",
  createdAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
  updatedAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` , 
},{
  title: "Tomorrow's war",
  genre: "Science fiction",
  image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tzp6VzED2TBc02bkYoYnQa6r2OK.jpg",
  synopsis: "One day the world comes to a standstill when a group of time travelers is transported from the year 2051 to deliver an urgent message: Humanity is losing the global war against a deadly alien species.",
  punctuation: "1",
  createdAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` ,
  updatedAt:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` , 
}
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
