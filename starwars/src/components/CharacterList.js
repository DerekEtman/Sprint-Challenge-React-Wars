import React, { useState, useEffect } from "react";
import { Card } from 'semantic-ui-react';
import axios from "axios";
import CharacterCard from "./CharacterCard";

import styled from "styled-components";

export default function CharacterList() {
    const [chars, setChars] = useState([]);
    
    useEffect(() => {
      axios
        .get("https://swapi.co/api/people/")
        .then( response => {
            const chars = response.data.results;
            const charFilms = response.data.results.films;
            console.log("chars:", chars);
            setChars(chars);
        })
        .catch(error =>{
            console.log("Error: ", error);
        } )
    }, []);

    return (
        <div className="character">
            <Card.Group>
            {chars.map(character => {
                return (
                    <CharacterCard 
                    key={character.name}
                    id={character.name}
                    name={character.name}
                    height={character.height}
                    mass={character.mass}
                    gender={character.gender}
                    birth_year={character.birth_year}
                    home_world={character.homeworld}
                    films={character.films}
                    />
                );
              })
            }
            </Card.Group>
        </div>
    )
}