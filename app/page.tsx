import { PokemonCard } from '@/components/PokemonCard'
import { PokemonGrid } from '@/components/PokemonGrid'
import Image from 'next/image'

export default function Home() {

  // Text input: Filter the pokemon cards under it:
  // Text input -> "use client" we need to access to useState to handle the data
  // When the text is inputted -> filter through our current pokemon data.
  // ("use client") PokemonGrid -> (Text input, showing all the cards that match the filter)

  // We are going to get data for the 151 pokemon from a server component.

  // Pass the data to PokemonGrid

  // 1. Create PokemonGrid (and more components)
  // 2. Load in the data from Pokemon API (151 Pokemon)
  // 3. Pass the data to PokemonGrid, show all the pokemon from API call.


  return (
    <PokemonGrid />
  )
}
