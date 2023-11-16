import Image from "next/image";
import { getPokemon } from "@/lib/pokemonApi";
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
            <Image
                src={pokemonObject.sprites.front_default}
                alt={"Picture of " + pokemonName}
                width={200}
                height={200}
            >

            </Image>
            {/* <h1 className="text-4xl text-bold">{pokemonName}</h1>
            <h1 className="text-4xl text-bold">{pokemonName}</h1> */}
        </>
    )
};