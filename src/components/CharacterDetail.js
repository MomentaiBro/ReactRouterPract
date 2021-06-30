import React, {useState, useEffect} from 'react'
import '../App.css'


function Character({ match }){

    useEffect(() => {
        fetchCharacter();
    }, [])

    const [character, setCharacter] = useState({
        name: []
    });

    const fetchCharacter = async () => {
        const data = await fetch(`https://rickandmortyapi.com/api/character/${match.params.id}`)

        const character = await data.json();
        setCharacter(character) 
        console.log(character)
    }

    return(
        <main>
            <h1>{character.results.name}</h1>
        </main>
    )
}

export default Character;