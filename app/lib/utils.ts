import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { getPokemonNames } from "./pokemonApi";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getRandomPokemonName() {
  const pokemonNames: [] = await getPokemonNames();
  const randomIndex = Math.floor(Math.random() * pokemonNames.length)
  console.log("randomIndex", pokemonNames[randomIndex])
  return pokemonNames[randomIndex];
}

export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
