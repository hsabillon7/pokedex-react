import getEnvVars from "../../environment";

// La ruta principal para consultar a la API
const { apiUrl } = getEnvVars();

export const fetchPokemons = async () => {
  try {
    // Obtendría los 150 pokemon iniciales
    const endpoint = `${apiUrl}pokemon/?limit=25`;

    // Realizar la petición a la API. Esta petición debe ser asíncrona.
    const response = await fetch(endpoint);
    const data = await response.json();

    const pokeInfo = () => {
      const promises = data.results.map(async (pokemon) => {
        return {
          ...pokemon,
          pokemonInfo: await searchPokemon(pokemon.name),
        };
      });

      return Promise.all(promises);
    };

    return { count: data.count, results: await pokeInfo() };
  } catch (error) {
    console.log(error);
    return { count: 0 };
  }
};

export const searchPokemon = async (pokemon) => {
  try {
    const endpoint = `${apiUrl}pokemon/${pokemon}`;

    const response = await fetch(endpoint);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
