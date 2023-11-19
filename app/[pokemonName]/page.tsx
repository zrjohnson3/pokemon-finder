// Server Component
import Image from "next/image";
import { getPokemon } from "@/lib/pokemonApi";
import { PokemonImage } from "@/components/PokemonImage";
// pokemonName

// pokemonName = "pikachu" --> show pikachu page with stats and image

export default async function PokemonPage({ params }: { params: { pokemonName: string } }) {
    // Object destructuring to get the pokemonName from params
    const { pokemonName } = params;
    // pikachu --> Pikachu
    // get the API data from pikachu
    const pokemonObject = await getPokemon(pokemonName);
    console.log(pokemonObject);

    return (
        <>
            <h1 className="text-4xl text-bold">{pokemonName}</h1>
            <div className="m-4" style={{ position: "relative", width: "300px", height: "300px" }}>
                <PokemonImage
                    image={pokemonObject.sprites.other['official-artwork'].front_default} //pokemonObject.sprites.front_default
                    name={pokemonName}
                />
            </div >
        </>
    )
};