const BASE_URL = "http://pokeapi.co/api/v2/pokemon";
const url = `${BASE_URL}/1`;

// fetch(url).then((data) => { console.log(data) }).catch((errr) => console.log(err));

// fetch(url).
//   then((data) => {
//     console.log(data);
//     return fetch(`${BASE_URL}/2`)
//   })
//   .then((data) => console.log(data))
//   .catch((errr) => console.log(err));


async function getFirstPokemon() {
  try {
    const result = await fetch(url)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

// getFirstPokemon()

// console.log("test2")


const arrayPromises = [fetch(`${BASE_URL}/1`), fetch(`${BASE_URL}/2`), fetch(`${BASE_URL}/3`)]

// Promise.all(arrayPromises).then(res => console.log(res));

const deberia = async () => {
  const result = await Promise.all(arrayPromises)
  console.log(result)
}