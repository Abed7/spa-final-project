import { useState, useEffect } from "react";

const News = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await response.json();
        console.log(data);

        const pokeNames = data.results.map((pokemon) => pokemon.name);
        console.log("PokemonArray", pokeNames);

        // Fetching details for each Pokémon
        const pokemonDetailsPromises = pokeNames.map(async (pokeName) => {
          const detailResponse = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokeName}`
          );
          const detailData = await detailResponse.json();
          return detailData;
        });

        // Resolving all promises
        const resolvedPokemonDetails = await Promise.all(
          pokemonDetailsPromises
        );

        console.log("PokeDetails", resolvedPokemonDetails);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>News</h1>
    </>
  );
};

export default News;

// import { useState, useEffect } from "react";

// const News = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const test = fetch("https://pokeapi.co/api/v2/pokemon/")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         const pokeNames = data.results.map((pokemon) => pokemon.name);
//         console.log("PokemonArray", pokeNames);

//         // https://pokeapi.co/api/v2/pokemon/NAME

//         const pokemonDetails = pokeNames.map((pokeName) => {
//           fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`).then(
//             (detailResponse) => detailResponse.json()
//           );
//         });

//         Promise.all(pokemonDetails).then((pokeDetails) =>
//           console.log("PokeDetails", pokeDetails)
//         );

//         console.log("Details", pokemonDetails);
//       });
//     console.log(test);
//   }, []);

//   return (
//     <>
//       <h1>News</h1>
//     </>
//   );
// };

// export default News;
