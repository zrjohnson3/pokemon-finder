"use client";
import { useState } from "react";
import { Label } from "./ui/label"; //shadcn-ui components
import { Input } from "./ui/input";
import { PokemonCard } from "./PokemonCard";

// <PokemonGrid pokemonList={data} />
interface PokemonGridProps {
    // pokemonList: any;

    pokemonList: [
        name: string,
        url: string
    ];
};

export function PokemonGrid({ pokemonList }: PokemonGridProps) {
    const [searchText, setSearchText] = useState("");

    console.log(pokemonList);

    return (
        <>
            <div>
                <h3 className="text-2xl py-6 text-center">Search For Your Pokemon!</h3>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="pokemonName">Pokemon Name</Label>
                    <Input
                        type="text"
                        value={searchText}
                        autoComplete="off"
                        id="pokemonName"
                        placeholder="Charizard, Pikachu, etc..."
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
                <h3 className="text-3xl pt-12 pb-6 text-center">Pokemon Collection</h3>
            </div>
            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <PokemonCard name="Pikachu" />
                <PokemonCard name="Pikachu" />
                <PokemonCard name="Pikachu" />
                <PokemonCard name="Pikachu" />
                {/* <PokemonCard />
                <PokemonCard /> */}

            </div>
        </>
    )
}