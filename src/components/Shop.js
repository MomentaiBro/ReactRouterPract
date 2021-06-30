import React, {useState, useEffect} from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Shop(){

    useEffect(() => {
        fetchItems()
    }, [])

    const [characters, setCharacters] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://rickandmortyapi.com/api/character');

        const characters = await data.json();

        setCharacters(characters.results)
    }
    

    return(
        <main>
            {characters.map( character => (
                <h1 key={character.id}> 
                <Link to={`/shop/${character.id}`}> 
                    {character.name}
                </Link>
                </h1>

            ))}
        </main>
    )
}

export default Shop;