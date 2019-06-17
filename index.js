const express = require('express')
const path = require('path')
const cors = require('cors')
const PORT = process.env.PORT || 5000

express()
  .use(cors())
  .use(express.static(path.join()))
  .get('/', (req, res) => res.json(
      [
          {
              "sectionName": "Best Movies",
              "movies": [
                  {
                      "name": "The glass castle",
                      "imgAlt": "Jhon Travolta no mundo da lua",
                      "imgPath": "assets/movies/bests/1.jpg"
                  },
                  {
                      "name": "American Assassin",
                      "imgAlt": "A volta dos que não foram",
                      "imgPath": "assets/movies/bests/2.jpg"
                  },
                  {
                      "name": "All the money in the world",
                      "imgAlt": "Tranças da vovó careca",
                      "imgPath": "assets/movies/bests/3.jpg"
                  },
                  {
                      "name": "Mark Felt",
                      "imgAlt": "Quer ser estagiário da ZUP?",
                      "imgPath": "assets/movies/bests/4.jpg"
                  },
                  {
                      "name": "Molly's Game",
                      "imgAlt": "A volta dos que não foram",
                      "imgPath": "assets/movies/bests/5.jpg"
                  },
                  {
                      "name": "The Foreigner",
                      "imgAlt": "A volta dos que não foram 2",
                      "imgPath": "assets/movies/bests/6.jpg"
                  }
              ]
          },
          {
              "sectionName": "Drama",
              "movies": [
                  {
                      "name": "Last flag flying",
                      "imgAlt": "Meu dente caiu",
                      "imgPath": "assets/movies/drama/1.jpg"
                  },
                  {
                      "name": "the upside",
                      "imgAlt": "Que tal trabalhar na ZUP?",
                      "imgPath": "assets/movies/drama/2.jpg"
                  },
                  {
                      "name": "Missing in America",
                      "imgAlt": "Tranças da vovó careca",
                      "imgPath": "assets/movies/drama/3.jpg"
                  },
                  {
                      "name": "The ghost writer",
                      "imgAlt": "Poeira em alto mar",
                      "imgPath": "assets/movies/drama/4.jpg"
                  },
                  {
                      "name": "Run all night",
                      "imgAlt": "A volta dos que não foram",
                      "imgPath": "assets/movies/drama/5.jpg"
                  },
                  {
                      "name": "Black Mass",
                      "imgAlt": "A volta dos que não foram 2",
                      "imgPath": "assets/movies/drama/6.jpg"
                  }
              ]
          },
          {
              "sectionName": "Original",
              "movies": [
                  {
                      "name": "Bosch",
                      "imgAlt": "Copa do mundo feminino",
                      "imgPath": "assets/movies/original/1.jpg"
                  },
                  {
                      "name": "HANNA",
                      "imgAlt": "Ronaldo feênomeno",
                      "imgPath": "assets/movies/original/2.jpg"
                  },
                  {
                      "name": "Jack Ryan",
                      "imgAlt": "Pelé maior que Maradona",
                      "imgPath": "assets/movies/original/3.jpg"
                  },
                  {
                      "name": "The Marvelous Mrs. Maisel",
                      "imgAlt": "Quer ser estagiário de FRONT na ZUP?",
                      "imgPath": "assets/movies/original/4.jpg"
                  },
                  {
                      "name": "sneaky pete",
                      "imgAlt": "GO ZUP!",
                      "imgPath": "assets/movies/original/5.jpg"
                  },
                  {
                      "name": "American Gods",
                      "imgAlt": "GO ZUP!",
                      "imgPath": "assets/movies/original/6.jpg"
                  }
              ]
          },
          {
              "sectionName": "Recent",
              "movies": [
                  {
                      "name": "Crimes ocultos",
                      "imgAlt": "Dota melhor que LOL",
                      "imgPath": "assets/movies/recent/1.jpg"
                  },
                  {
                      "name": "The mechanic",
                      "imgAlt": "Minicurso show",
                      "imgPath": "assets/movies/recent/2.jpg"
                  },
                  {
                      "name": "Nothing but the truth",
                      "imgAlt": "Este é um filme recem adicionado",
                      "imgPath": "assets/movies/recent/3.jpg"
                  },
                  {
                      "name": "Longe dos homens",
                      "imgAlt": "Meu filme recente",
                      "imgPath": "assets/movies/recent/4.jpg"
                  },
                  {
                      "name": "A simple favor",
                      "imgAlt": "Prefere ser Backend? Temos vagas também!",
                      "imgPath": "assets/movies/recent/5.jpg"
                  },
                  {
                      "name": "22 bullets",
                      "imgAlt": "Prefere ser Backend? Temos vagas também!",
                      "imgPath": "assets/movies/recent/6.jpg"
                  }
              ]
          }
      ]
      ))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
