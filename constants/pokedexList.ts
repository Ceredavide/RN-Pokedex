const Kanto = require("./pokemons/kanto.json")
const JhotoOrignial = require("./pokemons/original-johto.json")
const JhotoUpdated = require("./pokemons/updated-johto.json")
const Hoenn = require("./pokemons/hoenn.json")
const SinnohOriginal = require("./pokemons/original-sinnoh.json")

const pokemons = {
    "gen1": Kanto,
    "gen2": [JhotoOrignial, JhotoUpdated],
    "gen3": Hoenn,
    "gen4" : SinnohOriginal
}

export default pokemons