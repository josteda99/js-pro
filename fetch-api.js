const POKE_URL = "https://pokeapi.co/api/v2/pokemon";

async function getPokemon() {
  try {
    const resp = await fetch(POKE_URL);

    // here even if it fails, I can get a resp object
    if (!resp.ok) {
      throw new Error(response.status)
    }
    const data = await resp.json();
    console.log(resp);
    console.log(data);
  } catch (error) {
    console.log(error)
  }
}