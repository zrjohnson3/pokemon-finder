// Server Component
import Image from "next/image";
import { getPokemon } from "@/lib/pokemonApi";
import { PokemonImage } from "@/components/PokemonImage";
import { Progress } from "@/components/ui/progress";
import { Card, CardHeader } from "@/components/ui/card";
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
            <Card className="m-2 p-4">
                <CardHeader className="flex items-center justify-center">
                    <h1 className="text-4xl text-bold">{pokemonName}</h1>
                    <div className="m-4" style={{ position: "relative", width: "300px", height: "300px" }}>
                        <PokemonImage
                            image={pokemonObject.sprites.other['official-artwork'].front_default} //pokemonObject.sprites.front_default
                            name={pokemonName}
                        />
                    </div >

                </CardHeader>

                {/* <span><p>Weight: {pokemonObject.weight}</p> <p>Type: {pokemonObject.types[0].type.name}</p ></span > */}

                <div className="flex justify-between p-2 m-3 w-full">
                    <p>Weight: {pokemonObject.weight}</p>
                    <p>Type: {pokemonObject.types[0].type.name}</p>
                </div>
                <br />

                <div className="flex-col">
                    {pokemonObject.stats.map((statObject: any) => {
                        // Store the stats (name, base_stat, etc..) in statObject
                        const statName = statObject.stat.name;
                        const statValue = statObject.base_stat;
                        return (
                            <div className="flex items-stretch" style={{ width: "600px" }} key={statName}>
                                <h3 className="p-3 w-2/4">{statName}: {statValue}</h3>
                                <Progress value={statValue} />
                            </div>
                        )
                    })}
                </div>

            </Card>
        </>
    )
};