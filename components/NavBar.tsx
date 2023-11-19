"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiFillBug } from 'react-icons/ai'
import { SiPokemon } from "react-icons/si"
import { CgPokemon } from "react-icons/cg";
import classNames from 'classnames'; // https://www.npmjs.com/package/classnames
import { getRandomInt, getRandomPokemonName } from '@/lib/utils';
import { getPokemon, getPokemonList } from '@/lib/pokemonApi';
import { useRouter } from 'next/navigation';

// blue #0075BE and yellow #FFCC00, pokemon colors


const NavBar = () => {

    const [randomPokemon, setRandomPokemon] = useState('');

    const router = useRouter();

    // useEffect(() => {
    //     getRandomPokemonName().then((pokemonName) => {
    //         setRandomPokemon(pokemonName);
    //     }).catch((error) => {
    //         console.error("Error fetchin random Pokemon name: ", error);
    //     })
    // }, [onclick, setRandomPokemon]);

    const handleRandomPokemonClick = async (e: any) => {
        e.preventDefault();
        try {
            const newName = await getRandomPokemonName();
            setRandomPokemon(newName);
            router.push(`/${newName}`);
        }
        catch (error) {
            console.error("Error fetching random Pokemon name: ", error);
        }
    }

    const currentPath = usePathname();
    console.log(currentPath);

    const links = [
        {
            id: 0,
            label: <div className="flex flex-row flex-wrap justify-between items-center"><CgPokemon className="w-6 h-6" />
                <span>Pokemon Finder</span></div>,
            href: '/'
        },
        {
            id: 1,
            label: <div onClick={handleRandomPokemonClick}>Random Pokemon</div>,
            href: `/${randomPokemon} `

        },
    ];


    return (
        <nav className='flex space-x-6 border-b bg-yellow-400 mb-5 px-5 h-14 items-center'>
            {/* <Link href={"/"} className="flex items-center ">
                <CgPokemon className="w-6 h-6" />
                <span className="flex-shrink-0">Pokemon Finder</span>
            </Link> */}
            <ul className='flex space-x-6'>
                {links.map((link) => (
                    <Link key={link.id} href={link.href}
                        className={classNames({
                            'text-zinc-300': link.href === currentPath,
                            'text-zinc-500': link.href !== currentPath,
                            'hover:text-zinc-100 transision-colors': true,
                        })}
                    >
                        {link.label}
                    </Link>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar