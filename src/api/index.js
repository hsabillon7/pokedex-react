import getEnvVars from "../../environment";

// La ruta principal para consultar a la API
const { apiUrl } = getEnvVars();

const fetchPokemons = async () => {
  // Obtendría los 150 pokemon iniciales
  const endpoint = `${apiUrl}pokemon/?limit=150`;

  // Realizar la petición a la API. Esta petición debe ser asíncrona.
  const response = await fetch(endpoint);
  const data = await response.json();

  return data;
};

export default fetchPokemons;
