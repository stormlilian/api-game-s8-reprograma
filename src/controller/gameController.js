const jogos = require("../model/games.json")
const { response, request } = require('express');

const newListGames = jogos.map(jogo => {
    const newGame = {
        id: jogo.id,
        nome: jogo.name,
        genero: jogo.genre,
        plataformas: jogo.platforms,
        capa: jogo.cover 

    }

    return newGame
})

const getGames = (request, response) => {
    response.status(200).send(newListGames)
}

const listComplete = jogos.map(jogo => {
    const games = {
        id: jogo.id,
        nome: jogo.name,
        genero: jogo.genre,
        plataformas: jogo.platforms,
        data_lancamento: jogo.first_release_date,
        slug: jogo.slug,
        resumo: jogo.summary,
        empresa: jogo.company,
        capa: jogo.cover
    }
    return games
})

const getGamesById = (request, response) => {
    const {id} = request.params
    const game = listComplete.find(game => game.id == id)

    if (game) {
        response.status(200).send(game)
    } else {
        response.status(404).send("Jogo não encontrado")
    }
}


module.exports = {
    getGames,
    getGamesById,

}

