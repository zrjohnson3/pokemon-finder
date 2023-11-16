
const POKEMON_API_BASE = "https://pokeapi.co/api/v2/";
const POKEMON_NUM_LIMIT = "pokemon?limit=151&offset=0"; // 151 pokemon, starting from 0


// getPokemonList -> get the first 151 pokemon from PokemonAPI
export async function getPokemonList() {
    const response = await fetch(POKEMON_API_BASE + POKEMON_NUM_LIMIT);
    const data = await response.json();
    return data.results;
}


// getPokemon -> given a string "pikachu", get the information of that pokemon