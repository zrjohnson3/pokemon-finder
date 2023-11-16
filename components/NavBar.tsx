"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiFillBug } from 'react-icons/ai'
import { SiPokemon } from "react-icons/si"
import { CgPokemon } from "react-icons/cg";
import classNames from 'classnames'; // https://www.npmjs.com/package/classnames

const NavBar = () => {

    const currentPath = usePathname();
    console.log(currentPath);

    const links = [
        {
            id: 0, label: <div className="flex flex-row flex-wrap justify-between items-center"><CgPokemon className="w-6 h-6" />
                <span>Pokemon Finder</span></div>, href: '/'
        },
        { id: 1, label: 'pokemon', href: '/pokemon' },
    ];
    return (
        <nav className='flex space-x-6 border-b bg-gray-800 mb-5 px-5 h-14 items-center'>
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