"use client"; // Client component
import react, { useState } from "react";
import Image from "next/image";
// width={200}
// height={200}

export function PokemonImage({ image, name }: { image: string, name: string }) {

    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <Image
            src={image}
            alt={"Picture of " + name}
            priority
            fill
            objectFit="contain"
            className={`transition-opacity duration-2000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsLoaded(true)}
        //onLoadingComplete={(image) => image.classList.remove('opacity-0"')}
        />
    )
}
