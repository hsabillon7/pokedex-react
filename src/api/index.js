// La ruta principal para consultar a la API
const pokeapi = "https://pokeapi.co/api/v2/";

const fetchPokemons = async () => {
  // Obtendría los 150 pokemon iniciales
  const endpoint = `${pokeapi}pokemon/?limit=150`;

  // Realizar la petición a la API. Esta petición debe ser asíncrona.
  const response = await fetch(endpoint);
  const data = await response.json();

  console.log(data);

  return data;
};

export default fetchPokemons;
