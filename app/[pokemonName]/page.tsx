// pokemonName

// pokemonName = "pikachu" --> show pikachu page with stats and image

export default async function PokemonPage({ params }: { params: { pokemonName: string } }) {
    // Object destructuring to get the pokemonName from params
    const { pokemonName } = params;
    // pikachu --> Pikachu
    // get the API data from pikachu

    return (
        <>
            <h1 className="text-4xl text-bold">{pokemonName}</h1>
            {/* <h1 className="text-4xl text-bold">{pokemonName}</h1>
            <h1 className="text-4xl text-bold">{pokemonName}</h1> */}
        </>
    )
};